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
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user).subscribe((user) => {
      this.user = user;
      this.cdr.detectChanges();
      if(typeof Storage !== undefined && user.success) {
        sessionStorage.setItem("user", user.data._id)
        this.router.navigate(['/home']);
      }
    }, (err) => {
      this.error = err;
    });
  }
}
