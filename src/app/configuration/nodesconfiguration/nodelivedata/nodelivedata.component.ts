import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NodeModel } from '../../project/project.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';
import { NodeLiveData } from './nodelivedata.model';

@Component({
  selector: 'app-nodelivedata',
  templateUrl: './nodelivedata.component.html',
  styleUrls: ['./nodelivedata.component.css']
})
export class NodelivedataComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  modelInfo: NodeLiveData = new NodeLiveData();
  isEdit: boolean = false;
  constructor(private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.modelInfo.nodeId = this.nodeId;
    this.getData(this.nodeId)

  }
  getData(nodeId: number) {
    this.confService.getNodeLiveDataByNodeId(nodeId).subscribe(
      (response: NodeLiveData) => {
        console.log(response);
        if (response != null) {
          this.isEdit = true;
          this.modelInfo = response;
        }
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node Live Data details. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  add() {
    //Add
    this.confService.addNodeLiveData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Live Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Live Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  edit() {
    //Add
    this.confService.editNodeLiveData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Live Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Live Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

}
