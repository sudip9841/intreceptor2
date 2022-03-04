import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }
  removeToken()
  {
    localStorage.removeItem('token')
  }

  checkToken()
  {
    if(localStorage.getItem('token'))
    {
      return true
    }
    else{
      return false
    }
  }
}
