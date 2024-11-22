// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const allowedUserTypes = route.data['allowedUserTypes'] as Array<string>;
      const currentUserType = this.authService.getCurrentUserType();

      if (allowedUserTypes && currentUserType && !allowedUserTypes.includes(currentUserType)) {
        // Redirigir al dashboard correspondiente según el tipo de usuario
        switch(currentUserType) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'regente':
            this.router.navigate(['/regente']);
            break;
          case 'coordinador':
            this.router.navigate(['/coordinador']);
            break;
          default:
            this.router.navigate(['/login']);
        }
        return false;
      }
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}