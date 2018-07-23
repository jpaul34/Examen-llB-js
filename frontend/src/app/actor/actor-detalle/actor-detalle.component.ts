import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  actor;
  retirado='No';
  urlActor='http://localhost:1337/actor?id=';
  indice;

  constructor(private http: HttpClient, private servicio: UsuarioService) {
    this.indice=this.servicio.indiceActorSeleccionado;
    this.http.get(this.urlActor+this.indice).subscribe((data) => {
      this.servicio.cambiarMensaje(data);
    });
  }

  ngOnInit() {
    this.servicio.mensajeActual.subscribe(mensaje => this.actor = mensaje);
  }

  estaretirado(retirado){
    if(retirado){
      this.retirado='Si'
    }
  }
}
