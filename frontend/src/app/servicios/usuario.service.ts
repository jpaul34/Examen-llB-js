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

  mensajeActual = this.fuenteMensaje.asObservable();

  constructor() { }

  cambiarMensaje(mensaje) {
    console.log(mensaje);
    this.fuenteMensaje.next(mensaje);
  }


  // contador=0;
  // parametros;
  // urlPelicula= 'http://localhost:1337/pelicula';
  // urlnueva;
  // mostrar=true;
  // urlnuevaHijos;
  // id; total=0;
  // visible=true;
  // elmiminartotal=0;
  // emitircambioAuto:EventEmitter<number>=new EventEmitter();
  // emitircambioCompra:EventEmitter<number>=new EventEmitter();
  // emitircambioBusqueda:EventEmitter<string>=new EventEmitter();
  // emiircambioEliminar:EventEmitter<boolean>=new EventEmitter();
  // emitirCambioTota:EventEmitter<number>=new EventEmitter();
  //
  // constructor(private http: HttpClient){
  //
  // }
  // pelicula: Pelicula[];
  //
  // colocarTotal(total){
  //   this.total=total;
  //   return total;
  // }
  // cambioCompra(totalCompra){
  //   this.total=totalCompra;
  //   this.emitircambioCompra.emit(totalCompra);
  // }
  // getAutos(){
  //   return this.http.get<Pelicula[]>(this.urlPelicula).subscribe((data: Pelicula[]) => {
  //     this.pelicula = data;
  //   });
  // }
  // // emitirQuitarTotal(cambioAuto:number){
  // //   this. elmiminartotal=cambioAuto;
  // //   this.emitirCambioTota.emit(cambioAuto);
  // // }
  // // emitirCambio(cambioAuto:number){
  // //   this.contador=cambioAuto;
  // //   this.emitircambioAuto.emit(cambioAuto);
  // // }
  // // emitirEliminar(visible:boolean){
  // //   this.visible=visible;
  // //   this.emiircambioEliminar.emit(visible);
  // // }
  // // emitirBusqueda(parametros:string){
  // //   this.parametros=parametros;
  // //   this.emitircambioBusqueda.emit(parametros);
  // // }
  // // guardarUrl(urlnueva: string){
  // //   this.urlnueva=urlnueva;
  // //   return urlnueva;
  // // }
  // //
  // // guardarId(id){
  // //   this.id=id;
  // // }
  // // geId(){
  // //   console.log('aquiii'+this.id);
  // //   return this.id;
  // // }
  // // guardarUrlHijos(urlnuevahijos:string){
  // //   this.urlnuevaHijos=urlnuevahijos;
  // //   return urlnuevahijos;
  // // }

}
