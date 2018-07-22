import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";
import {Pelicula} from "../../home/home/home.component";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  contadorActores=0;
  contadorPeliculas = 0;
  mensaje;
  mensajePeli:Pelicula;
  URLActores  = 'http://localhost:1337/actor';
  URLPelicula  = 'http://localhost:1337/pelicula';
  numPeliculas=8;
  numActores=6;

  constructor( private http: HttpClient,
               private data: UsuarioService,
               private servicio: UsuarioService) {

    this.http.get(this.URLActores).subscribe((data) => {
      this.data.cambiarMensaje(data);
      this.contadorActores=Object.entries(this.mensaje).length;

    });

    this.http.get(this.URLPelicula).subscribe((data2) => {
      this.data.cambiarMensajePelicula(data2);
      this.contadorPeliculas=Object.entries(this.mensajePeli).length;
    });
  }

  ngOnInit(): void {
    this.servicio.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
    this.contadorActores=Object.entries(this.mensaje).length;

    this.servicio.mensajePelicula.subscribe(mensajePelicula => this.mensajePeli = mensajePelicula);
    this.contadorPeliculas=Object.entries(this.mensajePeli).length;
  }

  aumentarNumPelis(){
    this.numPeliculas=this.numPeliculas+4;
  }

  aumentarNumActores(){
    this.numActores=this.numActores+4;
  }
}
