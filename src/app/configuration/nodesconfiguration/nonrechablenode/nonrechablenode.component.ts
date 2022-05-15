import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfigurationService } from '../../configuration.service';
import { NodeModel } from '../../project/project.model';
import { NonRechableNode } from '../nodeconfiguration.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';

@Component({
  selector: 'app-nonrechablenode',
  templateUrl: './nonrechablenode.component.html',
  styleUrls: ['./nonrechablenode.component.css']
})
export class NonrechablenodeComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  nonRechableNodeInfo: NonRechableNode = new NonRechableNode();
  isEdit: boolean = false;
  constructor(private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.nonRechableNodeInfo.NodeId = this.nodeId;
    this.getProduct(this.nodeId)

  }
  getProduct(nodeId: number) {
    this.confService.getNonRechableNodeByNodeId(nodeId).subscribe(
      (response: NonRechableNode) => {
        console.log(response);
        if(response!=null)
        { this.isEdit = true;
          this.nonRechableNodeInfo = response;
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
    this.confService.addNonRechargableNode(this.nonRechableNodeInfo).subscribe(
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
    this.confService.editNonRechargableNode(this.nonRechableNodeInfo).subscribe(
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
