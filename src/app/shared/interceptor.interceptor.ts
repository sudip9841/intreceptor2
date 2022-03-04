import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable} from 'rxjs';
import {finalize} from 'rxjs/operators'

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private spin$:NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    this.spin$.show()
    request = request.clone({
      setHeaders:{
        token:'I am token',
        lang:'eng'
      }
    })

    return next.handle(request).pipe(finalize(()=>{
      this.spin$.hide()
    }));
  }
}
