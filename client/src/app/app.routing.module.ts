import { BlogsGuard } from './blogs/blogs-auth-guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from  "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthGuard } from "./auth-guard.service";
import { BlogsServiceResolve } from "./blogs/blogs.service";
import { BlogComponent } from './blogs/blog/blog.component';
import { BlogResolve } from "./blogs/blog/blog.service";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "blogs", component: BlogsComponent, resolve: { blogs: BlogsServiceResolve }, canActivate: [AuthGuard, BlogsGuard] },
    { path: "blogs/:id/:username", component: BlogComponent, resolve: { blog: BlogResolve }, canActivate: [AuthGuard, BlogsGuard] },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent,
        BlogsComponent,
        BlogComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard,
        BlogsGuard
    ]
})

export class AppRoutingModule { }