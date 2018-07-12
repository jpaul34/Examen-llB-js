import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  actor = [
    {
      nombre: "actor1",
      apellido: "actor1",
      fechaNacimiento: "01/01/2018",
      numeroPeliculas: 5,
      retirado: true
    }
  ];
}
