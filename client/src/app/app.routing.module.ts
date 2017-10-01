import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from  "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogsComponent } from './blog/blog.component';
import { AuthGuard } from "./auth-guard.service";
import { BlogServiceResolve } from "./blog/blog.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "blogs", component: BlogsComponent, resolve: { blogs: BlogServiceResolve } },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent,
        LogoutComponent,
        BlogsComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
        AuthGuard
    ]
})

export class AppRoutingModule { }