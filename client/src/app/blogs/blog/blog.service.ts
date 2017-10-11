import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { AuthService } from "../../auth.service";
import { Iblogs } from "../../interfaces";

@Injectable()
export class BlogResolve implements Resolve<any>{

  constructor( private service: AuthService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.service.getOne(id);
  }

}
