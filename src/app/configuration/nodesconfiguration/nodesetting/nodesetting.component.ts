import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NodeModel } from '../../project/project.model';
import { NodeconfigurationService } from '../nodeconfiguration.service';
import { NodeLiveData } from '../nodelivedata/nodelivedata.model';
import { NodeSetting } from './nodesetting.model';

@Component({
  selector: 'app-nodesetting',
  templateUrl: './nodesetting.component.html',
  styleUrls: ['./nodesetting.component.css']
})
export class NodesettingComponent implements OnInit {
  @Input() nodeId: number = 0
  @Input() nodeInfo: NodeModel = new NodeModel();
  modelInfo: NodeSetting = new NodeSetting();
  isEdit: boolean = false;
  constructor(private confService: NodeconfigurationService, public toastr: ToastrService,) { }

  ngOnInit(): void {
    this.modelInfo.nodeId = this.nodeId;
    this.getData(this.nodeId)

  }
  getData(nodeId: number) {
    this.confService.getNodeSettingByNodeId(nodeId).subscribe(
      (response: NodeSetting) => {
        console.log(response);
        if (response != null) {
          this.isEdit = true;
          this.modelInfo = response;
        }
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node Setting Data details. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  add() {
    //Add
    this.confService.addNodeSettingData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Setting Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Setting Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  edit() {
    //Add
    this.confService.editNodeSettingData(this.modelInfo).subscribe(
      (response: any) => {
        this.toastr.success('Node Setting Data added successfully.');
        this.getData(this.nodeId);
        this.isEdit = false;
      },
      customError => {
        this.toastr.error(
          `Error happened while adding Node Setting Data. <br />
  ${customError.message}`,
          'Error'
        );
      }
    );
  }

}
