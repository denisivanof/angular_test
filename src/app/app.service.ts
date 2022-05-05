import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  response: any;
  tokenUser: string = '';
  rememberMe: boolean = true;
  constructor(private http: HttpClient, private router: Router) {
  }

  submitLogin(login: string, password: string){
    this.http.post('https://reqres.in/api/login',{
      "email": login,
      "password": password
    })
      .subscribe((res)=>{
       this.response = res
          console.log(this.response)
        this.tokenUser = this.response.token
        if(this.rememberMe){
          this.setCookieHours('token', this.response.token)
        }
        this.router.navigate(['/user'])
      }
      )
  }
  logout(){
    this.rememberMe = false
    this.tokenUser = ''
    this.cookieClear('token')
    this.router.navigate(['login'])
  }
  cookieClear(name: string) {
    this.setCookie(name, "", {
      expires: -1
    });
  }
  setCookie(name: string, value:string, options: any){
    options = {
      path: '/',
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }
  setCookieHours(name: string, value:string ) {
    let dateCookie = new Date();
    dateCookie.setHours(dateCookie.getHours()+8);
    this.setCookie(name, value, {expires: dateCookie.toUTCString()})
  }
  getCookie(name:string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
}
