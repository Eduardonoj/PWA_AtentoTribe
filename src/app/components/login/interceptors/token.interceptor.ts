import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = this.authService.token;
        if(token != null){
            const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${token}`)});

            return next.handle(authReq);
        }
        return next.handle(req);
    }
    
}
