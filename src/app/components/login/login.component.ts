import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router} from '@angular/router';
import { Usuario} from './services/usuario';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  
 

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  
   }

  ngOnInit(): void {
  }



  login(): void{
    this.authService.login(this.usuario).subscribe(
      response => {
        this.authService.saveToken(response.token);
        this.authService.saveUser(response.token);
        swal.fire('Login', 'Bienvenido', 'success');
        this.router.navigate(['/inicio']);

      }, error => {
        console.log(error);
       
      }
      
    );
    swal.fire('Usuario o clave incorrecta');
}

registro(): void{
  
      this.router.navigate(['/usuarios']);

   
}




}


