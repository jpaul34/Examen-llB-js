import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  mensaje;

  constructor(private servicio:UsuarioService) {  }

  ngOnInit() {
    this.mensaje=this.servicio.peliculasSeleccionadas;
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
    this.servicio.emitirEliminar();
    this.mensaje=this.servicio.peliculasSeleccionadas;
    this.servicio.eliminarPelicula(id);
  }

}
