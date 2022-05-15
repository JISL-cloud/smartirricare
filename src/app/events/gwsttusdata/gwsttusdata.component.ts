import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { GwstatusData } from './gwstatusdata.model';

@Component({
  selector: 'app-gwsttusdata',
  templateUrl: './gwsttusdata.component.html',
  styleUrls: ['./gwsttusdata.component.css']
})
export class GwsttusdataComponent implements OnInit {
  postEvents: PostEvents = new PostEvents()
  modelLst: GwstatusData[] = [];
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
     // serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      // columnDefs: [
      //   { "orderable": false, "targets": [0, 5] }

      // ],
      //destroy: true
      stateSave: true,
      dom: 'Blfrtip',
      buttons: [
        'colvis',
        'excel',
      ]

    };
    this.getEvets();
  }
  getEvets() {
    this.valveservice.getGwstatusData().subscribe(
      (response: GwstatusData[]) => {
        this.modelLst = response;
        this.dtTrigger.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching valve list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  getEpocTime(time: any) {
    const unixEpochTimeMS = time * 1000;
    const d = new Date(unixEpochTimeMS);
    return d.toLocaleString();
  }
  getRtuIdFronNode(nodeid: number) {
    return (nodeid & 1023).toString();
  }

  getNetworkFronNode(nodeid: number) {
    return (nodeid >> 10).toString();
  }

  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getGwstatusDataByDate(this.postEvents).subscribe(
        (response: GwstatusData[]) => {
          $('#dt1').DataTable().destroy();
          this.modelLst = response;
          this.dtTrigger.next();
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching valve State list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  clear() {
    this.getEvets();
  }
}
