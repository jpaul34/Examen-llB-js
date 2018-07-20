import {Component, Input, OnInit, Output} from '@angular/core';
import {Actor, Pelicula} from "../../home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pelicula-resumen',
  templateUrl: './pelicula-resumen.component.html',
  styleUrls: ['./pelicula-resumen.component.css']
})

export class PeliculaResumenComponent implements OnInit {

  @Input() pelicula={
        peliculaId: 0,
        nombre: "-----",
        anioLanzamiento: "----",
        rating: 0,
        genero: "----",
        duracion: "----",
        idioma: "------",
        costo: "--",
        actorId: 0
      };

  // pelis =
  //   {
  //     peliculaId: 0,
  //     nombre: "-----",
  //     anioLanzamiento: "----",
  //     rating: 0,
  //     genero: "----",
  //     duracion: "----",
  //     idioma: "------",
  //     costo: "--",
  //     actorId: 0
  //   }
  // ;
  pelis =
    {
      peliculaId: 1,
      nombre: "Nombre Pelicula",
      anioLanzamiento: 2000,
      rating: 3,
      genero: "Terror",
      duracion: "2:00 h",
      idioma: "Español",
      costo: "30",
      actorId: 1
    }
  ;


  // //
  // pelicula1 =
  //   {
  //     nombre: "pelicula1",
  //     anio: "2018"
  //   }



  //
  // peliculass=[
  //   {
  //     "peliculaId": 5,
  //     "nombre": "Pelicula 5",
  //     "anioLanzamiento": 2000,
  //     "rating": 3,
  //     "genero": "Terror",
  //     "duracion": "2:00 h",
  //     "idioma": "Español",
  //     "costo": "30",
  //     "actorId": 1
  //   }
  //   ];
  // detalles=[];
  // urlAutos= 'http://localhost:1337/pelicula';
  // @Input() pelicula;


  constructor( private data: UsuarioService,
               private _usuarioService: UsuarioService,
               private router:Router) {
  }

  ngOnInit() {
    //
    // this.http.get<Pelicula[]>(this.urlAutos).subscribe((data: Pelicula[]) => {
    //   this.peliculas = data;
    //   console.log(this.peliculas)
    //   //  this.detalles=this.autos.map(datos=>datos.nombres);
    // });

  }
  // imprimirPeli(){
  //   console.log(this.peli);
  // }
  //
  // cargarDatos(){
  //   this.pelis=this.pelicula;
  // }

  cambiarRuta(){
    this.router.navigate(['/pelicula']);
  }
  // getAutos(): Observable<Pelicula[]> {
  //   return this.http.get<Pelicula[]>(this.urlAutos);
  // }

}
