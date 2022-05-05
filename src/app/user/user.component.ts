import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  openMenu: boolean = false
  constructor( private  svc: AppService) { }

  ngOnInit(): void {
  }
  setOpen(): void{
    this.openMenu ? this.openMenu = false : this.openMenu = true
  }
  logOut(): void{
    this.svc.logout()
  }
  onBlur(){
    console.log('fgfdg')
  }
}
