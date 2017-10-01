import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { Iblogs } from "../interfaces";

@Injectable()
export class BlogServiceResolve implements Resolve<Iblogs[]> {


  constructor(private service: AuthService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getBlogs();
  }




}
