import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tienda-buscador',
  templateUrl: './tienda-buscador.component.html',
  styleUrls: ['./tienda-buscador.component.css']
})
export class TiendaBuscadorComponent implements OnInit {

  nombre;
  actor;
  pelicula;
  id;
  urlActor='http://localhost:1337/actor?nombre=';
  urlPelicula='http://localhost:1337/pelicula?nombre=';
  nuevaUrlActor:string;
  nuevaUrlPelicula:string;

  constructor(private http: HttpClient,
              private servicio: UsuarioService,
              private _router:Router) {
  }
  ngOnInit() { }

  mostrarBusqueda() {
    this.nuevaUrlActor=this.urlActor+this.nombre;
    this.nuevaUrlPelicula=this.urlPelicula+this.nombre;

    let dato1:any=[];
    let dato2:any=[];

    this.http.get(this.nuevaUrlActor).subscribe((data) => {
      dato1 = data;
      if (Object.entries(dato1).length !== 0){
        console.log('Dato1: ',dato1);
        this.servicio.cambiarMensaje(dato1);
        this.servicio.cambiarMensajePelicula(dato1[0].peliculas);
      }
    });

    this.http.get( this.nuevaUrlPelicula).subscribe((data) => {
      dato2 = data;
      if (Object.entries(dato2).length !== 0){
        console.log('Dato2: ',dato2);
        // this.servicio.cambiarMensaje(dato2[0].actorId);
        this.servicio.cambiarMensaje(null);
        this.servicio.cambiarMensajePelicula(dato2);
      }
    });
  }

}
