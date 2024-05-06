import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { JwtAuth } from '../models/jwtAuth.interfaces';
import { RegisterUser } from '../models/register.interfeces';
import { LoginUser } from '../models/login.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UrlRegister:string = 'AuthManagement/Register';
  private UrlLogin:string = 'AuthManagement/Login';
  private UrlRecovery:string = 'AuthManagement/Recovery';

  // private httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // }

  constructor(private http: HttpClient) {}

  public login(user:LoginUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.BASEURL}${this.UrlLogin}`,user);
  }

  public register(user:RegisterUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.BASEURL}${this.UrlRegister}`,user);
  }
}
