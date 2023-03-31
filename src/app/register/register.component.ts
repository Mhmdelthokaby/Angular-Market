import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import{FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){

  }

  loading:boolean=false
  apiError:string= "";
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })

  handleRegister(registerForm:FormGroup){
    this.loading=true;
    
    if(registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe({
        
        next:(Response)=>{
          
          if(Response.message ==='success'){
            this.loading=false
            this._Router.navigate(['/login'])
          }
        },
        error:(err)=>{
          this.loading=false
          this.apiError=err.error.errors.msg
        }
        
        
      })
    }
    
    
  }

}
