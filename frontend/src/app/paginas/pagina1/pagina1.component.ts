import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  numPeliculas=8;
  indice;
  mensajePeli;
  urlPelicula= 'http://localhost:1337/pelicula?actorId=';

  constructor(private http: HttpClient, private servicio: UsuarioService) {
    this.indice=this.servicio.indiceActorSeleccionado;
    this.http.get(this.urlPelicula+this.indice).subscribe((data) => {
      this.servicio.cambiarMensajePelicula(data);
    });
  }

  ngOnInit() {
    this.servicio.mensajePelicula.subscribe(mensajePelicula => this.mensajePeli = mensajePelicula);
  }

  aumentarNumPelis(){
    this.numPeliculas=this.numPeliculas+4;
  }
}
