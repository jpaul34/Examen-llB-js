import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
  }
  contador = 0;

  ngOnInit(): void {
    this.cookieService.set( 'nombre', 'Jonathan' );
    this.cookieService.set( 'apellido', 'Caiza' );
    this.cookieService.set( 'correo', 'jonathan.caiza@epn.edu.ec' );

    this.cookieValue = this.cookieService.get('user');
    console.log('valor cookie '+this.cookieValue);
  }

  aumentarCont(){
    this.contador= this.contador+1;
  }

}
