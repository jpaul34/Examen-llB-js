import {Component, Input, OnInit} from '@angular/core';
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

  @Input() pelicula;
  actor;

  constructor(private http: HttpClient, private servicio: UsuarioService) {

  }

  ngOnInit() {
  }

}
