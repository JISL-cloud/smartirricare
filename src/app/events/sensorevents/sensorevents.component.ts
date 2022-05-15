import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiSensorAlarmReason, MultiSensorEvent, MultiSensorType, MultiValveEvent } from '../valveevents/valve.model';

@Component({
  selector: 'app-sensorevents',
  templateUrl: './sensorevents.component.html',
  styleUrls: ['./sensorevents.component.css']
})
export class SensoreventsComponent implements OnInit {
  sensorLst: MultiSensorEvent[] = [];
  sensorTypeLst: MultiSensorType[] = [];
  multiSensorAlarmReasonLst: MultiSensorAlarmReason[] = []

  dtOptions: any
  dtTrigger: Subject<any> = new Subject<any>();
  postEvents:PostEvents = new PostEvents()

  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      //serverSide: true,
      retrieve: true,
      processing: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      dom: 'Blfrtip',
      buttons: [
        'colvis',
        'excel',
      ],
      columnDefs: [
        { type: "date", targets: [16] }

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
      this.valveservice.getSSByDateList(this.postEvents).subscribe(
        (response: MultiSensorEvent[]) => {
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
    this.valveservice.getSSList().subscribe(
      (response: MultiSensorEvent[]) => {
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
}
