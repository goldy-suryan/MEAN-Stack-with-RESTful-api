import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  user;
  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    let username = this.form.get('username').value;
    let email = this.form.get('email').value;
    let password = this.form.get('password').value;
    let data = {
      username: username,
      email: email,
      password: password
    }

    this.authService.signUp(data).subscribe((user) => {
      this.user = user;
      if (!user.success) {
        this.cdr.detectChanges();
        return false;
      }
      this.router.navigateByUrl('/login')
    })
  }


}
