import {EventEmitter, Injectable} from "@angular/core";
import {Actor, Pelicula} from "../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs/index";
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private fuenteMensaje = new BehaviorSubject<any>([]);
  private fuenteMensaje2 = new BehaviorSubject<any>([]);
  private fuenteMensajePelicula = new BehaviorSubject<any>([]);
  visible=true;
  contador=0;

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajePelicula = this.fuenteMensajePelicula.asObservable();

  emitircambioCantidad:EventEmitter<number>=new EventEmitter();
  emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();

  indiceActorSeleccionado;
  indicePeliculaSeleccionada;
  peliculaSelecionada;
  peliculasSeleccionadas=[];


  aumentarContador(){
    this.contador=this.contador+1;
    console.log(this.contador)
  }

  setIndiceActor(indiceActor){
    this.indiceActorSeleccionado=indiceActor;
  }

  setIndicePelicula(indicePelicula){
    this.indicePeliculaSeleccionada=indicePelicula;
  }

  setPeliculaSeleccionada(pelicula){
    this.peliculaSelecionada=pelicula;
  }

  agregarPeliculaSeleccionada(pelicula){
    this.peliculasSeleccionadas.push(pelicula);
  }

  constructor() { }

  cambiarMensaje(mensaje) {
    // console.log(mensaje);
    this.fuenteMensaje.next(mensaje);
  }

  cambiarMensaje2(mensaje) {
    // console.log(mensaje);
    this.fuenteMensaje2.next(mensaje);
  }

  cambiarMensajePelicula(mensajePelicula) {
    // console.log(mensajePelicula);
    this.fuenteMensajePelicula.next(mensajePelicula);
  }

  emitirEliminar(visible:boolean){
    this.visible=visible;
    this.emiircambioEliminar.emit(visible);
  }

  emitirCambioCantidad(){
    this.aumentarContador();
    this.emitircambioCantidad.emit(this.contador);
  }
  //
  // guardarUrl(urlnueva: string){
  //   this.urlnueva=urlnueva;
  //   return urlnueva;
  // }
  //
  // guardarUrlHijos(urlnuevahijos:string){
  //   this.urlnuevaHijos=urlnuevahijos;
  //   return urlnuevahijos;
  // }

}
