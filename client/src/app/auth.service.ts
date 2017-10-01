import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable";
import { ISignup, Ilogin, Iblogs } from "./interfaces";

@Injectable()
export class AuthService {

  signUpUrl: string = "http://localhost:3001/auth/signup";
  loginUrl: string = "http://localhost:3001/auth/login";
  blogsUrl: string = "http://localhost:3001/allblogs";
  user: any;
  data;

  constructor( private http: Http ) { }

  signUp(data): Observable<ISignup> {
    return this.http.post(this.signUpUrl, data).map((res) => res.json()).catch(this.errorHandler);
  }

  login(user): Observable<Ilogin> {
    return this.http.post(this.loginUrl, user).map((res) => this.user = res.json()).catch(this.errorHandler);
  }

  getBlogs() {
    return this.http.get(this.blogsUrl).map((blogs) => blogs.json()).catch(this.errorHandler);
  }

  private errorHandler(err: Response ) {
    let msg = `error is: ${err.statusText}`
    return Observable.throw(msg);
  }

}
