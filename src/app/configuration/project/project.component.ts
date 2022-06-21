import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from 'src/app/component/toast/toast.service';
import { EventsService } from 'src/app/events/events.service';
import { Gateway, GatewayNode, NonRechableNode, RechableNode } from '../nodesconfiguration/nodeconfiguration.model';
import { NodeconfigurationService } from '../nodesconfiguration/nodeconfiguration.service';
import { MultiNetworkRtu, NetwokNodeConf, Network, NetworkDDL, NodeModel, ProductTypes, Project, ProjectConfiguration, UpdateIdsRequired } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectInfo: ProjectConfiguration = new ProjectConfiguration();
  multiNetworkRtuLst: UpdateIdsRequired[] = []

  nonRechargableList: NonRechableNode[] = []
  rechargableList: RechableNode[] = []
  gatewayNodeList: GatewayNode[] = []
  gatewayList: GatewayNode[] = []
  mainGatewaysList: Gateway[] = []
  projectLst: ProjectConfiguration[] = [];
  closeResult: string = "";
  networkInfo: Network = new Network();
  networkLst: Network[] = [];
  availableNetworks: NetworkDDL[] = [];
  nodeInfo: NodeModel = new NodeModel();
  nodeLst: NodeModel[] = [];
  gatewayNodeLst: NodeModel[] = [];
  producyTypeLstMain: ProductTypes[] = [];
  producyTypeLst: ProductTypes[] = [];
  selectedNetwork: string = "0";
  selectedFilter: string = "";
  nwLst: any;
  nwnodeLst: NetwokNodeConf[] = []
  mainMultiNetworkRtuLst: NetwokNodeConf[] = []
  isEditNode: boolean = false;
  nodeId: number = 0;
  constructor(private valveservice:EventsService, private router: Router, private nodeService: NodeconfigurationService, private projectService: ProjectService, public toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProject();

    this.getNonRechableNode();
    this.getRechableNode();
    this.getGatewayNode();
    this.getMainGateways()
    //this.getMultiNetworkRTU()
  }
  getMainGateways() {
    this.projectService.getMainGatewayList().subscribe(
      (response: Gateway[]) => {
        this.mainGatewaysList = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Gateway list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  editGateway(pos: Gateway) {
    pos.isEdit = true
  }

  updateGateway(pos: Gateway) {
    this.valveservice.updateGatewaySerialNo(pos.Id, pos).subscribe(
      (response:any) => {
        this.getMainGateways()
        pos.isEdit = !pos.isEdit;
      },
      customError => {
        pos.isEdit = !pos.isEdit;
        this.getMainGateways()
        this.toastr.error(
          `Error happened while fetching Gateway serial no. Check if Gateway serail no already assigned <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
    pos.isEdit = false
  }
  getNonRechableNode() {
    this.nodeService.getNonRechableNodeList().subscribe(
      (response: NonRechableNode[]) => {
        this.nonRechargableList = response;

        response.forEach(element => {
          let conf = new NetwokNodeConf();
          conf.networkId = element.GwSrn;
          conf.networkTagName = element.NetworkTagName;
          conf.nodeTagName = element.NodeTagName
          conf.nodeId = element.NodeId;

          this.nwnodeLst.push(conf);
          this.mainMultiNetworkRtuLst.push(conf)
          let nwl = response.map(x => x.GwSrn);
          this.nwLst = [...new Set(nwl)];
        });
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
        response.forEach(element => {
          let conf = new NetwokNodeConf();
          conf.networkId = element.GwSrn;
          conf.networkTagName = element.NetworkTagName;
          conf.nodeId = element.NodeId;

          conf.nodeTagName = element.NodeTagName
          this.nwnodeLst.push(conf);
          this.mainMultiNetworkRtuLst.push(conf)

          let nwl = response.map(x => x.GwSrn);
          this.nwLst = [...new Set(nwl)];
        });
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

  getGatewayNode() {
    this.nodeService.getGatewayNodeList().subscribe(
      (response: GatewayNode[]) => {
        this.gatewayNodeList = response.filter(x => x.ProductId == 3);
        this.gatewayList = response.filter(x => x.ProductId == 4);

        response.forEach(element => {
          let conf = new NetwokNodeConf();
          conf.networkId = element.GwSrn;
          conf.networkTagName = element.NetworkTagName;
          conf.nodeId = element.NodeId;
          conf.nodeTagName = element.NodeTagName
          this.nwnodeLst.push(conf);
          this.mainMultiNetworkRtuLst.push(conf)

          let nwl = response.map(x => x.GwSrn);
          this.nwLst = [...new Set(nwl)];
        });
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
  getNetworks() {
    this.projectService.getNetworkList().subscribe(
      (response: Network[]) => {
        this.networkLst = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Project list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  GetNodeNo(networkId: number, nodeId: number) {
    return (networkId << 10) + nodeId;
  }
  GetList(selectedNetwork: string) {
    this.selectedNetwork = selectedNetwork;
    if (selectedNetwork === null)
      this.selectedNetwork = "0";
    this.nwnodeLst = this.mainMultiNetworkRtuLst.filter(x => x.networkId == +this.selectedNetwork);
  }

  getAvailableNetworks() {
    this.projectService.getAvailableNetworkList().subscribe(
      (response: NetworkDDL[]) => {
        this.availableNetworks = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Project list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  getProject() {
    this.projectService.getProjectList().subscribe(
      (response: ProjectConfiguration[]) => {
        this.projectInfo = response[0];
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Project list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  // getMultiNetworkRTU() {
  //   this.projectService.GetMultiNetworkRtu().subscribe(
  //     (response: UpdateIdsRequired[]) => {
  //       this.mainMultiNetworkRtuLst = response;


  //     },
  //     customError => {
  //       this.toastr.error(
  //         `Error happened while fetching Network Rtu list. <br />
  //                 ${customError.message}`,
  //         'Error'
  //       );
  //     }
  //   );
  // }

  public getProductTypes() {
    this.projectService.getProductTypes().subscribe(
      (response: ProductTypes[]) => {
        this.producyTypeLst = response;
        this.producyTypeLstMain = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  public getNodeLst(networkId: number) {
    this.projectService.getNodeList(networkId).subscribe(
      (response: NodeModel[]) => {
        this.nodeLst = response.filter(x => x.networkNo != 0);
        this.nodeLst.forEach(element => {
          element.productName = this.producyTypeLst.filter(x => x.id == element.productTypeId)[0].type;
        });

        this.gatewayNodeLst = response.filter(x => x.networkNo == 0);
        this.gatewayNodeLst.forEach(element => {
          element.productName = this.producyTypeLst.filter(x => x.id == element.productTypeId)[0].type;
        });
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  AddProject(content: any, id: number) {

  }

  calculateRtuId() {
    let shift = this.nodeInfo.networkNo << 10
    let rtuid = +this.nodeInfo.nodeNo + shift;
    this.nodeInfo.rtuId = rtuid;
  }

  AddNetwork(content: any, id: number) {
    //Open modal and ask to create new revision
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  AddNode(content: any, id: number, type: string) {
    if (type === "Node") {
      if (this.selectedNetwork == null || this.selectedNetwork == "0") {
        this.toastr.error("Select Netwrok");
        return;
      }
      this.producyTypeLst = this.producyTypeLstMain.filter(x => x.productNo == 1 || x.productNo == 2);
    }
    else {
      this.producyTypeLst = this.producyTypeLstMain.filter(x => x.productNo == 4 || x.productNo == 3);
    }
    if (id == 0) {
      this.isEditNode = false;
      this.nodeInfo = new NodeModel();
      if (type === "Node") {
        this.nodeInfo.networkId = +this.selectedNetwork;
        this.nodeInfo.networkNo = this.networkLst.filter(x => x.networkId == +this.selectedNetwork)[0].networkNo;
      }
      else {
        this.nodeInfo.networkId = 0;
        this.nodeInfo.networkNo = 0;
      }
    }
    else {
      this.isEditNode = true;
      this.nodeInfo = this.nodeLst.filter(x => x.id === id)[0]

    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  SaveNode(content: any) {
    //Add
    this.projectService.addNode(this.nodeInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node added successfully.');
        this.getNodeLst(+this.selectedNetwork);
        this.nodeInfo = new NodeModel();
        this.isEditNode = false;
        this.modalService.dismissAll("Closed");
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node. <br />
      ${customError.message}`,
          'Error'
        );
      }
    );
  }

  UpdateNode(content: any) {
    //Update
    this.projectService.editNode(this.nodeInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Updated successfully.');
        this.getNodeLst(+this.selectedNetwork);
        this.nodeInfo = new NodeModel();
        this.isEditNode = false;
        this.modalService.dismissAll("Closed");
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node. <br />
      ${customError.message}`,
          'Error'
        );
      }
    );

  }

  setAddon() {
    if (this.nodeInfo.productTypeId === 1 || this.nodeInfo.productTypeId === 2) {
      this.nodeInfo.isAddonCard = false;
    }

  }
  openDeleteModalps(template: TemplateRef<any>, id: number) {
    this.nodeId = id;
    this.modalService.open(template, { size: 'lg' });
  }

  confirmps(): void {
    this.projectService.deleteNode(this.nodeId).subscribe(
      (response: any) => {
        this.getNodeLst(+this.selectedNetwork);
        this.toastr.success(
          "Node Deleted successfully!"
        );
        this.modalService.dismissAll();
      },
      customError => {
        this.toastr.error(
          `Error happened while deleting Node . <br />
              ${customError.message}`,
          'Error'
        );
      }
    );
  }

  declineps(): void {
    this.nodeId = 0;
    this.modalService.dismissAll();
  }

  openProduct(nodeId: number, networkId: string) {
    this.router.navigate(['/configuration/productdetails'], { queryParams: { nodeId: nodeId, networkId: networkId } });
  }


  deleteConf() {

    if (confirm("Do you want to confrim deleting Project configurtion") == true) {
      this.nodeService.deleteAllConf().subscribe(
        (response: any) => {
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
}
