import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/authentication/base.service';
import { AppConfigService } from 'src/app/_services/appconfigservice ';
import { ProjectConfiguration } from '../project/project.model';
import { Analog05vsensor, Analog420mAsensor, DigitalCounterTypeSensor, DigitalNoNctypeSensor, Vrtsetting, WaterMeterSensorSetting } from '../sensors/sensors.model';
import { Attachment, UploadModel } from '../uploadconfiguration/upload.model';
import { CardType, GatewayNode, MultiAddonCardTypes, NonRechableNode, RechableNode } from './nodeconfiguration.model';
import { NodeLiveData } from './nodelivedata/nodelivedata.model';
import { NodeSetting } from './nodesetting/nodesetting.model';
import { NodeUpdateData } from './nodeupdatedata/nodeupdatedata.model';

@Injectable({
  providedIn: 'root'
})
export class NodeconfigurationService extends BaseService {
  jApi: any;
  constructor(private http: HttpClient, private appURL: AppConfigService) {
    super();
    this.jApi = this.appURL.getServerUrl();
  }

  //Node Update Data
  getNodeUpdateByNodeId(nodeId: number) {
    return this.http.get<NodeUpdateData>(this.jApi + 'Product/GetNonRechableNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }
  addNodeUpdateData(model: NodeUpdateData) {
    return this.http.post(this.jApi + 'Product/AddNonRechargeableNode', model).pipe(catchError(this.handleError));
  }
  editNodeUpdateData(model: NodeUpdateData) {
    return this.http
      .put<NodeUpdateData>(this.jApi + 'Product/EditNonRechargeableNode/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  //NOde Setting
  getNodeSettingByNodeId(nodeId: number) {
    return this.http.get<NodeSetting>(this.jApi + 'Product/GetNonRechableNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }
  addNodeSettingData(model: NodeSetting) {
    return this.http.post(this.jApi + 'Product/AddNonRechargeableNode', model).pipe(catchError(this.handleError));
  }
  editNodeSettingData(model: NodeSetting) {
    return this.http
      .put<NodeSetting>(this.jApi + 'Product/EditNonRechargeableNode/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  //Node Live Data
  getNodeLiveDataByNodeId(nodeId: number) {
    return this.http.get<NodeLiveData>(this.jApi + 'Product/GetNonRechableNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }
  addNodeLiveData(model: NodeLiveData) {
    return this.http.post(this.jApi + 'Product/AddNonRechargeableNode', model).pipe(catchError(this.handleError));
  }
  editNodeLiveData(model: NodeLiveData) {
    return this.http
      .put<NodeLiveData>(this.jApi + 'Product/EditNonRechargeableNode/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  getNonRechableNodeByNodeId(nodeId: number) {
    return this.http.get<NonRechableNode>(this.jApi + 'Product/GetNonRechableNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }

  getRechableNodeByNodeId(nodeId: number) {
    return this.http.get<RechableNode>(this.jApi + 'Product/GetRechableNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }

  getGatewayNodeByNodeId(nodeId: number) {
    return this.http.get<GatewayNode>(this.jApi + 'Product/GetGatewayNodeByNodeId?id=' + nodeId).pipe(catchError(this.handleError));
  }

  addNonRechargableNode(model: NonRechableNode) {
    return this.http.post(this.jApi + 'Product/AddNonRechargeableNode', model).pipe(catchError(this.handleError));
  }

  editNonRechargableNode(model: NonRechableNode) {
    return this.http
      .put<NonRechableNode>(this.jApi + 'Product/EditNonRechargeableNode/' + model.Id, model)
      .pipe(catchError(this.handleError));
  }

  addRechargableNode(model: RechableNode) {
    return this.http.post(this.jApi + 'Product/AddRechargeableNode', model).pipe(catchError(this.handleError));
  }

  editRechargableNode(model: RechableNode) {
    return this.http
      .put<RechableNode>(this.jApi + 'Product/EditRechargeableNode/' + model.Id, model)
      .pipe(catchError(this.handleError));
  }

  addGatewayNode(model: GatewayNode) {
    return this.http.post(this.jApi + 'Product/AddGatewayNode', model).pipe(catchError(this.handleError));
  }

  editGatewayNode(model: GatewayNode) {
    return this.http
      .put<GatewayNode>(this.jApi + 'Product/EditGatewayNode/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  getAddonsCardTypeList(){
    return this.http.get<MultiAddonCardTypes[]>(this.jApi + 'Valve/GetMultiAddonsTypes').pipe(catchError(this.handleError));
  }

  deleteAllConf(){
    return this.http.get<MultiAddonCardTypes[]>(this.jApi + 'Configuraion/DeleteAllConf').pipe(catchError(this.handleError));
  }

  getNonRechableNodeList(){
    return this.http.get<NonRechableNode[]>(this.jApi + 'Configuraion/NonRechableNode').pipe(catchError(this.handleError));
  }

  getRechableNodeList(){
    return this.http.get<RechableNode[]>(this.jApi + 'Configuraion').pipe(catchError(this.handleError));
  }

  getGatewayNodeList(){
    return this.http.get<GatewayNode[]>(this.jApi + 'Configuraion/GetGatewayNode').pipe(catchError(this.handleError));
  }

  getLstVrt(){
    return this.http.get<Vrtsetting[]>(this.jApi + 'Configuraion/GetVrt').pipe(catchError(this.handleError));
  }

  getLstAnalog05v(){
    return this.http.get<Analog05vsensor[]>(this.jApi + 'Configuraion/GetSensorAnalog05v').pipe(catchError(this.handleError));
  }

  getLstAnalog420mA(){
    return this.http.get<Analog420mAsensor[]>(this.jApi + 'Configuraion/GetSensorAnalog420v').pipe(catchError(this.handleError));
  }

  getLstDigitalNoNc(){
    return this.http.get<DigitalNoNctypeSensor[]>(this.jApi + 'Configuraion/GetDigitalNO_NCTypeSensor').pipe(catchError(this.handleError));
  }

  getLstDigitalCounter(){
    return this.http.get<DigitalCounterTypeSensor[]>(this.jApi + 'Configuraion/GetDigitalCounterTypeSensor').pipe(catchError(this.handleError));
  }

  getLstWaterMeter(){
    return this.http.get<WaterMeterSensorSetting[]>(this.jApi + 'Configuraion/GetWaterMeterSensorSetting').pipe(catchError(this.handleError));
  }

/////////////////------------------------------------------------------


getNonRechableNodeListByNodeNw(nodeId:number, networkId:number){
  return this.http.get<NonRechableNode[]>(this.jApi + 'Configuraion/NonRechableNodeByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getRechableNodeListByNodeNw(nodeId:number, networkId:number){
  return this.http.get<RechableNode[]>(this.jApi + 'Configuraion/GetRechargeableByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getGatewayNodeListByNodeNw(nodeId:number, networkId:number){
  return this.http.get<GatewayNode[]>(this.jApi + 'Configuraion/GetGatewayNodeByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstVrtByNodeNw(nodeId:number, networkId:number){
  return this.http.get<Vrtsetting[]>(this.jApi + 'Configuraion/GetVrtByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstAnalog05vByNodeNw(nodeId:number, networkId:number){
  return this.http.get<Analog05vsensor[]>(this.jApi + 'Configuraion/GetSensorAnalog05vByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstAnalog420mAByNodeNw(nodeId:number, networkId:number){
  return this.http.get<Analog420mAsensor[]>(this.jApi + 'Configuraion/GetSensorAnalog420vByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstDigitalNoNcByNodeNw(nodeId:number, networkId:number){
  return this.http.get<DigitalNoNctypeSensor[]>(this.jApi + 'Configuraion/GetDigitalNO_NCTypeSensorByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstDigitalCounterByNodeNw(nodeId:number, networkId:number){
  return this.http.get<DigitalCounterTypeSensor[]>(this.jApi + 'Configuraion/GetDigitalCounterTypeSensorByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}

getLstWaterMeterByNodeNw(nodeId:number, networkId:number){
  return this.http.get<WaterMeterSensorSetting[]>(this.jApi + 'Configuraion/GetWaterMeterSensorSettingByNodeNetwork/'+nodeId+"/"+networkId).pipe(catchError(this.handleError));
}
















  getCardType() {
    return this.http.get<CardType[]>(this.jApi + 'Product/GetCardType').pipe(catchError(this.handleError));
  }

  //Add Request Quote
  uploadConf(model: UploadModel) {
    const formData = new FormData();
    if (model.attachmentViewModels != null) {
      model.attachmentViewModels.forEach(item => {
        if (item.file && item.file !== null) {
          formData.append(item.fileName, item.file as File);
        }
      });
    }
    return this.http.post(this.jApi + 'UploadConfiguration', formData).pipe(catchError(this.handleError));
  }
  getAttachmentPDF() {
    return this.http
      .get(this.jApi + 'UploadConfiguration/filedownload', { responseType: 'blob' })
      .pipe(catchError(this.handleError));
  }

  getProjectInfo(){
    return this.http.get<ProjectConfiguration>(this.jApi + 'UploadConfiguration/project').pipe(catchError(this.handleError));
  }


  uploadConfSeq(model: UploadModel) {
    const formData = new FormData();
    if (model.attachmentViewModels != null) {
      model.attachmentViewModels.forEach(item => {
        if (item.file && item.file !== null) {
          formData.append(item.fileName, item.file as File);
        }
      });
    }
    return this.http.post(this.jApi + 'UploadConfiguration/Sequence', formData).pipe(catchError(this.handleError));
  }
}
