import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { AuthService } from "./auth.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent
    ],
    imports: [ 
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ],
    providers: [
        AuthService
    ]
})

export class AppRoutingModule {}