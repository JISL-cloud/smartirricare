import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValveeventsComponent } from './valveevents/valveevents.component';
import { SensoreventsComponent } from './sensorevents/sensorevents.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsComponent } from './events.component';
import { DataTablesModule } from 'angular-datatables';
import { NodejoindataframeComponent } from './nodejoindataframe/nodejoindataframe.component';
import { NodenetworkdataframeComponent } from './nodenetworkdataframe/nodenetworkdataframe.component';
import { GwsttusdataComponent } from './gwsttusdata/gwsttusdata.component';
import { OperationaleventsComponent } from './operationalevents/operationalevents.component';
import { NetworkdataanalysisComponent } from './networkdataanalysis/networkdataanalysis.component';
import { ValvealarmdataComponent } from './valvealarmdata/valvealarmdata.component';
import { SensoralarmdataComponent } from './sensoralarmdata/sensoralarmdata.component';
import { NodealarmdataComponent } from './nodealarmdata/nodealarmdata.component';
const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    data: {
      title: 'Events',
      urls: [
        { title: 'Events', url: '/events' },
        { title: 'ngComponent' },
        { title: 'Events' }
      ]
    },
  },
  {
    path: 'operationalanalysis',
    component: OperationaleventsComponent,
    data: {
      title: 'Valve',
      urls: [
        { title: 'Valve', url: '/valvelist' },
        { title: 'ngComponent' },
        { title: 'Valve' }
      ]
    },
  },
  {
    path: 'networkanalysis',
    component: NetworkdataanalysisComponent,
    data: {
      title: 'Valve',
      urls: [
        { title: 'Valve', url: '/valvelist' },
        { title: 'ngComponent' },
        { title: 'Valve' }
      ]
    },
  },
  {
    path: 'valvelist',
    component: ValveeventsComponent,
    data: {
      title: 'Valve',
      urls: [
        { title: 'Valve', url: '/valvelist' },
        { title: 'ngComponent' },
        { title: 'Valve' }
      ]
    },
  },
  {
    path: 'sensorlist',
    component: SensoreventsComponent,
    data: {
      title: 'Sensor',
      urls: [
        { title: 'Sensor', url: '/sensorlist' },
        { title: 'ngComponent' },
        { title: 'Sensor' }
      ]
    },
  },
  {
    path: 'nwnodeupdate',
    component: NodenetworkdataframeComponent,
    data: {
      title: 'Node network data frame',
      urls: [
        { title: 'Node network data frame', url: '/nwnodeupdate' },
        { title: 'ngComponent' },
        { title: 'Node network data frame' }
      ]
    },
  },
  {
    path: 'nwnodejoinupdate',
    component: NodejoindataframeComponent,
    data: {
      title: 'Node network join frame',
      urls: [
        { title: 'Node network join frame', url: '/nwnodeupdate' },
        { title: 'ngComponent' },
        { title: 'Node network join frame' }
      ]
    },
  },
  {
    path: 'gwupate',
    component: GwsttusdataComponent,
    data: {
      title: 'Gateway Update',
      urls: [
        { title: 'Gateway Update', url: '/nwnodeupdate' },
        { title: 'ngComponent' },
        { title: 'Gateway Update' }
      ]
    },
  },
  {
    path: 'valvealarmdata',
    component: ValvealarmdataComponent,
    data: {
      title: 'Valve Alarm',
      urls: [
        { title: 'Valve Alarm', url: '/valvealarmdata' },
        { title: 'ngComponent' },
        { title: 'Valve Alarm' }
      ]
    },
  },
  {
    path: 'sensoralarmdata',
    component: SensoralarmdataComponent,
    data: {
      title: 'Sensor Alarm data',
      urls: [
        { title: 'Sensor Alarm data', url: '/sensoralarmdata' },
        { title: 'ngComponent' },
        { title: 'Sensor Alarm data' }
      ]
    },
  },
  {
    path: 'nodealarmdata',
    component: NodealarmdataComponent,
    data: {
      title: 'Node Alarm data',
      urls: [
        { title: 'Node Alarm data', url: '/nodealarmdata' },
        { title: 'ngComponent' },
        { title: 'Node Alarm data' }
      ]
    },
  },
  // {
  //   path: 'addedit',
  //   component: AddeditsequenceComponent,
  //   data: {
  //     title: 'Sequence Edit',
  //     urls: [
  //       { title: 'Sequence Edit', url: '/addedit' },
  //       { title: 'ngComponent' },
  //       { title: 'Sequence Edit' }
  //     ]
  //   },
  // },     


];



@NgModule({
  declarations: [
    ValveeventsComponent,
    SensoreventsComponent,
    NodejoindataframeComponent,
    NodenetworkdataframeComponent,
    GwsttusdataComponent,
    OperationaleventsComponent,
    NetworkdataanalysisComponent,
    ValvealarmdataComponent,
    SensoralarmdataComponent,
    NodealarmdataComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventsModule { }
