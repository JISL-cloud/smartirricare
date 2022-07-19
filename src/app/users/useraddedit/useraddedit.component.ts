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
  passwordShown : boolean = false;
  passwordType ='password';
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
  toggleShow() {
    this.passwordShown = !this.passwordShown;
    this.passwordType = this.passwordShown ? 'text' : 'password';
  }
  addUser(){
    if(this.userInfo.confirmPassword != this.userInfo.password){
      this.toastr.warning("Password and confirm password should be same")
      return;
    }
    if(this.userInfo.firstName == ""){
      this.toastr.warning("Enter First Name")
      return;
    }
    if(this.userInfo.lastName ==""){
      this.toastr.warning("Enter Last Name")
      return;
    }
    if(this.userInfo.UserName ==""){
      this.toastr.warning("Enter User Name/Email")
      return;
    }
    if(this.userInfo.roleId =="0"){
      this.toastr.warning("Select Role")
      return;
    }
    this.valveservice.addUsers(this.userInfo).subscribe(
      (response:any) => {
        if(response.errorCode != 7){
          this.toastr.success("User added successfully");
          this.router.navigate(["/users"])
        }
        else{
          this.toastr.error(response.message);
          
        }        
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
