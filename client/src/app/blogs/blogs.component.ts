import { BadRequestError } from './../Errors/badRequestError';
import { NotFoundError } from './../Errors/notFoundError';
import { AppError } from './../Errors/app.error';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Iblogs } from "../interfaces";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs/Subscription";
import { SharedService } from '../shared.service';
import { ToastrService } from 'toastr-ng2';

declare let $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {
  blogForm: FormGroup;
  @ViewChild('myModal') myModal: ElementRef;
  blogs: any;
  user;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private service: AuthService, private sharedService: SharedService, private router: Router, private fb: FormBuilder, private cdr: ChangeDetectorRef, private toastrService: ToastrService) { }

  ngOnInit() {
    // Resolver to fetch the data
    this.route.data.subscribe((blogs) => {
      this.blogs = blogs.blogs;
    }, (err: AppError) => {
      if(err instanceof NotFoundError) {
        this.toastrService.error("Not Found", "Error")
      }
      this.toastrService.error(err.originalError, "Error");
    });

    // creating the instance of formGroup with formBuilder
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      createdBy: this.user
    })

    // getting the user from shared service
    this.subscription = this.sharedService.getUser().subscribe(
      (user) => {
        if (user === null) return;
        this.user = user.data.username;
      }
    )
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

  addBlog() {
    let title = this.blogForm.get('title').value;
    let description = this.blogForm.get('description').value;
    let createdBy = this.blogForm.get('createdBy').value;
    let blog = {
      title: title,
      description: description,
      createdBy: createdBy
    }

    this.service.create(blog).subscribe(
      (blog) => { 
        this.renavigate();
        this.toastrService.success('Blog added successfully', 'Success!');
      },
      (err: AppError) => {
        if(err instanceof BadRequestError) {
          this.toastrService.error("Bad Request", "Error");
        }
        else  this.toastrService.error("An unexpected error occured", "Error");
      }
    );
    this.close();
  }

  deleteBlog(id) {
    this.service.delete(id).subscribe(
      (blog) => {
        this.renavigate();
        this.toastrService.success('Blog deleted successfully', 'Success!');
      },
      (err) => {
        if(err instanceof BadRequestError) {
          this.toastrService.error("Bad Request", "Error");
        }
        else  this.toastrService.error("An unexpected error occured", "Error");
      }
    )
  }

  close() {
    $(this.myModal.nativeElement).modal('hide');
  }

}
