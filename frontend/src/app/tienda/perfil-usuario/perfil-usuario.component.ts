import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  nombreUsuario;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    this.nombreUsuario=this.cookieService.get('nombre') + ' ' + this.cookieService.get('apellido');
  }

}
