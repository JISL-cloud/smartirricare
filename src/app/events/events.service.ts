import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AddEditUserViewModel } from '../authentication/auth.model';
import { BaseService } from '../authentication/base.service';
import { Gateway } from '../configuration/nodesconfiguration/nodeconfiguration.model';
import { MultiDataLogger } from '../datalogger/datalogger.model';
import { AppConfigService } from '../_services/appconfigservice ';
import { MultiNodeAlarm, PostEvents, PostEventsDatalogger } from './events.model';
import { GwstatusData } from './gwsttusdata/gwstatusdata.model';
import { MultiNodeJoinDataFrame } from './nodejoindataframe/nodejoindataframe.model';
import { MultiNodeNwDataFrame } from './nodenetworkdataframe/nodenetworkdataframe.model';
import { MultiFrameTypes, MultiSensorAlarmData, MultiSensorAlarmReason, MultiSensorEvent, MultiSensorType, MultiValveAlarmData, MultiValveAlarmReason, MultiValveEvent, MultiValveReason, MultiValveState, MultiValveType } from './valveevents/valve.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService {

  jApi: any;
  constructor(private http: HttpClient, private appURL: AppConfigService) {
    super();
    this.jApi = this.appURL.getServerUrl();
  }

  getValveList() {
    return this.http.get<MultiValveEvent[]>(this.jApi + 'Valve/getValveEvents').pipe(catchError(this.handleError));
  }
  getVaveEventsByDate(model: PostEvents) {
    return this.http
      .post<MultiValveEvent[]>(this.jApi + "Valve/getValveEventsByDate", model)
      .pipe(catchError(this.handleError));
  }
  getValveType() {
    return this.http.get<MultiValveType[]>(this.jApi + 'Valve/GetMultiValveTypes').pipe(catchError(this.handleError));
  }
  getSensorAlarmReason() {
    return this.http.get<MultiSensorAlarmReason[]>(this.jApi + 'Valve/GetMultiSensorAlarmReason').pipe(catchError(this.handleError));
  }

  getValveAlarmReason() {
    return this.http.get<MultiValveAlarmReason[]>(this.jApi + 'Valve/GetMultiValveAlarmReason').pipe(catchError(this.handleError));
  }

  getSensorAlarmDataList() {
    return this.http.get<MultiSensorAlarmData[]>(this.jApi + 'Valve/getSensorAlarmData').pipe(catchError(this.handleError));
  }

  getSensorAlarmDataByDate(model: PostEvents) {
    return this.http
      .post<MultiSensorAlarmData[]>(this.jApi + "Valve/getSensorAlarmDataByDate", model)
      .pipe(catchError(this.handleError));
  }


  getNodeAlarmDataList() {
    return this.http.get<MultiNodeAlarm[]>(this.jApi + 'Valve/getNodeAlarmData').pipe(catchError(this.handleError));
  }

  getNodeAlarmDataByDate(model: PostEvents) {
    return this.http
      .post<MultiNodeAlarm[]>(this.jApi + "Valve/getNodeAlarmDataByDate", model)
      .pipe(catchError(this.handleError));
  }

  getValveAlarmDataList() {
    return this.http.get<MultiValveAlarmData[]>(this.jApi + 'Valve/getValveAlarmData').pipe(catchError(this.handleError));
  }

  getValveAlarmDataByDate(model: PostEvents) {
    return this.http
      .post<MultiValveAlarmData[]>(this.jApi + "Valve/getValveAlarmDataByDate", model)
      .pipe(catchError(this.handleError));
  }

  GetRoles() {
    return this.http.get<any>(this.jApi + 'Users/GetRoles').pipe(catchError(this.handleError));
  }
  updateUserMobileAccess(id: string, flag: boolean) {
    return this.http.get<any>(this.jApi + 'Users/updateuseracess/' + id + "/" + flag).pipe(catchError(this.handleError));
  }
  addUsers(model: AddEditUserViewModel) {
    return this.http
      .post<AddEditUserViewModel>(this.jApi + "Users", model)
      .pipe(catchError(this.handleError));
  }
  updateUserTechId(id: string, techid: number) {
    return this.http.get<any>(this.jApi + 'Users/updatetechnician/' + id + "/" + techid).pipe(catchError(this.handleError));
  }
  updateGatewaySerialNo(id: number, model: Gateway) {
    return this.http.put<any>(this.jApi + 'Project/UpdateGateway/' + id , model).pipe(catchError(this.handleError));
  }
  getUserList() {
    return this.http.get<any>(this.jApi + 'Users').pipe(catchError(this.handleError));
  }

  getSSList() {
    return this.http.get<MultiSensorEvent[]>(this.jApi + 'Valve/getSensorEvents').pipe(catchError(this.handleError));
  }

  getDataLoggerList() {
    return this.http.get<MultiDataLogger[]>(this.jApi + 'Frame/GetDatalogger').pipe(catchError(this.handleError));
  }

  getSSByDateList(model: PostEvents) {

    return this.http
      .post<MultiSensorEvent[]>(this.jApi + "Valve/getSensorEventsByDate", model)
      .pipe(catchError(this.handleError));
  }

  getDataLoggerByDate(model: PostEventsDatalogger) {

    return this.http
      .post<MultiDataLogger[]>(this.jApi + "Frame/GetDataloggerbyDate", model)
      .pipe(catchError(this.handleError));
  }
  getSSTypes() {
    return this.http.get<MultiSensorType[]>(this.jApi + 'Valve/GetMultiSensorTypes').pipe(catchError(this.handleError));
  }
  getMultiNodeJoinDataFrame() {
    return this.http.get<MultiNodeJoinDataFrame[]>(this.jApi + 'Node/GetMultiNodeJoinDataFrame').pipe(catchError(this.handleError));
  }
  getMultiNodeJoinDataFrameByDate(model: PostEvents) {
    return this.http
      .post<MultiNodeJoinDataFrame[]>(this.jApi + "Node/GetMultiNodeJoinDataFrameByDate", model)
      .pipe(catchError(this.handleError));
  }

  getNodeNetworkDataFrame() {
    return this.http.get<MultiNodeNwDataFrame[]>(this.jApi + 'Node/GetNodeNetworkDataFrame').pipe(catchError(this.handleError));
  }

  getNodeNetworkDataFrameByDate(model: PostEvents) {
    return this.http
      .post<MultiNodeNwDataFrame[]>(this.jApi + "Node/GetNodeNetworkDataFrameByDate", model)
      .pipe(catchError(this.handleError));
  }


  getGwstatusData() {
    return this.http.get<GwstatusData[]>(this.jApi + 'Node/GetGwstatusData').pipe(catchError(this.handleError));
  }

  getGwstatusDataByDate(model: PostEvents) {
    return this.http
      .post<GwstatusData[]>(this.jApi + "Node/GetGwstatusDataByDate", model)
      .pipe(catchError(this.handleError));
  }


  getMultiFrameTypes() {
    return this.http.get<MultiFrameTypes[]>(this.jApi + 'Valve/GetMultiFrameTypes').pipe(catchError(this.handleError));
  }

  getValveReason() {
    return this.http.get<MultiValveReason[]>(this.jApi + 'Valve/GetMultiValveReason').pipe(catchError(this.handleError));
  }
  getMultiValveState() {
    return this.http.get<MultiValveState[]>(this.jApi + 'Valve/GetMultiValveState').pipe(catchError(this.handleError));
  }

}
