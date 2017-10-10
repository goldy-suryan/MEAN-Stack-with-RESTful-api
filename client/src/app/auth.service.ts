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
  blogsUrl: string = "http://localhost:3001/allblogs/";

  constructor( private http: Http ) { }

  signUp(data): Observable<any> {
    return this.http.post(this.signUpUrl, data).map((res) => res.json()).catch(this.errorHandler);
  }

  login(user): Observable<any> {
    return this.http.post(this.loginUrl, user).map((res) => res.json()).catch(this.errorHandler);
  }

  getBlogs(): Observable<Iblogs[]> {
    return this.http.get(this.blogsUrl).map((blogs) => blogs.json()).catch(this.errorHandler);
  }

  getBlog(id): Observable<Iblogs> {
    return this.http.get(this.blogsUrl + id).map((blog) => blog.json()).catch(this.errorHandler);
  }

  updateBlog(id, val): Observable<Iblogs> {
    return this.http.put(this.blogsUrl+ id, val).map((blog) => blog.json()).catch(this.errorHandler);
  }

  newBlog(blog): Observable<Iblogs> {
    return this.http.post(this.blogsUrl, blog).map((blog) => blog.json()).catch(this.errorHandler);
  }

  deleteblog(id): Observable<Iblogs> {
    return this.http.delete(this.blogsUrl + id).map((blog)=> blog.json()).catch(this.errorHandler);
  }

  private errorHandler(err: Response ) {
    return Observable.throw(err);
  }

}
