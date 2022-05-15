import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NodeModel } from '../../project/project.model';
import { RechableNode } from '../nodeconfiguration.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';

@Component({
  selector: 'app-rechablenode',
  templateUrl: './rechablenode.component.html',
  styleUrls: ['./rechablenode.component.css']
})
export class RechablenodeComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  rechableNodeInfo: RechableNode = new RechableNode();
  isEdit: boolean = false;
  constructor(private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.rechableNodeInfo.NodeId = this.nodeId;
    this.getProduct(this.nodeId)

  }
  getProduct(nodeId: number) {
    this.confService.getRechableNodeByNodeId(nodeId).subscribe(
      (response: RechableNode) => {
        console.log(response);
        if(response!=null)
        { this.isEdit = true;
          this.rechableNodeInfo = response;
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

  add() {
    //Add
    this.confService.addRechargableNode(this.rechableNodeInfo).subscribe(
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
    this.confService.editRechargableNode(this.rechableNodeInfo).subscribe(
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

}
