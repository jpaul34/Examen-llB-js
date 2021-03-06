import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tienda-carrito',
  templateUrl: './tienda-carrito.component.html',
  styleUrls: ['./tienda-carrito.component.css']
})
export class TiendaCarritoComponent implements OnInit {

  cantidad;

  constructor(private servicio:UsuarioService,
              private router:Router) {
    this.cantidad=this.servicio.contador;
  }

  ngOnInit() {
    this.servicio.emitircambioCantidad.subscribe(cantidad => this.cantidad = cantidad)
  }
  cambiarRuta(){
    this.router.navigate(['/carrito']);
  }

}
