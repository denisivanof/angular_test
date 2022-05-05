import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  constructor(private svc: AppService) {}
  OnLogin(){
    this.svc.submitLogin(this.login, this.password)
  }
}
