import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../authentication/base.service';
import { Network } from '../configuration/project/project.model';
import { AppConfigService } from '../_services/appconfigservice ';
import { SequenceShortViewModel, SequenceValveDataViewModel } from './sequence..model';

@Injectable({
  providedIn: 'root'
})
export class SequenceService extends BaseService {

  jApi: any;
  constructor(private http: HttpClient, private appURL: AppConfigService) {
    super();
    this.jApi = this.appURL.getServerUrl();
  }


  getSequenceList(id:number) {
    return this.http.get<SequenceShortViewModel[]>(this.jApi + 'Sequence/GetSequenceByProgramId?id='+ id).pipe(catchError(this.handleError));
  }

  getSequenceValveList(id:number) {
    return this.http.get<SequenceValveDataViewModel[]>(this.jApi + 'Sequence/GetSeqValDataMulti/'+ id).pipe(catchError(this.handleError));
  }

  getSequenceById(id:number) {
    return this.http.get<SequenceValveDataViewModel[]>(this.jApi + 'Sequence/GetSequenceById/'+ id).pipe(catchError(this.handleError));
  }

  deleteSequenceById(id:number) {
    return this.http.get<any>(this.jApi + 'Sequence/DeleteSequenceBySeqIdNew/'+ id).pipe(catchError(this.handleError));
  }
  deleteAllSequence() {
    return this.http.get<any>(this.jApi + 'Sequence/DeleteAllSequence').pipe(catchError(this.handleError));
  }
}
