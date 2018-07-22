import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  mensaje;

  constructor(private servicio:UsuarioService) { }

  ngOnInit() {
    this.mensaje=this.servicio.peliculasSeleccionadas;
  }

  imprimir(){
    console.log('peliculas seleccionadas ',this.servicio.peliculasSeleccionadas);
  }

}
