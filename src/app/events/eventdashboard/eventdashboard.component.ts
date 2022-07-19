import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Gateway } from 'src/app/configuration/nodesconfiguration/nodeconfiguration.model';
import { ProjectService } from 'src/app/configuration/project/project.service';
import { MultiRtuAnalysis } from './model';

@Component({
  selector: 'app-eventdashboard',
  templateUrl: './eventdashboard.component.html',
  styleUrls: ['./eventdashboard.component.css']
})
export class EventdashboardComponent implements OnInit {
  rtuanalysisLst:MultiRtuAnalysis[]=[]
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public toastr: ToastrService, private projectService: ProjectService,) { }

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      stateSave: true,
      dom: 'Blfrtip',
      buttons: [
        'excel',
      ]

    };
    this.getRtuAnalysis()
  }
  getRtuAnalysis() {
    this.projectService.getRtuAnalysis().subscribe(
      (response: MultiRtuAnalysis[]) => {
        this.rtuanalysisLst = response;
        this.dtTrigger.next()
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Rtu Analysis list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
}
// https://codepen.io/TommyCreenan/pen/naxVYV