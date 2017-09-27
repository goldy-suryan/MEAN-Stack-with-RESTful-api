import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    if (typeof Storage !== undefined) {
      if (sessionStorage.getItem("user")) {
        return true;
      }
    }
    return false;
  }
}