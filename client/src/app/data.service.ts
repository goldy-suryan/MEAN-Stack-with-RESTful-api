import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable";
import { ISignup, Ilogin, Iblogs } from "./interfaces";

@Injectable()
export class DataService {

  constructor( private url: string, public http: Http ) { }

  getAll(): Observable<any[]> {
    return this.http.get(this.url).map((res) => res.json()).catch(this.errorHandler);
  }

  getOne(id): Observable<any> {
    return this.http.get(this.url + id).map((res) => res.json()).catch(this.errorHandler);
  }

  update(id, resource): Observable<any> {
    return this.http.put(this.url+ id, resource).map((res) => res.json()).catch(this.errorHandler);
  }

  create(blog): Observable<Iblogs> {
    return this.http.post(this.url, blog).map((res) => res.json()).catch(this.errorHandler);
  }

  delete(id): Observable<Iblogs> {
    return this.http.delete(this.url + id).map((res)=> res.json()).catch(this.errorHandler);
  }

  private errorHandler(err: Response ) {
    return Observable.throw(err);
  }

}
