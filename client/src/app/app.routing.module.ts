import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthService } from "./auth.service";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "signup", component: SignupComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        SignupComponent
    ],
    imports: [ 
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ],
    providers: [
        AuthService
    ]
})

export class AppRoutingModule {}