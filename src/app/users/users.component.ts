import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AddEditUserViewModel, AspNetRoles } from '../authentication/auth.model';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:AddEditUserViewModel[]=[]
  roleList:AspNetRoles[]=[]
  dtOptions: any
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserList();
    this.getRoleList();
  }

  getUserList() {
    this.valveservice.getUserList().subscribe(
      (response:any) => {
        this.userList = response.data;
        this.dtTrigger.next();
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching User list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  updateUserRestriction(id:string, flag:boolean){
    this.valveservice.updateUserMobileAccess(id, flag).subscribe(
      (response:any) => {
        this.toastr.success("User updated successfully.");
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Role list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
  
  getRole(id:string){
   return  this.roleList.filter(x=>x.Id ==id)[0].Name;
  }
  getRoleList() {
    this.valveservice.GetRoles().subscribe(
      (response:any) => {
        this.roleList = response.data;
      },
      customError => {
        this.toastr.error(
          `Error happened while fetching Role list. <br />
                  ${customError.message}`,
          'Error'
        );
      }
    );
  }
}
