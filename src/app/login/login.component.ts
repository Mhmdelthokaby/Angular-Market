import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import{FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){
    if(localStorage.getItem('userToken')!==null)
    {
      _Router.navigate(['/home'])
    }
  }

  loading:boolean=false
  apiError:string= "";
  loginForm:FormGroup = new FormGroup({
    
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    
  })

  handleLogin(loginForm:FormGroup){
    this.loading=true;
    
    if(loginForm.valid){
      this._AuthService.login(loginForm.value).subscribe({
        
        next:(Response)=>{
          
          if(Response.message ==='success'){
            this.loading=false
            localStorage.setItem('userToken',Response.token)
            this._AuthService.decodeUserData()
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.loading=false
          
          console.log(err);
          
        }
        
        
      })
    }
    
    
  }

}
