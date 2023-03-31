import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLog:boolean = false;
  logOut(){
    this._AuthService.logOut()
  }
  constructor(private _AuthService:AuthService){
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue() !== null){
          this.isLog=true;
    
        }
        else{
          this.isLog=false;
        }
      }
    })
  }
}
