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
  urlnueva;
  urlnuevaHijos;

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajePelicula = this.fuenteMensajePelicula.asObservable();


  emitircambioCantidad:EventEmitter<number>=new EventEmitter();
  emitircambioPeliculas:EventEmitter<any[]>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();

  indiceActorSeleccionado;
  indicePeliculaSeleccionada;
  peliculaSelecionada;
  peliculasSeleccionadas=[];


  aumentarContador(){
    this.contador=this.contador+1;
    // console.log(this.contador);
  }

  disminuirContador(){
    this.contador=this.contador-1;
    // console.log(this.contador);
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

  eliminarPelicula(id){
    let indice=-1;
    this.peliculasSeleccionadas.forEach(function(valor, index, arr){
      if(valor.id===id){
        indice=index;
      }
    });

    if(indice>-1){
      this.peliculasSeleccionadas.splice(indice, 1);
      // console.log('se elimino correctamente: ',indice);
      // console.log('pelis: ',this.peliculasSeleccionadas);
    }
  }

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

  // cambiarMensajePeliculas(mensajePeliculas) {
  //   // console.log(mensajePelicula);
  //   this.fuenteMensajePelicula.next(mensajePeliculas);
  // }

  emitirEliminar(){
    this.disminuirContador();
    this.emitircambioCantidad.emit(this.contador);
  }

  emitirCambioCantidad(){
    this.aumentarContador();
    this.emitircambioCantidad.emit(this.contador);
  }

  emitirCambioPeliculas(){
    this.emitircambioPeliculas.emit(this.peliculasSeleccionadas);
  }
  //
  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
    return urlnueva;
  }

  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
    return urlnuevahijos;
  }

}
