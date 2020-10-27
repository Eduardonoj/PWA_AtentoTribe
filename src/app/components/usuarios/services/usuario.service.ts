import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../usuario';
import { catchError, map} from "rxjs/operators";
import { Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private _notificarCambio= new EventEmitter<any>();

  //private urlEnPoint='http://localhost:3000';
  private urlEnPoint='http://ec2-13-59-150-21.us-east-2.compute.amazonaws.com:3000';
  constructor(private httpClient:HttpClient, private router: Router) { }

 /* create(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post(${this.urlEnPoint}/usuarios, usuario)
    .pipe(
      map((response:any)=>response as Usuario),
      catchError(e => {
        if(e.status===400){
          return throwError(e);
        }
        return throwError(e);
      })
      );
  }*/

  create(usuario:Usuario):Observable<Usuario>{
    return this.httpClient.post(`${this.urlEnPoint}/usuario`, usuario)
    .pipe(
      map((response:any)=>response as Usuario),
      catchError(e => {
        if(e.status===400){
          return throwError(e);
        }
        return throwError(e);
      })
      );
  }

  get notificarCambio():EventEmitter<any>{
    return this._notificarCambio;
  }

}
