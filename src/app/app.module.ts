import { BrowserModule } from '@angular/platform-browser';
import {NgParticlesModule} from 'ng-particles';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CargarImgComponent } from './components/cargar-img/cargar-img.component';
import { TokenInterceptor} from './components/login/interceptors/token.interceptor';
import { AuthInterceptor } from './components/login/interceptors/auth.interceptor';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { HistoriaComponent } from './components/historia/historia.component';
import { GestionesComponent } from './components/gestiones/gestiones.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    LoginComponent,
    BeneficiosComponent,
    CargarImgComponent,
    UsuariosComponent,
    NoticiasComponent,
    HistoriaComponent,
    GestionesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    NgParticlesModule,
    YouTubePlayerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
