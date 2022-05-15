import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from 'src/app/events/events.service';
import { MultiValveType } from 'src/app/events/valveevents/valve.model';
import { NonRechableNode, RechableNode, MultiAddonCardTypes, GatewayNode } from '../nodesconfiguration/nodeconfiguration.model';
import { NodeconfigurationService } from '../nodesconfiguration/nodeconfiguration.service';
import { Vrtsetting, Analog05vsensor, Analog420mAsensor, DigitalNoNctypeSensor, DigitalCounterTypeSensor, WaterMeterSensorSetting } from '../sensors/sensors.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  nonRechargableList: NonRechableNode[] = []
  rechargableList: RechableNode[] = []
  gatewayNodeList: GatewayNode[] = []
  gatewayList: GatewayNode[] = []
  multiAddonCardTypes: MultiAddonCardTypes[] = []

  lstVrt: Vrtsetting[] = [];
  lstAnalog05v: Analog05vsensor[] = [];
  lstAnalog420mA: Analog420mAsensor[] = [];
  lstDigitalNoNc: DigitalNoNctypeSensor[] = [];
  lstDigitalCounter: DigitalCounterTypeSensor[] = [];
  lstWaterMeter: WaterMeterSensorSetting[] = [];
  multiValveTypeLst: MultiValveType[] = []

  nodeId:number=0
  networkId:number=0
  constructor(private valveservice:EventsService,private nodeService: NodeconfigurationService, public toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.nodeId = +this.activatedRoute.snapshot.pathFromRoot[0].queryParams["nodeId"];
    this.networkId= +this.activatedRoute.snapshot.pathFromRoot[0].queryParams["networkId"];
    await this.getValveTypes()
    await this.getAddonCardType();
    this.getNonRechableNode(this.nodeId, this.networkId);
    this.getRechableNode(this.nodeId, this.networkId);
    this.getGatewayNode(this.nodeId, this.networkId);
  

    this.getLstVrt();
    this.getLstAnalog05v();
    this.getLstAnalog420mA();
    this.getLstDigitalNoNc();
    this.getLstDigitalCounter();
    this.getLstWaterMeter();
  

  }
  getNonRechableNode(nodeId:number, networkId:number) {
    this.nodeService.getNonRechableNodeListByNodeNw(nodeId,networkId).subscribe(
      (response: NonRechableNode[]) => {
        this.nonRechargableList = response;
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

  getRechableNode(nodeId:number, networkId:number) {
    this.nodeService.getRechableNodeListByNodeNw(nodeId,networkId).subscribe(
      (response: RechableNode[]) => {
        this.rechargableList = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching rechargableList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getAddonCardType() {
    this.nodeService.getAddonsCardTypeList().subscribe(
      (response: MultiAddonCardTypes[]) => {
        this.multiAddonCardTypes = response;

      },
      customError => {
        this.toastr.error(
          `Error happened while fetching getAddonsCardTypeList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getGatewayNode(nodeId:number, networkId:number) {
    this.nodeService.getGatewayNodeListByNodeNw(nodeId,networkId).subscribe(
      (response: GatewayNode[]) => {
        this.gatewayNodeList = response.filter(x => x.ProductId == 3);
        this.gatewayList = response.filter(x => x.ProductId == 4);
        

      },
      customError => {
        this.toastr.error(
          `Error happened while fetching rechargableList list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
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
    this.nodeService.getLstVrtByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: Vrtsetting[]) => {
        this.lstVrt = response;
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
    this.nodeService.getLstAnalog05vByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: Analog05vsensor[]) => {
        this.lstAnalog05v = response;
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
    this.nodeService.getLstAnalog420mAByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: Analog420mAsensor[]) => {
        this.lstAnalog420mA = response;
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
    this.nodeService.getLstDigitalNoNcByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: DigitalNoNctypeSensor[]) => {
        this.lstDigitalNoNc = response;
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

    this.nodeService.getLstDigitalCounterByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: DigitalCounterTypeSensor[]) => {
        this.lstDigitalCounter = response;
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
    this.nodeService.getLstWaterMeterByNodeNw(this.nodeId,this.networkId).subscribe(
      (response: WaterMeterSensorSetting[]) => {
        this.lstWaterMeter = response;
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
  getSettings(setting: string) {
    var array = setting.split(',');
    return array

  }
  getCardType(type: any) {
    return this.multiAddonCardTypes.filter(x => x.CardType == type)[0].CardName
  }
}
