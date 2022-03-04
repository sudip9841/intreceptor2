import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  url = environment.baseUrl;
  headers = new HttpHeaders();
  constructor(private http:HttpClient,private router:Router) {
    
   }

   userLogin(data:any):Observable<any>{
     const header = {
       'Content-Type':'application/json',
       'Access-Control-Allow-Headers':'Content-Type',
       'token' :'angular token'
     }
     const requestOptions = {
       headers : new HttpHeaders(header)
     }
     return this.http.post(this.url+'login/',data);
   }

  registerUser(data:any):Observable<any>{
    return this.http.post(this.url+'register/',data);
  }
}
