import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  loggingSession() {
    if(typeof Storage !== undefined) {
      if(sessionStorage.getItem("user")) {
        return true;
      } 
      return false;
    }
  }

}
