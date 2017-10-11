import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  template: "<p>logout</p>"
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.removeItem("user"); // removing item from the storage so as to logout successfully
    this.router.navigate(["/login"]);
  }

}
