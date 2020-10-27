import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarService {

 // urlEndPoint = 'http://localhost:3000/beneficio'
  urlEndPoint = 'http://ec2-13-59-150-21.us-east-2.compute.amazonaws.com:3000/beneficio'

  constructor(private httpClient: HttpClient) { }



cargarImage(nombre: string, file: File, descripcion: string, categoria: string, 
  fechaInicio: string, fechaFin: string) : Observable<object>{
  const form = new FormData()
  form.append('nombre', nombre);
  form.append('file', file, 'form-data');
  form.append('descripcion', descripcion);
  form.append('categoria', categoria);
  form.append('fechaInicio', fechaInicio);
  form.append('fechaFin', fechaFin);
 
  
  return this.httpClient.post<object>(`${this.urlEndPoint}/cargarImg`, form);

  }

}
