import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    username: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
  }

}
