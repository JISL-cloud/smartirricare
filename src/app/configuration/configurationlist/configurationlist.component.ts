import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { GatewayNode, MultiAddonCardTypes, NonRechableNode, RechableNode } from '../nodesconfiguration/nodeconfiguration.model';
import { NodeconfigurationService } from '../nodesconfiguration/nodeconfiguration.service';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-configurationlist',
  templateUrl: './configurationlist.component.html',
  styleUrls: ['./configurationlist.component.css']
})
export class ConfigurationlistComponent implements OnInit {
  nonRechargableList: NonRechableNode[] = []
  rechargableList: RechableNode[] = []
  gatewayNodeList: GatewayNode[] = []
  gatewayList: GatewayNode[] = []
  dtOptions: any = {};
  multiAddonCardTypes: MultiAddonCardTypes[] = []

  dtTrigger1: Subject<any> = new Subject<any>();
  dtOptions1: any = {};

  dtTrigger2: Subject<any> = new Subject<any>();
  dtOptions2: any = {};

  dtTrigger3: Subject<any> = new Subject<any>();
  dtOptions3: any = {};

  dtTrigger4: Subject<any> = new Subject<any>();
  dtOptions4: any = {};

  constructor(private nodeService: NodeconfigurationService, public toastr: ToastrService) { }


  ngOnInit(): void {
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
      ]
    };

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
      ]
    };

    this.dtOptions3 = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      // Declare the use of the extension in the dom parameter
     // dom: 'Blfrtip',
      dom: 'Blfrtip',
      // Configure the buttons
      buttons: [
        'excel',
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
      ]
    };
    this.getNonRechableNode();
    this.getRechableNode();
    this.getGatewayNode();
    this.getAddonCardType();
  }
  getNonRechableNode() {
    this.nodeService.getNonRechableNodeList().subscribe(
      (response: NonRechableNode[]) => {
        this.nonRechargableList = response;
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

  getRechableNode() {
    this.nodeService.getRechableNodeList().subscribe(
      (response: RechableNode[]) => {
        this.rechargableList = response;
        this.dtTrigger1.next();
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
        this.dtTrigger1.next();
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

  getGatewayNode() {
    this.nodeService.getGatewayNodeList().subscribe(
      (response: GatewayNode[]) => {
        this.gatewayNodeList = response.filter(x => x.ProductId == 3);
        this.dtTrigger3.next();
        this.gatewayList = response.filter(x => x.ProductId == 4);
        this.dtTrigger4.next();

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
  getSettings(setting: string) {
    var array = setting.split(',');
    return array

  }

  deleteConf(){

    if (confirm("Do you want to confrim deleting Project configurtion") == true) {
      this.nodeService.deleteAllConf().subscribe(
      (response:any) => {
       this.toastr.success("Confiuration Deleted successfully")
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching deleteAllConf list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
    } else {
      //text = "You canceled!";
    }

   
  }

  getCardType(type: any) {
    return this.multiAddonCardTypes.filter(x => x.CardType == type)[0].CardName
  }

}
