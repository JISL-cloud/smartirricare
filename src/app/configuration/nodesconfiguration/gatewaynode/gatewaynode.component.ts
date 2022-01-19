import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NodeModel } from '../../project/project.model';
import { CardSetting, CardType, GatewayNode } from '../nodeconfiguration.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';

@Component({
  selector: 'app-gatewaynode',
  templateUrl: './gatewaynode.component.html',
  styleUrls: ['./gatewaynode.component.css']
})
export class GatewaynodeComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  gatewayNodeInfo: GatewayNode = new GatewayNode();
  isEdit: boolean = false;
  cardSettingInfo: CardSetting = new CardSetting();
  cardSettingLst: CardSetting[] = [];
  cardTypeLst: CardType[] = [];
  closeResult: string = "";

  constructor(private modalService: NgbModal, private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.gatewayNodeInfo.nodeId = this.nodeId;
    this.getProduct(this.nodeId);
    this.getCardType();
    console.log(this.nodeInfo);
  }

  getCardType() {
    this.confService.getCardType().subscribe(
      (response: CardType[]) => {
        console.log(response);
        if (response != null) {
          this.isEdit = true;
          this.cardTypeLst = response;
        }
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Card Type details. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  addonCard(content: any) {
    if (this.cardSettingLst.length > 2) {
      this.toastr.warning("Cannot Add more than 3 cards");
      return;
    }
    this.cardSettingInfo.cardNo = this.cardSettingLst.length + 1;
    this.cardSettingInfo.nodeId = this.nodeId;
    this.cardSettingInfo.productId = this.nodeInfo.productTypeId;
    //Open modal and ask to create new revision
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  addCardToList() {
    this.cardSettingLst.push(this.cardSettingInfo);
    this.cardSettingInfo = new CardSetting();
    this.modalService.dismissAll();
  }
  getProduct(nodeId: number) {
    this.confService.getGatewayNodeByNodeId(nodeId).subscribe(
      (response: GatewayNode) => {
        console.log(response);
        if (response != null) {
          this.isEdit = true;
          this.gatewayNodeInfo = response;
        }


      },
      customError => {
        this.toastr.error(
          `Error happened while fetching product details. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  setCardName(){
      this.cardSettingInfo.cardTypeName = this.cardTypeLst.filter(c=>c.cardNo == +this.cardSettingInfo.cardType)[0].cardType1;
  }
  add() {
    //Add
    if(this.cardSettingLst.length ==0)
    {
      this.toastr.warning("User has opted for Addon card, but no addon card is added");
      return;
    }

    this.confService.addGatewayNode(this.gatewayNodeInfo).subscribe(
      (response: any) => {
        this.toastr.success('Product added successfully.');
        this.getProduct(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Product. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  edit() {
    //Add
    this.confService.editGatewayNode(this.gatewayNodeInfo).subscribe(
      (response: any) => {
        this.toastr.success('Product added successfully.');
        this.getProduct(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Product. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
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
}






        