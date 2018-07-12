import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-resumen',
  templateUrl: './pelicula-resumen.component.html',
  styleUrls: ['./pelicula-resumen.component.css']
})
export class PeliculaResumenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pelicula = [
    {
      nombre: "pelicula1",
      anio: "2018"
    }
  ];

}
