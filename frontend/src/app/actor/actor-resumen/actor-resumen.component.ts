import {Component, Input, OnInit, Output} from '@angular/core';
import {Actor} from "../../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-actor-resumen',
  templateUrl: './actor-resumen.component.html',
  styleUrls: ['./actor-resumen.component.css']
})
export class ActorResumenComponent implements OnInit {

  @Input() actor;
  // actores: Actor;
  actores=[
    {
      "peliculas": [],
      "id": 2,
      "nombre": "Will",
      "apellido": "Smith",
      "fechaNacimiento": "01/01/1979",
      "numeroPeliculas": 6,
      "retirado": false
    }
  ];

  //actor = this.actorAux;

  constructor(private data: UsuarioService) { }


  ngOnInit() {
    // this.data.mensajeActual.subscribe(mensaje => this.actor = mensaje);
    // console.log(this.actor);
  }

  // imprimirActor(){
  //   console.log(this.actorAux);
  // }

  // // urlActor = 'http://localhost:1337/actor';
  //
  // constructor() {
  // }
  //
  // ngOnInit() {
  //   // this.getActores().subscribe(data => {
  //   //     this.actores = data;
  //   //     console.log('nombre ' + this.actores.nombre);
  //   //   },
  //   //   err => {
  //   //     console.log(err)
  //   //   }
  //   // );
  // }
  //
  // // getActores(): Observable<Actor> {
  // //   return this.http.get<Actor>(this.urlActor);
  // // }
  //
  //
  //



}
