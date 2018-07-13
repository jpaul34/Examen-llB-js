import {Component, Input, OnInit} from '@angular/core';
import {Actor} from "./home/home/home.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {CookieService} from "ngx-cookie-service";
import {UsuarioService} from "./servicios/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  cookieValue = 'UNKNOWN';

  constructor( private http: HttpClient, private cookieService: CookieService, private data: UsuarioService ) { }

  datosActor;
  mensaje;
  URLActores  = 'http://localhost:1337/actor';

  ngOnInit(): void {
    this.cookieService.set( 'user', 'Jonathan' );
    this.cookieService.set( 'correo', 'jonathan.caiza@epn.edu.ec' );
    this.cookieService.set( 'apellido', 'Caiza' );

    this.cookieValue = this.cookieService.get('user');
    console.log('valor cookie '+this.cookieValue);

    this.http.get(this.URLActores).subscribe((data) => {
      this.mensaje = data;
      this.data.cambiarMensaje(this.mensaje);
    });

    // console.log(this.data);
  }



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


}
