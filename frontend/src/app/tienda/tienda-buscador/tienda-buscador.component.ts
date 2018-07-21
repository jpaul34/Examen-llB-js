import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";
import {Actor, Pelicula} from "../../home/home/home.component";

@Component({
  selector: 'app-tienda-buscador',
  templateUrl: './tienda-buscador.component.html',
  styleUrls: ['./tienda-buscador.component.css']
})
export class TiendaBuscadorComponent implements OnInit {

  mostrar=false;
  marca;
  nombreActor;
  actor;
  urlActor='http://localhost:1337/actor?nombre=';
  urlPelicula='http://localhost:1337/pelicula?nombre=';
  seleccionPeli;
  nuevaUrl:string;

  constructor(private http: HttpClient,
              private servicio: UsuarioService,
              private _router:Router) {
  }
  ngOnInit() {
    this.escucharCambiosAuto();
    this.escucharCambioBusqueda();
  }

  escucharCambiosAuto() {
    this.servicio.emitircambioPelicula.subscribe((autos) => {this.seleccionPeli= autos;})
  }

  escucharCambioBusqueda() {
    this.servicio.emitircambioBusqueda.subscribe((autos) => {this.nuevaUrl= autos;})
  }


  buscar() {
    this.nuevaUrl=this.urlActor+this.nombreActor;
    return this.http.get<Actor>(this.nuevaUrl);
  }
  id;

  @Output() ngModelChange = new EventEmitter();

  mostrarBusqueda(actor)
  {
    this._router.navigate(['/principal'])
    this.ngModelChange.emit(actor);
    this.nombreActor=actor;
    this.buscar().subscribe((data: Actor) => console.log({data}));
    // this.nuevaUrl=this.urlActor+''+this.nombreActor;
    // this.servicio.guardarUrl(this.nuevaUrl);
    // this.mostrar=this.servicio.mostrar;
    this.http.get<Actor[]>(this.nuevaUrl).subscribe((data: Actor[]) => {
      this.actor = data;
    });
     // this.servicio.guardarUrlHijos('http://localhost:1337/actor?nombreMarca='+this.marca);
    // let aux;
    // console.log("Nueva Url ",this.servicio.urlnueva )
    this.http.get(this.servicio.urlnueva).subscribe((data) => {
      this.servicio.cambiarMensaje(data);
    });
  }

}
