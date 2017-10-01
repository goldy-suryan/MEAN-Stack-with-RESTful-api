import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogServiceResolve } from "./blog.service";
import { Iblogs } from "../interfaces";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogsComponent implements OnInit, AfterViewInit {

  blogs: any;
  errMsg: any;

  constructor(private authService: BlogServiceResolve, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((blogs) => {
      this.blogs = blogs.blogs;
    });
  }

  ngAfterViewInit() {

  }


}
