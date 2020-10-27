import { Component, OnInit } from '@angular/core';
import { BeneficiosService} from '../beneficios/services/beneficios.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  name: string;
  description: string;
  url: string;
  myImages;
  constructor(private beneficiosService: BeneficiosService, public router:Router ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.beneficiosService.getImages().subscribe(data =>{
      console.log("Los datos de las imagenes: ", data)
      this.myImages = data;
    })
  }

  imageClick(data){
    this.name = data.nombre;
    this.description = data.descripcion;
    this.url = data.url;
    console.log(this.name +' '+this.description+ ' '+ this.url);
    console.log(data);
  }
  

  

}
