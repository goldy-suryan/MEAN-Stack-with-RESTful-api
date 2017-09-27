import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  template: "<p>logout</p>"
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // this.authService.logout();
    sessionStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

}
