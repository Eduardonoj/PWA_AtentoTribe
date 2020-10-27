import { Component, OnInit } from '@angular/core';
import { AuthService} from './../login/services/auth.service';
import swal from 'sweetalert2';
import { Router} from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  constructor(public authService: AuthService, public router:Router) { }

  ngOnInit(): void {
  
  }

  logout(): void{
    const name = this.authService.usuario.codigoUsuario;
    this.authService.logout();
    swal.fire('Logout', `Hola ${name}, Has cerrado sesión con éxito!!!`, `success`);
    this.router.navigate(['/login']);
  }

}
