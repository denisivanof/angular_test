import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import {IsLoginidGuard} from "./is-loginid.guard";
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes=[
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [IsLoginidGuard]
  },
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [IsLoginidGuard, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
