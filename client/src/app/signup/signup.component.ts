import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit(val) {
    this.authService.signUp(val).subscribe((user) => {
      console.log(user);
    })
  }

}
