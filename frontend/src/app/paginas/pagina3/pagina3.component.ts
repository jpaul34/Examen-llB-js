import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  mensaje
  // total=0;
  cantidad;

  constructor(private servicio:UsuarioService) {
    // this.cantidad=this.servicio.contador;
  }

  ngOnInit() {
    this.mensaje=this.servicio.peliculasSeleccionadas;
    console.log('el mensaje es: ',this.mensaje);
    // this.servicio.emitircambioPeliculas.subscribe(mensaje=>this.mensaje=mensaje);
    // this.servicio.emitircambioCantidad.subscribe(cantidad => this.cantidad = cantidad)
  }

  calcularTotal(){
    let total = 0;
    if (Object.entries(this.mensaje).length !== 0){
      this.mensaje.forEach((valor) => {
          total = total + Number(valor.costo);
        }
      );
    }
    return total;
  }

  eliminarPelicula(id){
    console.log('ID: ', id);
    console.log(this.mensaje);
    this.servicio.emitirEliminar();
    // this.servicio.emitirCambioPeliculas();
    this.mensaje=this.servicio.peliculasSeleccionadas;
    this.servicio.eliminarPelicula(id);
  }

}
