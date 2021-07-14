import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentUser } from './auth.model';
import { ChangePasswordModel, ResetPasswordModel } from './auth.model';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';
import { AppConfigService } from '../_services/appconfigservice ';

@Injectable()
export class AuthService extends BaseService {
    private currentUserSubject: BehaviorSubject<CurrentUser>;
    gnBaseURL: any;

    constructor(private http: HttpClient, private appURL: AppConfigService) {
        super();
        this.currentUserSubject = new BehaviorSubject<CurrentUser>(
            JSON.parse(sessionStorage.getItem('currentUser') || '{}')
        );       
    }

    get currentUser$(): Observable<CurrentUser> {
        return this.currentUserSubject.asObservable();
    }

    get currentUserValue(): CurrentUser {
        return this.currentUserSubject.value;
    }

    // Login
    login(UserName: string, Password: string) {
        this.gnBaseURL = this.appURL.getServerUrl();
        let Name = this.appURL.getPort();
        return this.http
            .post<any>(this.gnBaseURL + "Auth", { UserName, Password, Name})
            .pipe(
                map(user => {
                    this.setCurrentUser(user.data);
                    return user.data;
                })
            )
            .pipe(catchError(this.handleError));
    }

    // Set current login user details
    setCurrentUser(user: CurrentUser) {
        // store user details and jwt token in session storage to keep user logged in between page refreshes
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    // clear session
    clearSession() {
        // remove user from session storage to log user out
        sessionStorage.clear();
        this.currentUserSubject.next(new CurrentUser());
    }

    // logout
    logout() {
        // return this.http
        //     .post<any>(environment.apiUrl + 'auth/logout', {})
        //     .pipe(
        //         map(user => {
        //             return true;
        //         })
        //     )
        //     .pipe(catchError(this.handleError));
        sessionStorage.clear();

    }

    // Forgot Password
    forgotPassword(username: string) {
        this.gnBaseURL = this.appURL.getServerUrl();
        username = username.toLowerCase();
        return this.http
            .post<any>(this.gnBaseURL + "Auth/forgotpassword", { Email: username })
            .pipe(catchError(this.handleError));
    }

    // Reset Password
    resetPassword(model: ResetPasswordModel) {
        this.gnBaseURL = this.appURL.getServerUrl();
        return this.http
            .post<any>(this.gnBaseURL + "auth/resetpassword", model)
            .pipe(catchError(this.handleError));
    }

    // Change Password
    changePassword(ChangePassword: ChangePasswordModel) {
        this.gnBaseURL = this.appURL.getServerUrl();
        return this.http
            .post<any>(this.gnBaseURL + "auth/changepassword", ChangePassword)
            .pipe(catchError(this.handleError));
    }
}
