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
import { NodeupdatedataComponent } from './nodesconfiguration/nodeupdatedata/nodeupdatedata.component';
import { NodesettingComponent } from './nodesconfiguration/nodesetting/nodesetting.component';
import { NodelivedataComponent } from './nodesconfiguration/nodelivedata/nodelivedata.component';
import { UploadconfigurationComponent } from './uploadconfiguration/uploadconfiguration.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigurationlistComponent } from './configurationlist/configurationlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SensorsComponent } from './sensors/sensors.component';
import { UploadconfigurationsequencComponent } from './uploadconfigurationsequenc/uploadconfigurationsequenc.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


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
        path: 'productdetails',
        component: ProductdetailsComponent,
        data: {
          title: 'Product Configuration',
          urls: [
            { title: 'Project Configuration', url: '/productdetails' },
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
      {
        path: 'upload',
        component: UploadconfigurationComponent,
        data: {
          title: 'Upload Configuration',
          urls: [
            { title: 'Upload Configuration', url: '/upload' },
            { title: 'ngComponent' },
            { title: 'Upload Configuration' }
          ]
        },
      },
      {
        path: 'uploadseq',
        component: UploadconfigurationsequencComponent,
        data: {
          title: 'Upload Sequence',
          urls: [
            { title: 'Upload Sequence', url: '/uploadseq' },
            { title: 'ngComponent' },
            { title: 'Upload Sequence' }
          ]
        },
      },
      {
        path: 'configurationlist',
        component: ConfigurationlistComponent,
        data: {
          title: 'Configuration',
          urls: [
            { title: 'Configuration', url: '/configurationlist' },
            { title: 'ngComponent' },
            { title: 'Configuration' }
          ]
        },
      },
      {
        path: 'sensors',
        component: SensorsComponent,
        data: {
          title: 'Sensors',
          urls: [
            { title: 'Sensors', url: '/sensors' },
            { title: 'ngComponent' },
            { title: 'Sensors' }
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
    GatewaynodeComponent,
    NodeupdatedataComponent,
    NodesettingComponent,
    NodelivedataComponent,
    UploadconfigurationComponent,
    ConfigurationlistComponent,
    SensorsComponent,
    UploadconfigurationsequencComponent,
    ProductdetailsComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ConfigurationModule { }
