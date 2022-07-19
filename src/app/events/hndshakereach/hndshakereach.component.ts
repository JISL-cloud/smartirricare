import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiHandShakeReach } from './handshakereach';

@Component({
  selector: 'app-hndshakereach',
  templateUrl: './hndshakereach.component.html',
  styleUrls: ['./hndshakereach.component.css']
})
export class HndshakereachComponent implements OnInit {
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }
  sensorLst: MultiHandShakeReach[] = [];  
  postEvents:PostEvents = new PostEvents()

  dtOptions: any
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      processing: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      dom: 'Blfrtip',
      buttons: [
        'colvis',
        'excel',
      ],
      order: [1, 'desc'],
      columnDefs: [
        { type: "date", targets: [0] }

      ],
      //destroy: true
      stateSave: true,
      //processing: true,

    };
    this.getEvents();
  }
  getRtuIdFronNode(nodeid: number) {
    return (nodeid & 1023).toString();
  }

  getNetworkFronNode(nodeid: number) {
    return (nodeid >> 10).toString();
  }
  getEpocTime(time: any) {
    const unixEpochTimeMS = time * 1000;
    const d = new Date(unixEpochTimeMS);
    return d.toLocaleString();
  }
 
  clear(){
    this.getEvents();

  }
  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getHandshakeReachDataByDate(this.postEvents).subscribe(
        (response: MultiHandShakeReach[]) => {
          $('#dt1').DataTable().destroy();
          this.sensorLst = response;
          this.dtTrigger.next();
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }
  getEvents() {
    this.valveservice.getHandshakeReachList().subscribe(
      (response: MultiHandShakeReach[]) => {
        this.sensorLst = response;
        this.dtTrigger.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching list. <br />
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

  getDefaultState(state:any){
    if(state == 1){
      return "NC"
    }
    else if(state ==0){
      return "NO"
    }
    else{
      return ""
    }
  }
}
