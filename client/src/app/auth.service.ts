import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  signUpUrl: string = "http://localhost:3001/api/signup";
  loginUrl: string = "http://localhost:3001/api/login";
  username: any;

  constructor( private http: Http ) { }

  signUp(data) {
    return this.http.post(this.signUpUrl, data).map((res) => res.json()).catch(this.errorHandler);
  }

  login(user) {
    return this.http.post(this.loginUrl, user).map((res) => this.username = res.json()).catch(this.errorHandler);
  }

  private errorHandler(err: Response ) {
    let msg = `error is: ${err.statusText}`
    return Observable.throw(msg);
  }

}
