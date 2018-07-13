import { Component, OnInit } from '@angular/core';
import {Actor} from "../../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  // actores: Actor;
  actores=[
    {
      "peliculas": [],
      "createdAt": 1531502344673,
      "updatedAt": 1531502344673,
      "id": 2,
      "nombre": "Will",
      "apellido": "Smith",
      "fechaNacimiento": "01/01/1979",
      "numeroPeliculas": 6,
      "retirado": false
    }
  ];
  // urlActor = 'http://localhost:1337/actor';

  constructor() {
  }

  ngOnInit() {
    // this.getActores().subscribe(data => {
    //     this.actores = data;
    //     console.log('Actores ' + this.actores);
    //   },
    //   err => {
    //     console.log(err)
    //   }
    // );
  }

  // getActores(): Observable<Actor> {
  //   return this.http.get<Actor>(this.urlActor);
  // }
  //

}
