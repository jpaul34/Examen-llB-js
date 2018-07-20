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
  private fuenteMensajePelicula = new BehaviorSubject<any>([]);
  visible=true;
  contador=0;
  parametros;
  urlnueva;
  mostrar=true;urlnuevaHijos;

  mensajeActual = this.fuenteMensaje.asObservable();
  mensajePelicula = this.fuenteMensajePelicula.asObservable();

  emitircambioPelicula:EventEmitter<number>=new EventEmitter();
  emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  emitircambioBusqueda:EventEmitter<string>=new EventEmitter();

  indiceSeleccionado;indiceHijos;elmiminartotal=0;

  setIndice(indice){
    this.indiceSeleccionado=indice;
  }

  constructor() { }

  cambiarMensaje(mensaje) {
    console.log(mensaje);
    this.fuenteMensaje.next(mensaje);
  }

  cambiarMensajePelicula(mensajePelicula) {
    console.log(mensajePelicula);
    this.fuenteMensajePelicula.next(mensajePelicula);
  }

  emitirEliminar(visible:boolean){
    this.visible=visible;
    this.emiircambioEliminar.emit(visible);
  }

  emitirCambio(cambioPelicula:number){
    this.contador=cambioPelicula;
    this.emitircambioPelicula.emit(cambioPelicula);
  }

  guardarUrl(urlnueva: string){
    this.urlnueva=urlnueva;
    return urlnueva;
  }

  guardarUrlHijos(urlnuevahijos:string){
    this.urlnuevaHijos=urlnuevahijos;
    return urlnuevahijos;
  }

}
