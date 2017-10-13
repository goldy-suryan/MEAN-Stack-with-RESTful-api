import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelper, tokenNotExpired } from "angular2-jwt";

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    $('#myNavbar a').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
  }

  isLoggedIn() {
    // return tokenNotExpired(); // exactly what we did below, provided by angular

    let jwt = new JwtHelper();

    let token = sessionStorage.getItem("user");
    if (!token) return false;

    let date = jwt.getTokenExpirationDate(token);
    let isExpired = jwt.isTokenExpired(token);

    return !isExpired;
  }

}
