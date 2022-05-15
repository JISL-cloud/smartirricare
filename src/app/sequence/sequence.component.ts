import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
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
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public router: Router, private sequenceService: SequenceService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      retrieve: true,
      //serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      // columnDefs: [
      //   { "orderable": false, "targets": [0, 5] }

      // ],
      //destroy: true
      stateSave: true,
      //processing: true,

    };
    this.getSequences();
  }

  getSequences() {
    this.sequenceService.getSequenceList(0).subscribe(
      (response: SequenceShortViewModel[]) => {
        this.seqLst = response;
        this.dtTrigger.next()
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
  getdays(WeekDays:number[]){
    let str = ""
    WeekDays.forEach(element => {
      if(element ==1){
        str = str+", Mon"
      }
      if(element ==2){
        str = str+", Tue"
      }
      if(element ==3){
        str = str+", Wed"
      }
      if(element ==4){
        str = str+", Thurs"
      }
      if(element ==5){
        str = str+", Fri"
      }
      if(element ==6){
        str = str+", Sat"
      }
      if(element ==7){
        str = str+", Sun"
      }
     
    });
    return str
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
  deleteAllSeq(){
    if(confirm("Are you sure to delete all sequences"))
    {
      this.sequenceService.deleteAllSequence().subscribe(
        (response: Response) => {
         this.toastr.success("Sequence deleted successfully.")
         this.getSequences();
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
        else{

    }
  
  }

  deleteSeq(id:number){
    this.sequenceService.deleteSequenceById(id).subscribe(
      (response: Response) => {
       this.toastr.success("Sequence deleted successfully.")
       this.getSequences();
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
}
