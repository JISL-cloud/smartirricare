import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { PostEvents, PostEventsDatalogger } from '../events/events.model';
import { EventsService } from '../events/events.service';
import { GwIdLstMode, MultiDataLogger } from './datalogger.model';

@Component({
  selector: 'app-datalogger',
  templateUrl: './datalogger.component.html',
  styleUrls: ['./datalogger.component.css']
})
export class DataloggerComponent implements OnInit {
  dataLst: MultiDataLogger[] = [];
  dataMasterLst: MultiDataLogger[] = [];
  messageList:string[]=[]
  dtOptions: any
  searchString:string=""
  dtTrigger: Subject<any> = new Subject<any>();
  postEvents: PostEventsDatalogger = new PostEventsDatalogger()
  gwlist: GwIdLstMode[] = []
  mainmessage: string = ""
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.postEvents.startdate = this.getFormattedDate(new Date())
    this.postEvents.endDate = this.getFormattedDate(new Date())
    this.dtOptions = {
      // serverSide: true,
      //  retrieve: true,
      processing: true,
      pagingType: 'full_numbers',
      pageLength: 100,
      order: [1, 'desc'],
      dom: 'Blfrtip',
      // buttons: [
      //   'colvis',
      //   'excel',
      // ],
      // columnDefs: [
      //   { type: "date", targets: [0] }

      // ],
      //destroy: true
      stateSave: true,
      //processing: true,

    };
    this.getSSEvets();

  }
  clear() {
    $('#dt1').DataTable().destroy();
    this.getSSEvets();
  }

  getFormattedDate(date: any) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  SearchRec() {
    $('#dt1').DataTable().destroy();
    this.postEvents.startDateTime = this.postEvents.startdate + " " + this.postEvents.fromTime
    this.postEvents.endDateTime = this.postEvents.endDate + " " + this.postEvents.toTime
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getDataLoggerByDate(this.postEvents).subscribe(
        (response: MultiDataLogger[]) => {
          $('#dt1').DataTable().destroy();
          this.dataLst = [] = [];
          this.dataLst = response;
          this.mainmessage="";

          response.forEach(element => {
            let gwlstP = new GwIdLstMode();
            gwlstP.id = element.GwId
            gwlstP.name = element.GwId
            if (this.gwlist.filter(x => x.name == element.GwId).length == 0) {
              this.gwlist.push(gwlstP);
            }

            this.mainmessage = this.mainmessage + "Date:" + element.AddedDateTime.toString() + " Gateway NO : " + element.GwId + "\n"
              + element.Message + "\n"
          });

          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching list. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });

  }
  Searchtext(){
  }
  getMessage(message: string) {
    let msg = message.split("TO");
    let htmlString = ""
    msg.forEach(element => {
      let msg = element.split('\\n');
      //var filterMsg = msg.filter(x=>x.)
     
      htmlString = htmlString + " " + element + " "
    });
    return htmlString;
  }

  downloadTxt() {

    const textToBLOB = new Blob([this.mainmessage], { type: 'text/plain' });
    const sFileName = 'Datalogger.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();

  }

  getSSEvets() {
    this.valveservice.getDataLoggerList().subscribe(
      (response: MultiDataLogger[]) => {
        // this.dataLst = response;
        // this.dataMasterLst = response
        // this.mainmessage="";
        response.forEach(element => {
          let gwlstP = new GwIdLstMode();
          gwlstP.id = element.GwId
          gwlstP.name = element.GwId
          if (this.gwlist.filter(x => x.name == element.GwId).length == 0) {
            this.gwlist.push(gwlstP);
          }
          this.mainmessage = this.mainmessage + "Date:" + element.AddedDateTime.toString() + " Gateway NO : " + element.GwId + "\n"
          + element.Message + "\n"
        });
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching data list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
