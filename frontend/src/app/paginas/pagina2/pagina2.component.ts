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
  disponible = false;

  constructor(private servicio:UsuarioService,
              private router:Router) { }

  ngOnInit() {
    this.mensaje=this.servicio.peliculaSelecionada;
    this.mostrarContenido(this.mensaje);
  }

  cambiarRuta(){
    this.servicio.emitirCambioCantidad();
    this.servicio.agregarPeliculaSeleccionada(this.servicio.peliculaSelecionada);
    this.router.navigate(['/']);
  }

  mostrarContenido(mensaje){
    let id = mensaje.id;
    let existe=false;
    this.servicio.peliculasSeleccionadas.forEach(function(valor){
      if(valor.id===id){
        existe=true;
      }
    });
    this.disponible=existe;
  }

}
