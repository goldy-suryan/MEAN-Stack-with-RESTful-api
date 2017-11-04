import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  subjects = [ "mongoDB", "Express", "Angular 2 (4)", "Nodejs", "lorem ipsum", "lorem ipsum" ];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.CurrentUser.user.username;
  }

}
