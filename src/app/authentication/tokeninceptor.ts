import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private injector: Injector,
        private authenticationService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const headers = request.headers.set('Content-Type', 'application/json');
        const authService = this.injector.get(AuthService);
        const currentUser = authService.currentUserValue;
        if (currentUser && currentUser.auth_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.auth_token}`,
                },
            });
        }
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401 || err.status === 403) {
                    // auto redirect to login page if 401 response returned from api
                    this.authenticationService.clearSession();
                    // location.reload(true);
                    this.router.navigate(['authentication/login']);
                }
                return throwError(err);
            })
        );
    }
}
