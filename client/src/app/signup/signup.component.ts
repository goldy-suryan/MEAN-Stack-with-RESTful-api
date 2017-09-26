import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any;
  error: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(val) {
    this.authService.signUp(val).subscribe((user) => {
      this.user = user;
      this.router.navigate(['/home']);
    }, (err) => {
      this.error = err;
    });
  }

}
