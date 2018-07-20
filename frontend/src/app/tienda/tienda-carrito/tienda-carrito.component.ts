import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-tienda-carrito',
  templateUrl: './tienda-carrito.component.html',
  styleUrls: ['./tienda-carrito.component.css']
})
export class TiendaCarritoComponent implements OnInit {

  cantidad=this.servicio.contador;

  constructor(private servicio:UsuarioService,) { }

  ngOnInit() {
    this.cantidad=this.servicio.contador;
  }
  // cantidad=0;

}
