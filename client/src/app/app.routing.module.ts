import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from  "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
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
    { path: "logout", component: LogoutComponent },
    { path: "blogs", component: BlogsComponent, resolve: { blogs: BlogsServiceResolve } },
    { path: "blogs/:id", component: BlogComponent, resolve: { blog: BlogResolve } },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent,
        LogoutComponent,
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
        AuthGuard
    ]
})

export class AppRoutingModule { }