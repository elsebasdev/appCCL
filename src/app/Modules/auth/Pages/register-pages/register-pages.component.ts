import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterUser } from '../../models/register.interfeces';
import { JwtAuth } from '../../models/jwtAuth.interfaces';

@Component({
  selector: 'app-register-pages',
  templateUrl: './register-pages.component.html',
  styleUrl: './register-pages.component.css'
})
export class RegisterPagesComponent {

  public registerUser:RegisterUser = {
    userName:'',
    password:'',
    email:''
  };
  public jwtAuth?:JwtAuth; 

  constructor(private authServices:AuthService){}


  public register(register:RegisterUser)
  {
    this.authServices.register(register).subscribe();
    console.log(this.registerUser);
      
  }

}
