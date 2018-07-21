import { Component, OnInit } from '@angular/core';
import {Actor, Pelicula} from "../../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  actor;
  pelicula;
  mensaje;
  urlPelicula='http://localhost:1337/pelicula?id=';
  urlActor='http://localhost:1337/actor?id=';
  indice;
  indiceActor;

  constructor(private http: HttpClient, private servicio: UsuarioService) {
    this.indice=this.servicio.indicePeliculaSeleccionada;
    this.http.get(this.urlPelicula+this.indice).subscribe((data) => {
      this.servicio.cambiarMensaje(data);

    });
    this.indiceActor=this.servicio.indiceActorSeleccionado;
    this.http.get(this.urlActor+this.indiceActor).subscribe((data) => {
      this.servicio.cambiarMensaje2(data);
      // console.log('Datoss: ',data);
    });
  }

  ngOnInit() {
    this.servicio.mensajeActual.subscribe(mensaje => this.pelicula = mensaje);
    this.servicio.mensajeActual2.subscribe(mensaje => this.actor = mensaje);
  }

  setActor(actor){
    console.log(actor);

    // this.actorNombre= actor.nombre+' '+actor.apellido;
    // console.log('el dato es', dato.nombre);
  }



}
