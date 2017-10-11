import { SharedService } from './../shared.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  error: any;
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef, private sharedService: SharedService) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user).subscribe((user) => {
      this.user = user;
      this.cdr.detectChanges();  // detecting for changes in the component
      if(typeof Storage !== undefined && user.success) {
        sessionStorage.setItem("user", user.data._id); // storing the user ID to browser storage for simple login
        this.sharedService.send(this.user); // sending the user data along, so as to used by other components too
        this.router.navigate(['/home']);
      }
    }, (err) => {
      this.error = err;
    });
  }
}
