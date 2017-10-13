import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from "./auth.service";
import { BlogsServiceResolve } from "./blogs/blogs.service";
import { BlogResolve } from "./blogs/blog/blog.service";
import { ToastrModule } from 'toastr-ng2';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3000})
  ],
  providers: [
    AuthService,
    BlogsServiceResolve,
    BlogResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
