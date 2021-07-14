import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ChangePasswordModel } from '../auth.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
    changePasswordModel: ChangePasswordModel = new ChangePasswordModel();
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {}

    // Reset password
    onSubmit() {
        if (this.changePasswordModel.oldPassword === this.changePasswordModel.newPassword) {
            this.toastr.error('The new password must be different than your previous password.');
        } else if (
            this.changePasswordModel.newPassword !== this.changePasswordModel.confirmpassword
        ) {
            this.toastr.error('The new password and confirmation password do not match.');
        } else {
            this.authService.changePassword(this.changePasswordModel).subscribe(
                data => {
                    this.toastr.success('Your password has been reset.');
                    //this.router.navigate(['/']);
                    this.router.navigate(['dashboard']);
                },
                customError => {
                    this.toastr.error(
                        `Error happened while resetting password. <br />
                ${customError.message}`,
                        'Error'
                    );
                }
            );
        }
    }

    back() {
        //this.router.navigate(['/']);
        this.router.navigate(['dashboard']);
    }
}
