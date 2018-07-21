import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private servicio:UsuarioService,
              private router:Router) { }

  ngOnInit() {
  }

  cambiarRuta(){
    // this.servicio.aumentarContador()
    this.servicio.emitirCambioCantidad();
    this.router.navigate(['/']);
  }
}
