import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  response: any;
  constructor(private http: HttpClient) {
  }
  submitLogin(login: string, password: string){
    this.http.post('https://reqres.in/api/login',{
      "email": login,
      "password": password
    })
      .subscribe((res)=>{
       this.response = res
          console.log(this.response)
      }
      )
  }
}
