import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoginidGuard implements CanActivate {
  constructor(
    private svc: AppService,
    private router: Router
  ) {
  }
  goLogin(){
    this.router.navigate(['/login'])
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.svc.getCookie('token'))
    if(this.svc.getCookie('token') || this.svc.tokenUser){
      return true;
    }
    this.goLogin()
    return false
  }
}
