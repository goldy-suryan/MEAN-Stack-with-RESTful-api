import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from "./auth.service";
import { BlogsServiceResolve } from "./blogs/blogs.service";
import { BlogResolve } from "./blogs/blog/blog.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    BlogsServiceResolve,
    BlogResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
