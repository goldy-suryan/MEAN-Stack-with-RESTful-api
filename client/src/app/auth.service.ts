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

  constructor( http: Http ) {
    super("http://localhost:3001/allblogs/", http)
   }

  signUp(data): Observable<any> {
    return this.http.post(this.signUpUrl, data).map((res) => res.json());
  }

  login(user): Observable<any> {
    return this.http.post(this.loginUrl, user).map((res) => res.json());
  }
}
