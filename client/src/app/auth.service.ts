import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  signUpUrl: string = "/api/signup";

  constructor( private http: Http ) { }

  signUp(data) {
    return this.http.post(this.signUpUrl, data).map((res) => res.json()).catch(this.errorHandler)
  }

  private errorHandler(err) {
    let msg = `error is: ${err}`
    return Observable.throw(msg);
  }

}
