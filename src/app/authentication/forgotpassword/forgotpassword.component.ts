import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordModel } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: ForgotPasswordModel = new ForgotPasswordModel();

  constructor(
      private router: Router,
      private authService: AuthService,
      private toastr: ToastrService
  ) {}

  ngOnInit() {}

  // Send mail to reset password.
  onSubmit() {
      this.authService.forgotPassword(this.forgotPassword.email).subscribe(
          data => {
              this.toastr.success(
                  'Please check your registered email for an email to reset your password.'
              );
              this.router.navigate(['/authentication/login']);
          },
          customError => {
              this.toastr.error(
                  `Could not send email to your registered email account. <br />
              ${customError.message}`,
                  'Error'
              );
          }
      );
  }
  
}
