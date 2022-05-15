import { Component, OnInit } from '@angular/core';
import { PostEvents } from '../events.model';

@Component({
  selector: 'app-networkdataanalysis',
  templateUrl: './networkdataanalysis.component.html',
  styleUrls: ['./networkdataanalysis.component.css']
})
export class NetworkdataanalysisComponent implements OnInit {
  postEvents:PostEvents = new PostEvents()

  constructor() { }

  ngOnInit(): void {
  }
  SearchRec(){
    
  }
}
