import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit  {
  title: string;
  message: string;

  constructor() {
  }

  ngOnInit() {
  }

}
