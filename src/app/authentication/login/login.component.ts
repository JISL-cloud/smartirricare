import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  lofinInfo: Login = new Login();
  submitted = false;

  constructor(private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private authservice: AuthService,
  ) { }

  loginform = true;
  recoverform = false;

  ngOnInit(): void {

  }
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
    this.router.navigate(['authentication/forgotpassword']);
  }


  login() {
    this.submitted = true;
    // stop here if form is invalid
    this.authservice
      .login(this.lofinInfo.username, this.lofinInfo.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['dashboard']);
        },
        customError => {
          this.toastr.error(
            `Unable to login. Please try again. <br />${customError.message}`,
            'Error'
          );
        }
      );
  }

}
