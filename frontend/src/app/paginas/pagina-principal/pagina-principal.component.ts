import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../servicios/usuario.service";
import {CookieService} from "ngx-cookie-service";
import {Pelicula} from "../../home/home/home.component";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  contador = 0;
  datosActor;
  mensaje;
  mensajePeli:Pelicula;
  arregloPeliculas = [];
  // URLActores  = this.servicio.urlnueva;
  URLActores  = 'http://localhost:1337/actor';
  URLPelicula  = 'http://localhost:1337/pelicula';
  visible=false;
  numPeliculas=8;

  constructor( private http: HttpClient,
               private data: UsuarioService,
               private servicio: UsuarioService) {
    //
    // console.log("URL Nueva Princiapal:" )
    // // console.log("La url Actual es: "+this.servicio.urlnueva)
    // let aux2;
    this.http.get(this.URLActores).subscribe((data) => {
      this.data.cambiarMensaje(data);
      // console.log('Datoss: ',data);
    });
    //
    // let aux;
      this.http.get(this.URLPelicula).subscribe((data2) => {
        this.data.cambiarMensajePelicula(data2);
        // console.log('pelicula: ',data2);
      });
        // console.log("base de datos",aux)
    // this.escucharCambiosPelicula();
  }

  ngOnInit(): void {
        // let aux;
        this.servicio.mensajeActual.subscribe(mensaje => this.mensaje = mensaje);
        // console.log("base de datos",this.mensaje);
         this.servicio.mensajePelicula.subscribe(mensajePelicula => this.mensajePeli = mensajePelicula);
        // console.log("base de datos",this.mensajePeli );
    // }
    // console.log(this.data);
  }

  aumentarCont(){
    this.contador= this.contador+1;
  }

  // escucharCambiosPelicula() {
  //   this.servicio.emitircambioPelicula.subscribe((pelicula) => {
  //     this.contador = pelicula;
  //   });
  // }

  //
  // actores: Actor;
  // urlActor = 'http://localhost:1337/actor';
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // ngOnInit() {
  //   // this.getActores().subscribe(data => {
  //   //     this.actores = data;
  //   //     console.log('Actores ' + this.actores);
  //   //   },
  //   //   err => {
  //   //     console.log(err)
  //   //   }
  //   // );
  // }
  //
  // getActores(): Observable<Actor> {
  //   return this.http.get<Actor>(this.urlActor);
  // }
  registrarPeliculas(pelicula){
    let lista=[];
    // lista+="[";
    if(pelicula.length>0){
      pelicula.forEach(function (valor, indice, arreglo) {
        // console.log('valor', valor);
        // console.log('indice', indice);
        // console.log('arreglo', arreglo);
        if(valor!=null){
          lista.push(valor);
        }
      });
    }

    // console.log("mensaje : ",this.mensaje);
    // console.log(pelicula);
    // console.log("lista: ",lista);
    // lista+="]";
    if(lista.length>0){
      this.arregloPeliculas.push(lista);
    }
  }

  agregarPeli(valor){
    this.arregloPeliculas.push(valor);
  }


  // registrarPeliculas(pelicula) {
  //   let lista: string[] = [];
  //   pelicula.forEach(function(element => {
  //
  //   });

  //   console.log(element);
  //   this.arregloPeliculas.push(element);
  // });


  // this.arregloPeliculas.push(
  // {
  //   "peliculaId": pelicula.peliculaId,
  //   "nombre": pelicula.nombre,
  //   "anioLanzamiento": pelicula.anioLanzamiento,
  //   "rating": pelicula.rating,
  //   "genero": pelicula.genero,
  //   "duracion": pelicula.duracion,
  //   "idioma": pelicula.idioma,
  //   "costo": pelicula.costo,
  //   "actorId": pelicula.actorId
  //  });


  // console.log(this.arregloPeliculas);
  // }

  // imprimirPeli(){
  //   console.log("Peliculas  ");
  //   console.log(this.arregloPeliculas);
  // }
  //
  // imprimirObjeto(pelicula){
  //   console.log(pelicula);
  // }
  aumentarNumPelis(){
    this.numPeliculas=this.numPeliculas+4;
  }
}
