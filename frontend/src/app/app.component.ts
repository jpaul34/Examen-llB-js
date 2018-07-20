import {Component, Input, OnInit} from '@angular/core';
import {Pelicula} from "./home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {CookieService} from "ngx-cookie-service";
import {UsuarioService} from "./servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cookieValue = 'UNKNOWN';

  constructor( private http: HttpClient,
               private cookieService: CookieService,
               private servicio: UsuarioService,
               private router:Router) {
    this.servicio.guardarUrl('http://localhost:1337/actor');
  }
  URLActores  = 'http://localhost:1337/actor';
  mensaje;

  contador = 0;
  visible=true;

  ngOnInit(): void {
    this.cookieService.set( 'nombre', 'Jonathan' );
    this.cookieService.set( 'apellido', 'Caiza' );
    this.cookieService.set( 'correo', 'jonathan.caiza@epn.edu.ec' );


    this.cookieValue = this.cookieService.get('user');
    console.log('valor cookie '+this.cookieValue);

      this.escucharCambiosActor();
//    }
  }

  aumentarCont(){
    this.contador= this.contador+1;
  }

  seleccionar(indice){
    const url = ['/pelicula'];
    this.router.navigate(url);
    this.servicio.setIndice(indice);
    return indice;
  }

  escucharCambiosActor() {
    this.servicio.emitircambioPelicula.subscribe((actor) => {
      this.contador = actor;
    });
  }



}
