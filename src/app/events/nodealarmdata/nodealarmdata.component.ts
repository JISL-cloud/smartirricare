import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { MultiNodeAlarm, PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiSensorAlarmData, MultiSensorType, MultiSensorAlarmReason, MultiAlarmTypes } from '../valveevents/valve.model';

@Component({
  selector: 'app-nodealarmdata',
  templateUrl: './nodealarmdata.component.html',
  styleUrls: ['./nodealarmdata.component.css']
})
export class NodealarmdataComponent implements OnInit {

  constructor(public valveservice: EventsService, public toastr: ToastrService) { }
  sensorLst: MultiNodeAlarm[] = [];  
  multiAlarmTypes: MultiAlarmTypes[]=[]
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
    this.getSSEvets();
    this.getAlarmTypes();  
  }
  getRtuIdFronNode(nodeid: number) {
    return (nodeid & 1023).toString();
  }
  getAlarmTypes() {
    this.valveservice.getAlarmTypes().subscribe(
      (response: MultiAlarmTypes[]) => {
        this.multiAlarmTypes = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching sensor type list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getAlarmType(AlarmType:string){
    return this.multiAlarmTypes.filter(x=>x.Value == +AlarmType)[0].Description
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
    this.getSSEvets();

  }
  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getNodeAlarmDataByDate(this.postEvents).subscribe(
        (response: MultiNodeAlarm[]) => {
          $('#dt1').DataTable().destroy();
          this.sensorLst = response;
          this.dtTrigger.next();
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching node alarm list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }
  getSSEvets() {
    this.valveservice.getNodeAlarmDataList().subscribe(
      (response: MultiNodeAlarm[]) => {
        this.sensorLst = response;
        this.dtTrigger.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching nodel alarm list. <br />
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
