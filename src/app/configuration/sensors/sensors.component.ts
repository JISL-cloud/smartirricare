import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { EventsService } from 'src/app/events/events.service';
import { MultiValveType } from 'src/app/events/valveevents/valve.model';
import { NodeconfigurationService } from '../nodesconfiguration/nodeconfiguration.service';
import { Analog05vsensor, Analog420mAsensor, DigitalCounterTypeSensor, DigitalNoNctypeSensor, Vrtsetting, WaterMeterSensorSetting } from './sensors.model';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  lstVrt: Vrtsetting[] = [];
  lstAnalog05v: Analog05vsensor[] = [];
  lstAnalog420mA: Analog420mAsensor[] = [];
  lstDigitalNoNc: DigitalNoNctypeSensor[] = [];
  lstDigitalCounter: DigitalCounterTypeSensor[] = [];
  lstWaterMeter: WaterMeterSensorSetting[] = [];
  multiValveTypeLst: MultiValveType[] = []
  dtTrigger1: Subject<any> = new Subject<any>();
  dtOptions1: any = {};

  dtTrigger2: Subject<any> = new Subject<any>();
  dtOptions2: any = {};

  dtTrigger3: Subject<any> = new Subject<any>();
  dtOptions3: any = {};

  dtTrigger4: Subject<any> = new Subject<any>();
  dtOptions4: any = {};

  dtTrigger5: Subject<any> = new Subject<any>();
  dtOptions5: any = {};

  dtTrigger6: Subject<any> = new Subject<any>();
  dtOptions6: any = {};

  constructor(private valveservice:EventsService, private nodeService: NodeconfigurationService, public toastr: ToastrService) { }

  ngOnInit(): void {

    this.dtOptions1 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'colvis'
      ]
    };

    this.dtOptions2 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'colvis'
      ]
    };

    this.dtOptions3 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'colvis'
      ]
    };

    this.dtOptions4 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'colvis'
      ]
    };

    this.dtOptions5 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
      ]
    };

    this.dtOptions6 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
        'colvis'
      ]
    };
    this.getLstVrt();
    this.getLstAnalog05v();
    this.getLstAnalog420mA();
    this.getLstDigitalNoNc();
    this.getLstDigitalCounter();
    this.getLstWaterMeter();
    this.getValveTypes()
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
  getLstVrt() {
    this.nodeService.getLstVrt().subscribe(
      (response: Vrtsetting[]) => {
        this.lstVrt = response;
        this.dtTrigger1.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching getLstVrt list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );

  }
  getLstAnalog05v() {
    this.nodeService.getLstAnalog05v().subscribe(
      (response: Analog05vsensor[]) => {
        this.lstAnalog05v = response;
        this.dtTrigger2.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching nonRechargableList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );

  }
  getLstAnalog420mA() {
    this.nodeService.getLstAnalog420mA().subscribe(
      (response: Analog420mAsensor[]) => {
        this.lstAnalog420mA = response;
        this.dtTrigger3.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching getLstAnalog420mA list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );

  }
  getLstDigitalNoNc() {
    this.nodeService.getLstDigitalNoNc().subscribe(
      (response: DigitalNoNctypeSensor[]) => {
        this.lstDigitalNoNc = response;
        this.dtTrigger4.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching nonRechargableList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );

  }
  getLstDigitalCounter() {

    this.nodeService.getLstDigitalCounter().subscribe(
      (response: DigitalCounterTypeSensor[]) => {
        this.lstDigitalCounter = response;
        this.dtTrigger5.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching getNonRechableNodeList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  getLstWaterMeter() {
    this.nodeService.getLstWaterMeter().subscribe(
      (response: WaterMeterSensorSetting[]) => {
        this.lstWaterMeter = response;
        this.dtTrigger6.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching getLstWaterMeter list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );

  }
  GetType(CurrentType: number) {
    if(CurrentType ==1 || CurrentType == 2){
      return this.multiValveTypeLst.filter(x => x.Id == CurrentType)[0].ValveType;

    }
    else{
      return 'Valve Type not Found-'+ CurrentType
    }
  }
}
