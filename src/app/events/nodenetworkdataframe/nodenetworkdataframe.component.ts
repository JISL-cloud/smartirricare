import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiValveEvent } from '../valveevents/valve.model';
import { MultiNodeNwDataFrame } from './nodenetworkdataframe.model';

@Component({
  selector: 'app-nodenetworkdataframe',
  templateUrl: './nodenetworkdataframe.component.html',
  styleUrls: ['./nodenetworkdataframe.component.css']
})
export class NodenetworkdataframeComponent implements OnInit {

  modelLst: MultiNodeNwDataFrame[] = [];
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject<any>();
  postEvents:PostEvents = new PostEvents()

  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      //serverSide: true,
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
    this.getValveEvets();
  }

  getRtuIdFronNode(nodeid:number){
    return (nodeid & 1023).toString();
  }
  
  getNetworkFronNode(nodeid:number){
    return (nodeid >> 10).toString();
  }
  getValveEvets() {
    this.valveservice.getNodeNetworkDataFrame().subscribe(
      (response: MultiNodeNwDataFrame[]) => {
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  clear(){
    this.getValveEvets();

  }
  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getNodeNetworkDataFrameByDate(this.postEvents).subscribe(
        (response: MultiNodeNwDataFrame[]) => {
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
}
