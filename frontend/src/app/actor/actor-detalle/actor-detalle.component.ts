import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {Actor} from "../../home/home/home.component";

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  actor;
  retirado='No';
  // actor=
  //   {
  //     nombre:'---',
  //     apellido: "---",
  //     fechaNacimiento: "00/00/0000",
  //     numeroPeliculas: 0,
  //     retirado: false
  //   }
  // ;
  urlActor='http://localhost:1337/actor?id=';
  indice;


  constructor(private http: HttpClient, private servicio: UsuarioService) {
    this.indice=this.servicio.indiceSeleccionado;
    this.http.get(this.urlActor+this.indice).subscribe((data) => {
      this.servicio.cambiarMensaje(data);
      // console.log('Datoss: ',data);
    });
  }

  ngOnInit() {
    this.servicio.mensajeActual.subscribe(mensaje => this.actor = mensaje);
    // this.actor=this.servicio.mensajeActual;
  }

  estaretirado(retirado){
    if(retirado){
      this.retirado='Si'
    }
  }

}
