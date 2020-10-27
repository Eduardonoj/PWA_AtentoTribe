import { RouterModule, Routes} from '@angular/router'; 
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component'; 
import {CargarImgComponent} from './components/cargar-img/cargar-img.component';
import { BeneficiosComponent} from './components/beneficios/beneficios.component';
import { UsuariosComponent} from './components/usuarios/usuarios.component';
import { NoticiasComponent} from './components/noticias/noticias.component';
import { HistoriaComponent} from './components/historia/historia.component';
import {GestionesComponent} from './components/gestiones/gestiones.component';

import { AuthGuard} from './components/login/guards/auth.guard';

const APP_ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'cargarImg', component: CargarImgComponent, canActivate: [AuthGuard]},
    {path: 'noticias', component: NoticiasComponent, canActivate: [AuthGuard]},
    {path: 'beneficios', component: BeneficiosComponent, canActivate: [AuthGuard]},
    {path: 'historia', component: HistoriaComponent, canActivate: [AuthGuard]},
    {path: 'gestiones', component: GestionesComponent, canActivate: [AuthGuard]},
    {path: 'usuarios', component: UsuariosComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
   
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});