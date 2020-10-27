import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UsuarioService} from './services/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from '../usuarios/usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any[];

  
  constructor(
              public router:Router,
              public usuarioService: UsuarioService) { }

              public usuario:Usuario ={
                nombre:'',
              codigoUsuario:'',
              clave:'',
              rol:''
              }

  ngOnInit() {

  }

  create(){
    const usuario= new Usuario();
    usuario.nombre=this.usuario.nombre;
    usuario.codigoUsuario=this.usuario.codigoUsuario;
    usuario.clave=this.usuario.clave;
    usuario.rol=this.usuario.rol;

    this.usuarioService.create(usuario).subscribe(
      usuario=>{
        Swal.fire('Nuevo Usuario',`El usuario ${this.usuario.nombre} ha sido creado con exito!!!`, 'success');
        usuario.nombre=this.usuario.nombre;
        usuario.codigoUsuario= this.usuario.codigoUsuario;
        usuario.clave= this.usuario.clave;
        usuario.rol= this.usuario.rol;
        this.router.navigateByUrl('/inicio');
      },
      error=>{
        Swal.fire('Hubo un error al insertar usuario');
      }
    );
  }



}
