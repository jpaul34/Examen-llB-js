import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  mensaje;

  constructor(private servicio:UsuarioService,
              private router:Router) { }

  ngOnInit() {
    this.mensaje=this.servicio.peliculaSelecionada;
  }

  cambiarRuta(){
    // this.servicio.aumentarContador()
    this.servicio.emitirCambioCantidad();
    // console.log(this.servicio.peliculaSelecionada);
    this.servicio.agregarPeliculaSeleccionada(this.servicio.peliculaSelecionada);
    this.router.navigate(['/']);
  }
}
