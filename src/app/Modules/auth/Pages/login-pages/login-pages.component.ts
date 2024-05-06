import { Component } from '@angular/core';
import { LoginUser } from '../../models/login.interface';
import { JwtAuth } from '../../models/jwtAuth.interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.css'
})
export class LoginPagesComponent {

  public loginUser:LoginUser = {
    email :'',
    password : ''
  };
  // public register!:RegisterUser;
  public jwtAuth?:JwtAuth;

  constructor(private authServices:AuthService, private router:Router){}


  public login(login:LoginUser)
  {
    this.authServices.login(login).subscribe( response => {
      localStorage.setItem('jwtToken', response.token );
      
      if(response.result){
        console.log('Token Valido');
        this.router.navigate(['pos/']);
      }

  });
  }


}
