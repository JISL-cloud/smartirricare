import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NodeModel, ProductTypes } from '../project/project.model';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-nodesconfiguration',
  templateUrl: './nodesconfiguration.component.html',
  styleUrls: ['./nodesconfiguration.component.css']
})
export class NodesconfigurationComponent implements OnInit {
  nodeId: number = 0;
  nodeInfo: NodeModel = new NodeModel();
  nodeLst: NodeModel[] = [];
  producyTypeLst: ProductTypes[] = [];
  constructor(private projectService: ProjectService, public toastr: ToastrService, private modalService: NgbModal, public router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.nodeId = +this.route.snapshot.pathFromRoot[1].queryParams['nodeId'];
    console.log(this.nodeId);
    this.getProductTypes();
    this.getNodeById(this.nodeId);

  }
  public getProductTypes() {
    this.projectService.getProductTypes().subscribe(
      (response: ProductTypes[]) => {
        this.producyTypeLst = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Product list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  public getNodeById(nodeID: number) {
    this.projectService.getNodeById(nodeID).subscribe(
      (response: NodeModel) => {
        this.nodeInfo = response;
        this.nodeInfo.productName = this.producyTypeLst.filter(x => x.id == this.nodeInfo.productTypeId)[0].type;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Node Info. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
}
