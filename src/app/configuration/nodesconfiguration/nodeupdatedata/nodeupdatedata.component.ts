import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NodeModel } from '../../project/project.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';
import { NodeUpdateData } from './nodeupdatedata.model';

@Component({
  selector: 'app-nodeupdatedata',
  templateUrl: './nodeupdatedata.component.html',
  styleUrls: ['./nodeupdatedata.component.css']
})
export class NodeupdatedataComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  modelInfo: NodeUpdateData = new NodeUpdateData();
  isEdit: boolean = false;
  constructor(private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.modelInfo.nodeId = this.nodeId;
    this.getData(this.nodeId)

  }
  getData(nodeId: number) {
    this.confService.getNodeUpdateByNodeId(nodeId).subscribe(
      (response: NodeUpdateData) => {
        console.log(response);
        if (response != null) {
          this.isEdit = true;
          this.modelInfo = response;
        }
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node Update Data details. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  add() {
    //Add
    this.confService.addNodeUpdateData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Update Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Update Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  edit() {
    //Add
    this.confService.editNodeUpdateData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Update Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Update Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

}
