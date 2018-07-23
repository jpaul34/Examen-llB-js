import {Component, Input, OnInit, Output} from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actor-resumen',
  templateUrl: './actor-resumen.component.html',
  styleUrls: ['./actor-resumen.component.css']
})

export class ActorResumenComponent implements OnInit {

  @Input() actor;

  constructor(private servicio: UsuarioService,
              private router:Router) { }

  ngOnInit() { }

  cambiarRuta(){
    this.servicio.setIndiceActor(this.actor.id);
    this.router.navigate(['/actor']);
  }

}
