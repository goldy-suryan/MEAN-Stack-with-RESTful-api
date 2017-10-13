import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable";
import { ISignup, Ilogin, Iblogs } from "./interfaces";

@Injectable()
export class AuthService extends DataService{

  signUpUrl: string = "http://localhost:3001/auth/signup";
  loginUrl: string = "http://localhost:3001/auth/login";

  constructor( http: Http, private router: Router ) {
    super("http://localhost:3001/allblogs/", http)
   }

  signUp(data): Observable<any> {
    return this.http.post(this.signUpUrl, data).map((res) => res.json()).catch(this.errorHandler);
  }

  login(user): Observable<any> {
    return this.http.post(this.loginUrl, user).map((res) => res.json()).catch(this.errorHandler);
  }

  logOut() {
    sessionStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  get CurrentUser() {
    let token = sessionStorage.getItem("user");
    if(!token) return null;

    return new JwtHelper().decodeToken(token);
  }
}
