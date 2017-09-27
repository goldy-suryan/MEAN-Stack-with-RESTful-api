import { Component, OnInit, OnDestroy } from '@angular/core';
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
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user).subscribe((user) => {
      if(typeof Storage !== undefined) {
        sessionStorage.setItem("user", user.data.id)
      }
      this.user = user.username;
      this.router.navigate(['/home']);
    }, (err) => {
      this.error = err;
    });
  }
}
