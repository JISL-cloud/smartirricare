import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordModel } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
) {}
static ChangePasswordComponent: any;

model: ResetPasswordModel = new ResetPasswordModel();

ngOnInit(): void {
    this.model.actionType = this.route.snapshot.paramMap.get('actionType') || '{}';
    this.model.code = this.route.snapshot.fragment!;
}

onSubmit() {
    if (this.model.password !== this.model.confirmpassword) {
        this.toastr.error('The password and confirmation password do not match.');
    } else {
        this.authService.resetPassword(this.model).subscribe(
            (data: any) => {
                this.toastr.success('Your password has been reset.');
                this.router.navigate(['authentication/login']);
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
}
