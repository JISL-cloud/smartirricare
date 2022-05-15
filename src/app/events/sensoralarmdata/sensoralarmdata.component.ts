import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiSensorAlarmData, MultiSensorAlarmReason, MultiSensorEvent, MultiSensorType } from '../valveevents/valve.model';

@Component({
  selector: 'app-sensoralarmdata',
  templateUrl: './sensoralarmdata.component.html',
  styleUrls: ['./sensoralarmdata.component.css']
})
export class SensoralarmdataComponent implements OnInit {
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }
  sensorLst: MultiSensorAlarmData[] = [];
  sensorTypeLst: MultiSensorType[] = [];
  multiSensorAlarmReasonLst: MultiSensorAlarmReason[] = []
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
    this.getSSTypes();
    this.getSSReasons();
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
  GetType(type: number) {
    return this.sensorTypeLst.filter(x => x.Sstype == type)[0].SensorDescription;
  }

  GetReason(type: number) {
    return this.multiSensorAlarmReasonLst.filter(x => x.Value == type)[0].Description;
  }
  clear(){
    this.getSSEvets();

  }
  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getSensorAlarmDataByDate(this.postEvents).subscribe(
        (response: MultiSensorAlarmData[]) => {
          $('#dt1').DataTable().destroy();
          this.sensorLst = response;
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
  getSSEvets() {
    this.valveservice.getSensorAlarmDataList().subscribe(
      (response: MultiSensorAlarmData[]) => {
        this.sensorLst = response;
        this.dtTrigger.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching sensor list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getSSReasons() {
    this.valveservice.getSensorAlarmReason().subscribe(
      (response: MultiSensorAlarmReason[]) => {
        this.multiSensorAlarmReasonLst = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching sensor list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getSSTypes() {
    this.valveservice.getSSTypes().subscribe(
      (response: MultiSensorType[]) => {
        this.sensorTypeLst = response;
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
