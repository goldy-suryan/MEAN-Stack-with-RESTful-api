import { BadRequestError } from './../../Errors/badRequestError';
import { NotFoundError } from './../../Errors/notFoundError';
import { AppError } from './../../Errors/app.error';
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
      (err: AppError) => {
        if(err instanceof NotFoundError) 
          this.toastrService.error("Not Found", "Error");
        this.toastrService.error("An unexpected error occured", "Error");
      }
    )
  }

  goBack() {
    this.router.navigateByUrl('/blogs');
  }

  update(val) {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.update(id, val).subscribe(
      (blog) => this.toastrService.success('Blog updated successfully', 'Success!'),
      (err: AppError) => {
        if(err instanceof BadRequestError) {
          this.toastrService.error("Bad Request", "Error")
        this.toastrService.error("An unexpected error occured", "Error")
        }
      }
    );
    this.goBack();
  }
}
