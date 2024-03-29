import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { EventsService } from 'src/app/events/events.service';
import { MultiUiversion } from 'src/app/events/events.model';
import { ToastrService } from 'ngx-toastr';
//declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  time!: Date;
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;
  version:MultiUiversion= new MultiUiversion()
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    public valveservice: EventsService,public toastr: ToastrService
  ) { }

  // End open close
  async ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    let serverDateTime = currentUser.datetime
    this.time = new Date(serverDateTime);
    let ss = new Date()
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date(new Date(this.time).getSeconds() + 1);
    }, 1000);

    await this.getVersion()
  }
  async getVersion(): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      this.valveservice.getVesionDetails().subscribe(
        (response: MultiUiversion) => {
          this.version = response;
          resolve();
        },
        customError => {
          this.toastr.error(
            `Error happened while fetching version details. <br />
                    ${customError.message}`,
            'Error'
          );
          reject();
        }
      );
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
