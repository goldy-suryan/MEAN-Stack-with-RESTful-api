import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Iblogs } from "../../interfaces";
import { AuthService } from "../../auth.service";
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: Iblogs;
  err: any;
  constructor( private route: ActivatedRoute, private router: Router, private service: AuthService, private toastrService: ToastrService ) { }

  ngOnInit() {
    //getting a single blog based on the id
    this.route.data.subscribe(
      (blog) => this.blog = blog.blog,
      (err) => this.err = err
    )
  }

  goBack() {
    this.router.navigateByUrl('/blogs');
  }

  update(val) {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.updateBlog(id, val).subscribe(
      (blog) => this.toastrService.success('Blog updated successfully', 'Success!'),
      (err) => this.err = err
    );
    this.goBack();
  }
}
