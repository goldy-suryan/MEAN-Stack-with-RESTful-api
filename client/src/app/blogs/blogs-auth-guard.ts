import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class BlogsGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate() {
    if (this.authService.CurrentUser.user && this.authService.CurrentUser.user.admin)  return true;
    
    return false;
  }
}