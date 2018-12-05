import { RouterModule, Router } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { DepComponent } from "./dep/dep.component";
import { LoginComponent } from "./login/login.component";

// const routes: Routes = [
//   { path: "", redirectTo: "home", pathMatch: "full" },
//   { path: "home", component: HomeComponent },
//   { path: "dep", component: DepComponent },
// { path: "admin", component: AdminComponent },
// { path: "lec", component: LecComponent },
// ];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
