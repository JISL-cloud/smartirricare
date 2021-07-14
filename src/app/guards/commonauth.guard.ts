import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Observable, of } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class CommonAuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.auth_token) {
            // Check if user has permission to access the route
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/authentication/login']);
        return false;
    }
}