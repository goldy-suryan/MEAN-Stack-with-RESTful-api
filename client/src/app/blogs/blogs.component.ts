import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BlogsServiceResolve } from "./blogs.service";
import { Iblogs } from "../interfaces";
import { NewBlogComponent } from "./new-blog/new-blog.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: any;
  errMsg: any;

  constructor(private authService: BlogsServiceResolve, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe((blogs) => {
      this.blogs = blogs.blogs;
    });
  }

  newPost() {

  }

}
