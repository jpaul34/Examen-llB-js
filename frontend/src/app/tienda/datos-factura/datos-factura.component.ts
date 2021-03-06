import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-datos-factura',
  templateUrl: './datos-factura.component.html',
  styleUrls: ['./datos-factura.component.css']
})
export class DatosFacturaComponent implements OnInit {

  datosFactura;

  constructor(private cookieService: CookieService, private servicio: UsuarioService) { }

  ngOnInit() {
    this.datosFactura=this.servicio.datosFactura;
  }

  guardar(){
    this.servicio.setDatosFactura(this.datosFactura);
  }
}
