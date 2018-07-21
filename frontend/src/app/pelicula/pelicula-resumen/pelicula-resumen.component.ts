import {Component, Input, OnInit, Output} from '@angular/core';
import {Actor, Pelicula} from "../../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pelicula-resumen',
  templateUrl: './pelicula-resumen.component.html',
  styleUrls: ['./pelicula-resumen.component.css']
})

export class PeliculaResumenComponent implements OnInit {

  @Input() pelicula={
        id:0,
        peliculaId: 0,
        nombre: "-----",
        anioLanzamiento: "----",
        rating: 0,
        genero: "----",
        duracion: "----",
        idioma: "------",
        costo: "--",
        actorId: 0
      };

  constructor( private servicio: UsuarioService,
               private router:Router) { }

  ngOnInit() { }

  cambiarRuta(){
    this.servicio.setIndicePelicula(this.pelicula.id);
    this.router.navigate(['/pelicula']);
  }

}
