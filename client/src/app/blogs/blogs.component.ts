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

  constructor(private route: ActivatedRoute, private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((blogs) => {
      this.blogs = blogs.blogs;
    });
  }

  renavigate() {
    if (this.router.navigated === false) {
      this.router.navigateByUrl('/blogs')
    } else {
      this.router.navigateByUrl('/login').then(
        () => {
          this.router.navigateByUrl('/blogs');
        })
    }
  }

  addBlog(val) {
    this.service.newBlog(val).subscribe(
      (blog) => this.renavigate(),
      (err) => err
    );
    this.close();
  }

  deleteBlog(id) {
    this.service.deleteblog(id).subscribe(
      (blog) => this.renavigate(),
      (err) => {
        err
      })

  }

  close() {
    $(this.myModal.nativeElement).modal('hide');
  }

}
