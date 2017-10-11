import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { Iblogs } from "../interfaces";
import { Observable } from "rxjs/Observable";


@Injectable()
export class BlogsServiceResolve implements Resolve<Iblogs[]> {


  constructor(private service: AuthService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Iblogs[]> {
    return this.service.getAll();
  }

}
