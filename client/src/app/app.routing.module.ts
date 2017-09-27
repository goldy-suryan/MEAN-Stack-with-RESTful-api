import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from "./auth.service";
import { AuthGuard} from "./auth-guard.service";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full"},
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [ 
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ],
    providers: [
        AuthService,
        AuthGuard
    ]
})

export class AppRoutingModule {}