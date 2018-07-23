import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pago-orden',
  templateUrl: './pago-orden.component.html',
  styleUrls: ['./pago-orden.component.css']
})
export class PagoOrdenComponent implements OnInit {

  nombreCC;
  numeroCC;
  mesCC;
  anioCC;
  csvCC;

  constructor(private servicio: UsuarioService,
              private router:Router) { }

  ngOnInit() {
  }

  pagar(){
    this.servicio.vaciarParametros();
      this.router.navigate(['/']);
  }


}
