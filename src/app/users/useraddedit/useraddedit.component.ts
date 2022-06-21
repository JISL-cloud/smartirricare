import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddEditUserViewModel, AspNetRoles } from 'src/app/authentication/auth.model';
import { EventsService } from 'src/app/events/events.service';

@Component({
  selector: 'app-useraddedit',
  templateUrl: './useraddedit.component.html',
  styleUrls: ['./useraddedit.component.css']
})
export class UseraddeditComponent implements OnInit {
  userInfo:AddEditUserViewModel= new AddEditUserViewModel();
  roleList:AspNetRoles[]=[]
  constructor(public valveservice: EventsService, public toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.getRoleList();
  }
  getRoleList() {
    this.valveservice.GetRoles().subscribe(
      (response:any) => {
        this.roleList = response.data as AspNetRoles[];
        this.roleList = this.roleList.filter(x=>x.Name!="Super Admin")
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

  addUser(){
    this.valveservice.addUsers(this.userInfo).subscribe(
      (response:any) => {
        this.router.navigate(["/users"])
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
