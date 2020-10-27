import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { CargarService} from '../cargar-img/services/cargar.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-cargar-img',
  templateUrl: './cargar-img.component.html',
  styleUrls: ['./cargar-img.component.css']
})
export class CargarImgComponent implements OnInit {

  imageForm :FormGroup;
  image: any = "../../../assets/carga.png"

  file: any;

  constructor(private cargarService: CargarService, public router:Router) { }

  ngOnInit(): void {
    this.imageForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      fechaInicio: new FormControl(null, Validators.required),
      fechaFin: new FormControl(null, Validators.required)

    })
  }

  onFileChange(event){
    if(event.target.files && event.target.files.length > 0){
      const file = event.target.files[0];
      if(file.type.includes("image")){
        const reader = new FileReader()
        reader.readAsDataURL(file);

        reader.onload = function load(){
          this.image = reader.result;
        }.bind(this);
        this.file = file;

      }else{
        console.log("there was an error");
      }
    }
  }

  onSubmit(){
    const form = this.imageForm;
    if(form.valid){
      this.cargarService.cargarImage(form.value.nombre, this.file, form.value.descripcion, form.value.categoria, form.value.fechaInicio, form.value.fechaFin)
      .subscribe(data => {
        this.imageForm = new FormGroup({
          nombre: new FormControl(null),
          file: new FormControl(null),
          descripcion: new FormControl(null),
          categoria: new FormControl(null),
          fechaInicio: new FormControl(null),
          fechaFin: new FormControl(null)


        })
          this.image = '../../../assets/carga.png';

      })
    }

   }
}
