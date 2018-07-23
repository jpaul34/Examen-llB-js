import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user;

  constructor() { }

  ngOnInit() { }

}

export interface Actor{
  nombre: string,
  apellido: string
  fechaNacimiento: string,
  numeroPeliculas: number,
  retirado: boolean,
  peliculas: Pelicula[];
}

export interface Pelicula {
  peliculaId: number,
  nombre: string,
  anioLanzamiento: number,
  fechaNacimiento: string,
  rating: number,
  genero: string,
  duracion: string,
  idioma: string,
  costo: number,
  actorId: number;
}
