import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: string = '';
  password: string = '';
  constructor(public svc: AppService, private router: Router) {}

  ngOnInit() {
    console.log()
    if(this.svc.getCookie('token') || this.svc.tokenUser){
      this.router.navigate(['/user'])
    }
  }
  OnLogin(){
    this.svc.submitLogin(this.login, this.password)
  }
}
