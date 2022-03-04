import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  get():Observable<any>
  {
    const header = {
      'Content-Type':'application/json',
      'Access-Control-Allow-Headers':'Content-Type',
      'token' :'angular token'
    }
    const requestOptions = {
      headers : new HttpHeaders(header)
    }
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
