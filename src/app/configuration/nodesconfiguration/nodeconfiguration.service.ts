import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/authentication/base.service';
import { AppConfigService } from 'src/app/_services/appconfigservice ';
import { CardType, GatewayNode, NonRechableNode, RechableNode } from './nodeconfiguration.model';

@Injectable({
  providedIn: 'root'
})
export class NodeconfigurationService extends BaseService{
  jApi: any;
  constructor(private http: HttpClient, private appURL: AppConfigService) {
    super();
    this.jApi = this.appURL.getServerUrl();
  }
  
  getNonRechableNodeByNodeId(nodeId:number){
    return this.http.get<NonRechableNode>(this.jApi + 'Product/GetNonRechableNodeByNodeId?id='+ nodeId).pipe(catchError(this.handleError));
  }

  getRechableNodeByNodeId(nodeId:number){
    return this.http.get<RechableNode>(this.jApi + 'Product/GetRechableNodeByNodeId?id='+ nodeId).pipe(catchError(this.handleError));
  }

  getGatewayNodeByNodeId(nodeId:number){
    return this.http.get<GatewayNode>(this.jApi + 'Product/GetGatewayNodeByNodeId?id='+ nodeId).pipe(catchError(this.handleError));
  }

  addNonRechargableNode(model: NonRechableNode) {
    return this.http.post(this.jApi + 'Product/AddNonRechargeableNode', model).pipe(catchError(this.handleError));
  }

  editNonRechargableNode(model: NonRechableNode) {
    return this.http
      .put<NonRechableNode>(this.jApi + 'Product/EditNonRechargeableNode/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  addRechargableNode(model: RechableNode) {
    return this.http.post(this.jApi + 'Product/AddRechargeableNode', model).pipe(catchError(this.handleError));
  }

  editRechargableNode(model: RechableNode) {
    return this.http
      .put<RechableNode>(this.jApi + 'Product/EditRechargeableNode/' + model.id, model)
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

  getCardType(){
    return this.http.get<CardType[]>(this.jApi + 'Product/GetCardType').pipe(catchError(this.handleError));
  }
}
