import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getUser().subscribe(
      (user) => this.username = user
    )
  }

}
