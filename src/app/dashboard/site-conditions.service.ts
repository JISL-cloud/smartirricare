import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, from } from 'rxjs';
import { map, switchMap, take, delay } from 'rxjs/operators';

@Injectable()
export class SiteConditionsService {
   _center = new BehaviorSubject<number[]>([]); // works
 // _center = new BehaviorSubject<number[]>([41.49871231510167, -72.95581850473526]); // doesn't work
  _heading = new BehaviorSubject<number>(0);

  center$ = this._center.asObservable();
  heading$ = this._heading.asObservable();

  constructor() {
    // this.route.params.pipe(
    //   take(1),
    //   switchMap(params => this.getInitialCenter(+params.id))
    // ).subscribe(initialCenter => {
    //   this._center.next(initialCenter);
    // });
    const center = [21.0077, 75.5626];
    this._center.next(center);
    // this.getInitialCenter(0).subscribe(initialCenter => {
    //   this._center.next(initialCenter);
    // })
  }

//   getInitialCenter(reportId:any): Observable<number[]> {
//     // would come from HTTP service
//     const center = [41.49871231510167, -72.95581850473526];
//     return from<number[]>([center]).pipe(delay(2000));
//   }
}
