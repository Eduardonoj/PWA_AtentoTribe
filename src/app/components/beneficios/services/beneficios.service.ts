import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  //urlEndPoint = 'http://localhost:3000/beneficio'
  urlEndPoint = 'http://ec2-13-59-150-21.us-east-2.compute.amazonaws.com:3000/beneficio'

  constructor(private httpClient: HttpClient) { }

  getImages(){
    return this.httpClient.get(`${this.urlEndPoint}/mostrar`);
  }

}
