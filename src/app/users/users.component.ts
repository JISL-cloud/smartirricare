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
  isUserNoEdit:boolean = false;
  constructor(public valveservice: EventsService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserList();
    this.getRoleList();
  }

  getUserList() {
    this.valveservice.getUserList().subscribe(
      (response:any) => {
        this.userList = response.data;
        this.userList = this.userList.filter(x=>x.UserName !='jisl@jains.com')
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
  UpdateTechId(pos:AddEditUserViewModel){
    if(pos.UserNo == 0){
      this.toastr.warning("Technician Id should be greator than 0")
      return;
    }
    if(pos.UserNo > 65535){
      this.toastr.warning("Technician Id should be smaller than 65535")
      pos.UserNo = 0
      return;
    }
    this.valveservice.updateUserTechId(pos.UserId, pos.UserNo).subscribe(
      (response:any) => {
        this.toastr.success("User updated successfully.");
        pos.isUserNoEdit = !pos.isUserNoEdit
      },
      customError => {
        pos.UserNo = 0
        this.toastr.error(
          `Error happened while updating technician Id. Kindly check if technician id is alredy assigned to other user <br />
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
  deleteUser(id:string){
    this.valveservice.DeleteUser(id).subscribe(
      (response:any) => {
        this.toastr.success("User Deleted Successfully")
        this.getUserList()
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
