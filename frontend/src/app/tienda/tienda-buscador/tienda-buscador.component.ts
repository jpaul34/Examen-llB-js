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
  nombre;
  actor;
  pelicula;
  urlActor='http://localhost:1337/actor?nombre=';
  urlPelicula='http://localhost:1337/pelicula?nombre=';
  seleccionPeli;
  nuevaUrlActor:string;
  nuevaUrlPelicula:string;

  constructor(private http: HttpClient,
              private servicio: UsuarioService,
              private _router:Router) {
  }
  ngOnInit() {
    // this.escucharCambioBusqueda();
  }

  //
  // escucharCambioBusqueda() {
  //   // this.servicio.emitircambioBusqueda.subscribe((autos) => {this.nuevaUrl= autos;})
  // }


  // buscar() {
  //   console.log('Nombresssss: ',this.nombreActor);
  //   this.nuevaUrl=this.urlActor+this.nombreActor;
  //   return this.http.get<Actor>(this.nuevaUrl);
  // }
  id;

  // @Output() ngModelChange = new EventEmitter();

  mostrarBusqueda()
  {
    this.nuevaUrlActor=this.urlActor+this.nombre;
    this.nuevaUrlPelicula=this.urlPelicula+this.nombre;

    let dato1:any=[];
    let dato2:any=[];

    this.http.get(this.nuevaUrlActor).subscribe((data) => {
      dato1 = data;
      if (Object.entries(dato1).length !== 0){
        console.log('Dato1: ',dato1);
        this.servicio.cambiarMensaje(dato1);
        this.servicio.cambiarMensajePelicula(dato1[0].peliculas);
      }
    });

    this.http.get( this.nuevaUrlPelicula).subscribe((data) => {
      dato2 = data;
      if (Object.entries(dato2).length !== 0){
        console.log('Dato2: ',dato2);
        // this.servicio.cambiarMensaje(dato2[0].actorId);
        this.servicio.cambiarMensaje(null);
        this.servicio.cambiarMensajePelicula(dato2);
      }
    });
    //
    // console.log('Dato1: ',dato1);
    // console.log('Dato1: ',Object.entries(dato1).length);
    // console.log('Dato1: ',dato2);
    // console.log('Dato2: ',Object.entries(dato2).length);
    //
    // if (Object.entries(dato1).length !== 0){
    //   console.log('Dato1: ',dato1);
    //   this.servicio.cambiarMensaje(dato1);
    //   this.servicio.cambiarMensajePelicula(dato1[0].peliculas);
    // }else if (Object.entries(dato2).length !== 0){
    //   console.log('Dato2: ',dato2);
    //   this.servicio.cambiarMensaje(dato2[0].actorId);
    //   this.servicio.cambiarMensajePelicula(dato2);
    // }



    // // console.log("Nueva Url ",this.nuevaUrlActor)
    // this.http.get(this.nuevaUrlActor).subscribe((data) => {
    //   this.servicio.cambiarMensaje(data);
    //   this.actor = data;
    //   this.servicio.cambiarMensajePelicula(this.actor[0].peliculas);
    // });



    // this.nuevaUrlPelicula=this.urlActor+''+this.nombre;
    //
    // this.http.get(this.nuevaUrlPelicula).subscribe((data) => {
    //   this.servicio.cambiarMensajePelicula(data);
    // });

    // console.log("Actor ",actor )
    // this._router.navigate(['/principal'])
    // this.ngModelChange.emit(actor);
    // this.nombreActor=actor;
    // this.buscar().subscribe((data: Actor) => console.log({data}));
    // this.servicio.guardarUrl(this.nuevaUrl);
    // this.mostrar=this.servicio.mostrar;
    // this.http.get<Actor[]>(this.nuevaUrl).subscribe((data: Actor[]) => {
    //   this.actor = data;
    //
    // });

    // this.servicio.guardarUrlHijos('http://localhost:1337/actor?nombreMarca='+this.marca);
    // let aux;
    // console.log("Nueva Url ",this.servicio.urlnueva )
    // this.http.get(this.servicio.urlnueva).subscribe((data) => {
    //   this.servicio.cambiarMensaje(data);
    // });

  }

}
