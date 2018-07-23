import {EventEmitter, Injectable} from "@angular/core";
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

  contador=0;
  urlnueva;
  urlnuevaHijos;

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajeActual2 = this.fuenteMensaje2.asObservable();
  mensajePelicula = this.fuenteMensajePelicula.asObservable();


  emitircambioCantidad:EventEmitter<number>=new EventEmitter();
  emitircambioPeliculas:EventEmitter<any[]>=new EventEmitter();

  indiceActorSeleccionado;
  indicePeliculaSeleccionada;
  peliculaSelecionada;
  peliculasSeleccionadas=[];
  datosFactura;


  aumentarContador(){
    this.contador=this.contador+1;
  }

  disminuirContador(){
    this.contador=this.contador-1;
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

  setDatosFactura(datos){
    this.datosFactura=datos;
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
    }
  }

  cambiarMensaje(mensaje) {
    this.fuenteMensaje.next(mensaje);
  }

  cambiarMensaje2(mensaje) {
    this.fuenteMensaje2.next(mensaje);
  }

  cambiarMensajePelicula(mensajePelicula) {
    this.fuenteMensajePelicula.next(mensajePelicula);
  }

  emitirEliminar(){
    this.disminuirContador();
    this.emitircambioCantidad.emit(this.contador);
  }

  emitirCambioCantidad(){
    this.aumentarContador();
    this.emitircambioCantidad.emit(this.contador);
  }

  emitirCambioPeliculas() {
    this.emitircambioPeliculas.emit(this.peliculasSeleccionadas);
  }

  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
  }

  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
  }

}
