import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Iblogs } from "../interfaces";
import { AuthService } from "../auth.service";
declare let $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  @ViewChild('myModal') myModal: ElementRef;
  blogs: any;
  errMsg: any;

  constructor(private route: ActivatedRoute, private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((blogs) => {
      this.blogs = blogs.blogs;
    });
  }

  addBlog(val) {
    this.service.newBlog(val).subscribe(
      (blog) => blog,
      (err) => err
    );
    this.close();
    if (this.router.navigated === false) {
      this.router.navigateByUrl('/blogs')
    } else {
      this.router.navigateByUrl('/login').then(
        () => {
          this.router.navigateByUrl('/blogs');
        }
      )
    }
  }

  deleteBlog(id) {
    this.service.deleteblog(id).subscribe((blog) => {
      blog
    }, (err) => {
      err
    })
    if (this.router.navigated === false) {
      this.router.navigateByUrl('/blogs')
    } else {
      this.router.navigateByUrl('/login').then(
        () => {
          this.router.navigateByUrl('/blogs');
        }
      )
    }
  }

  close() {
    $(this.myModal.nativeElement).modal('hide');
  }

}
