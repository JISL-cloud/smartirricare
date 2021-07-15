import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { NodesconfigurationComponent } from './nodesconfiguration/nodesconfiguration.component';
import { NonrechablenodeComponent } from './nodesconfiguration/nonrechablenode/nonrechablenode.component';
import { RechablenodeComponent } from './nodesconfiguration/rechablenode/rechablenode.component';
import { GatewaynodeComponent } from './nodesconfiguration/gatewaynode/gatewaynode.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'estimate/:id',
      //   component: EstimateComponent,
      //   data: {
      //     title: 'Estimate',
      //     urls: [
      //       { title: 'Estimate', url: '/estimate' },
      //       { title: 'ngComponent' },
      //       { title: 'Estimate' }
      //     ]
      //   },
      // },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: 'Project Configuration',
          urls: [
            { title: 'Project Configuration', url: '/project' },
            { title: 'ngComponent' },
            { title: 'Project Configuration' }
          ]
        },
      },
      {
        path: 'node',
        component: NodesconfigurationComponent,
        data: {
          title: 'Node Configuration',
          urls: [
            { title: 'Node Configuration', url: '/node' },
            { title: 'ngComponent' },
            { title: 'Node Configuration' }
          ]
        },
      },
    ]
  }
];

@NgModule({
  declarations: [
    ProjectComponent,
    NodesconfigurationComponent,
    NonrechablenodeComponent,
    RechablenodeComponent,
    GatewaynodeComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ConfigurationModule { }
