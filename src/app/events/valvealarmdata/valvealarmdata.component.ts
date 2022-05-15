import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents } from '../events.model';
import { EventsService } from '../events.service';
import { MultiValveAlarmData, MultiValveAlarmReason, MultiValveReason, MultiValveState, MultiValveType } from '../valveevents/valve.model';

@Component({
  selector: 'app-valvealarmdata',
  templateUrl: './valvealarmdata.component.html',
  styleUrls: ['./valvealarmdata.component.css']
})
export class ValvealarmdataComponent implements OnInit {

  valveLst: MultiValveAlarmData[] = [];
  multiValveStateLst: MultiValveState[] = []
  multiValveReasonLst: MultiValveReason[] = []
  multiValveTypeLst: MultiValveType[] = []
  dtOptions: any
  dtTrigger: Subject<any> = new Subject<any>();
  multiValveAlarmReasonLst: MultiValveAlarmReason[] = []
  postEvents:PostEvents = new PostEvents()

  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  async ngOnInit(): Promise<void> {
    this.dtOptions = {
      retrieve: true,
      //serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [0, 'desc'],
      columnDefs: [
        { type: "date", targets: [0] }

      ],
      //destroy: true
      stateSave: true,
      dom: 'Blfrtip',
      buttons: [
        'colvis',
        'excel',
      ]

    };
    await this.getValveEvets();
    await this.getValveState();
    await this.getValveReasons();
    await this.getValveTypes();
    this.getValveAlarmReasons();

  }
  async getValveEvets(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getValveAlarmDataList().subscribe(
        (response: MultiValveAlarmData[]) => {
          this.valveLst = response;
          this.dtTrigger.next();
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching valve list. <br />
                  ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }

  async getValveReasons(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getValveReason().subscribe(
        (response: MultiValveReason[]) => {
          this.multiValveReasonLst = response;
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching valve list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });


  }
  async SearchRec(): Promise<any> {
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getValveAlarmDataByDate(this.postEvents).subscribe(
        (response: MultiValveAlarmData[]) => {
          $('#dt1').DataTable().destroy();
          this.valveLst = response;
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

  async clear(){
    await this.getValveEvets();
  }

  async getValveTypes(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getValveType().subscribe(
        (response: MultiValveType[]) => {
          this.multiValveTypeLst = response;
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching valve list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }

  async getValveState(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getMultiValveState().subscribe(
        (response: MultiValveState[]) => {
          this.multiValveStateLst = response;
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
  getValveAlarmReasons() {
    this.valveservice.getValveAlarmReason().subscribe(
      (response: MultiValveAlarmReason[]) => {
        this.multiValveAlarmReasonLst = response;
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

  GetState(CurrentState: number) {
    return this.multiValveStateLst.filter(x => x.Value == CurrentState)[0].State;
  }
  GetReason(CurrentReason: number) {
    return this.multiValveReasonLst.filter(x => x.Value == CurrentReason)[0].Reason;
  }

  GetAlarmReason(CurrentReason: number) {
    return this.multiValveAlarmReasonLst.filter(x => x.AlarmId == CurrentReason)[0].Reason;
  }

  GetType(CurrentType: number) {
    if (CurrentType == 1 || CurrentType == 2) {
      return this.multiValveTypeLst.filter(x => x.Id == CurrentType)[0].ValveType;

    }
    else {
      return 'Valve Type not Found-' + CurrentType
    }
  }
  getEpocTime(epochTime: any) {

    //     const valueConvert = 60000 // Base convert to Minutes to milliseconds
    // const milliseconds = 1000 
    // const zone = (new Date().getTimezoneOffset() * -1 ) * valueConvert  //  Return subtract time zone 
    // const newEpoch = epochTime * milliseconds  // Convert new value in milliseconds

    // const dateConvert = new Date(newEpoch + zone) // New Date + Zone 
    // return dateConvert


    const unixEpochTimeMS = epochTime * 1000;
    const d = new Date(unixEpochTimeMS);
    return d.toLocaleString();


  }
  getRtuIdFronNode(nodeid: number) {
    return (nodeid & 1023).toString();
  }

  getNetworkFronNode(nodeid: number) {
    return (nodeid >> 10).toString();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
