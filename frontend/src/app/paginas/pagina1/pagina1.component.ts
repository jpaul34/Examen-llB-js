import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  actor;
  peliculas;
  indice;
  urlActor: 'http://localhost:1337/actor?id=';
  urlPelicula: 'http://localhost:1337/pelicula?actorId=';

  constructor(private http: HttpClient, private servicio: UsuarioService) {
  }

  ngOnInit() {
    // this.indice=this.servicio.indiceSeleccionado;
    // this.http.get(this.urlActor+this.indice).subscribe((data) => {
    //   //this.servicio.cambiarMensajePelicula(data2);
    //   // console.log('pelicula: ',data2);
    //   this.actor=data;
    // });
    //
    // this.http.get(this.urlPelicula+this.indice).subscribe((data) => {
    //   //this.servicio.cambiarMensajePelicula(data2);
    //   // console.log('pelicula: ',data2);
    //   this.actor=data;
    // });
    // this.http.get(this.urlActor+this.indice).subscribe((data) => {
    //   this.actor.cambiarMensaje(data);
    //   console.log('Datoss: ',data);
    // });
  }

}
