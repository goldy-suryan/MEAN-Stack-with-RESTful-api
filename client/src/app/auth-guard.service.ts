import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if (typeof Storage !== undefined) {
      if (sessionStorage.getItem("user")) {
        return true;
      }
    }
    this.router.navigate(['/login']);
  }
}