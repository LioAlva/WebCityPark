import { Component } from '@angular/core';
import {LoginService} from './LoginService'
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  templateUrl: 'login.component.html',
  providers:[LoginService],

})
export class LoginComponent {


  private username:string=  "";
  private password:string= "";
  
  constructor(private router:Router,private loginService:LoginService) {
   
   }

  ValidateUser(){
    if(this.loginService.ValidateUser(this.username,this.password)){
      this.router.navigateByUrl('/dashboard');
    } else{
      this.router.navigateByUrl('pages/login');      
    }
  }

}

