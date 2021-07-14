import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/authentication/base.service';
import { AppConfigService } from 'src/app/_services/appconfigservice ';
import { Network, NetworkDDL, NodeModel, ProductTypes, Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService{
  jApi: any;
  constructor(private http: HttpClient, private appURL: AppConfigService) {
    super();
    this.jApi = this.appURL.getServerUrl();
  }

  getProjectList(){
    return this.http.get<Project[]>(this.jApi + 'Project').pipe(catchError(this.handleError));
  }

  getProductTypes(){
    return this.http.get<ProductTypes[]>(this.jApi + 'Product').pipe(catchError(this.handleError));
  }

  getNetworkList(){
    return this.http.get<Network[]>(this.jApi + 'Network').pipe(catchError(this.handleError));
  }

  getAvailableNetworkList(){
    return this.http.get<NetworkDDL[]>(this.jApi + 'Network/GetAvailableNetworks').pipe(catchError(this.handleError));
  }

  getNodeList(networkId:number){
    return this.http.get<NodeModel[]>(this.jApi + 'Node?id='+ networkId).pipe(catchError(this.handleError));
  }

  getNodeById(nodeId:number){
    return this.http.get<NodeModel>(this.jApi + 'Node/GetNodeById?id='+ nodeId).pipe(catchError(this.handleError));
  }

  addNode(model: NodeModel) {
    return this.http.post(this.jApi + 'Node', model).pipe(catchError(this.handleError));
  }

  editNode(model: NodeModel) {
    return this.http
      .put<NodeModel>(this.jApi + 'Node/' + model.id, model)
      .pipe(catchError(this.handleError));
  }

  deleteNode(id: number) {
    return this.http
      .delete<any>(this.jApi + 'Node?id=' + id)
      .pipe(catchError(this.handleError));
  }
}
