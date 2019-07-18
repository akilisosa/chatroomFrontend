import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverUrl = 'http://localhost:8055/';
  constructor(private http:HttpClient) { }

  public login(email: string, password: string) {
    const params = new HttpParams()
    .set('username', email)
    .set('password', password);
    return this.http.post(this.serverUrl + 'User/login.do', params );
  }

  public register(email: string, password:string, ){
    const params = newHttpParams()
    .set('email', email)
    .set('password', password)
    .set('adminLvl', 1)
    .set('status',1);
    return this.http.post(this.serverUrl+'User', params);
  }
}
