import { ToastrService } from 'toastr-ng2';
import { BadRequestError } from './../Errors/badRequestError';
import { AppError } from './../Errors/app.error';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  error: any;
  constructor(private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user).subscribe(
      (user) => {
        this.user = user;
        this.cdr.detectChanges();  // detecting for changes in the component

        if (typeof Storage !== undefined && user.success) {
          let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          sessionStorage.setItem("user", user.token); // storing the user ID to browser storage for simple login
          this.router.navigate([returnUrl || '/home']);
          return true;
        }
      },
      (err: AppError) => {
        if (err instanceof BadRequestError)
          this.toastrService.error("Bad Request", "Error");
        this.toastrService.error("An unexpected error occured", "Error")
      });
  }
}
