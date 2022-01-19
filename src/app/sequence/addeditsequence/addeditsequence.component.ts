import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SequenceValveDataViewModel } from '../sequence..model';
import { SequenceService } from '../sequence.service';

@Component({
  selector: 'app-addeditsequence',
  templateUrl: './addeditsequence.component.html',
  styleUrls: ['./addeditsequence.component.css']
})
export class AddeditsequenceComponent implements OnInit {
  seqId:number = 0;
  seqValve:SequenceValveDataViewModel[]=[];
  seqName:string ="";
  constructor(private sequenceService: SequenceService,private toastr: ToastrService,private activatedRoute: ActivatedRoute, public router: Router,) { }

  ngOnInit(): void {
    this.seqId = +this.activatedRoute.snapshot.pathFromRoot[0].queryParams["seqId"];
    this.seqName= this.activatedRoute.snapshot.pathFromRoot[0].queryParams["seqName"];
    if(this.seqId > 0)
    {
      this.getSequencesValve(this.seqId);
    }
    
  }

  getSequencesById(id:number) {
    this.sequenceService.getSequenceById(id).subscribe(
      (response: SequenceValveDataViewModel[]) => {
        this.seqValve = response;
        console.log(response);
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Sequence Valve list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  getSequencesValve(id:number) {
    this.sequenceService.getSequenceValveList(id).subscribe(
      (response: SequenceValveDataViewModel[]) => {
        this.seqValve = response;
        console.log(response);
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Sequence Valve list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }

  goToList()
  {
    this.router.navigate(['/sequence/list']);
  }
}
