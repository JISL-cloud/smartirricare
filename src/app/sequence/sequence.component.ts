import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SequenceShortViewModel, SequenceValveDataViewModel } from './sequence..model';
import { SequenceService } from './sequence.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
  seqLst: SequenceShortViewModel[] = [];
  seqValve:SequenceValveDataViewModel[]=[];
  constructor(public router: Router, private sequenceService: SequenceService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSequences();
  }

  getSequences() {
    this.sequenceService.getSequenceList(0).subscribe(
      (response: SequenceShortViewModel[]) => {
        this.seqLst = response;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Sequence list. <br />
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

  getIndividualSeqValve(id:number){
    this.getSequencesValve(id);
  }

  editSequence(Id:number, seqName:string){
    this.router.navigate(['/sequence/addedit'], { queryParams: { seqId: Id, seqName: seqName } });
  }

}
