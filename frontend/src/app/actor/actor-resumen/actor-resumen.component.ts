import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-resumen',
  templateUrl: './actor-resumen.component.html',
  styleUrls: ['./actor-resumen.component.css']
})
export class ActorResumenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  actor = [
    {
      nombre: "actor1",
      apellido: "actor1"
    }
  ];
}
