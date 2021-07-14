import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


export const AuthenticationRoutes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: 'lock',
    component: LockComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetpassword/:actionType',
    component: ResetpasswordComponent,
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'forgotpassword',
    //canActivate: [],
    component: ForgotpasswordComponent
    //,
    // data: {
    //     title: 'Forgot Password - UCI Construction Forms',
    // } as AppRouteData,
  },
  
];
