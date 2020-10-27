import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Usuario;
  private _token: string;

  constructor(private httpClient: HttpClient) { }

  public get token(): string{
    if(this._token != null){
      return this._token;
    }else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = sessionStorage.getItem('token');
      return this._token;
      
    }
    return null;
  }

    public get usuario(): Usuario {
    if (this._usuario != null){
      return this._usuario;
    }else if (this._usuario == null && sessionStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario'));
      return this._usuario;
    }
    return new Usuario();
  }

  login(usuario: Usuario): Observable<any> {

    //const urlEndPoint = 'http://localhost:3000/auth/login';  
    const urlEndPoint = 'http://ec2-13-59-150-21.us-east-2.compute.amazonaws.com:3000/auth/login';  
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json '

    });
    return this.httpClient.post(urlEndPoint, usuario,{headers: httpHeaders});
    
  }

logout(): void{
  this._token = null;
  this._usuario = null;
  sessionStorage.clear();
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('usuario');
}



  saveUser(token: string){
    this._usuario = new Usuario();
    const payload = this.GetDataToken(token);
    this._usuario.codigoUsuario = payload.unique_name;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }


  saveToken(token: string){
    this._token = token;
    sessionStorage.setItem('token', token);
  }

GetDataToken(token: string): any{
  if(token != null){
    return JSON.parse(atob(token.split('.')[1]));
  }
    return null;
}

isAuthenticated(): boolean{
  const payload = this.GetDataToken(this.token);
  if (payload != null ){
    return true;
  }
  return false;
}

}
//payload.unique_name && payload.unique_name.length >0