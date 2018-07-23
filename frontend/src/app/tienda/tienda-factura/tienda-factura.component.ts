import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-tienda-factura',
  templateUrl: './tienda-factura.component.html',
  styleUrls: ['./tienda-factura.component.css']
})
export class TiendaFacturaComponent implements OnInit {

  usuario;
  datosFactura;

  constructor(private cookieService: CookieService, private servicio: UsuarioService) { }

  ngOnInit() {
    this.usuario=this.cookieService.getAll();
    this.servicio.setDatosFactura(this.cookieService.getAll());
    this.datosFactura=this.servicio.datosFactura;
  }


}
