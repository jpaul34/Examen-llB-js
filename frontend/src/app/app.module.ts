import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TiendaCarritoComponent } from './tienda/tienda-carrito/tienda-carrito.component';
import { TiendaFacturaComponent } from './tienda/tienda-factura/tienda-factura.component';
import { ActorDetalleComponent } from './actor/actor-detalle/actor-detalle.component';
import { ActorResumenComponent } from './actor/actor-resumen/actor-resumen.component';
import { PeliculaDetalleComponent } from './pelicula/pelicula-detalle/pelicula-detalle.component';
import { PeliculaResumenComponent } from './pelicula/pelicula-resumen/pelicula-resumen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from "@angular/core";
import { PeliculaNoDisponibleComponent } from './pelicula/pelicula-no-disponible/pelicula-no-disponible.component';
import { PerfilUsuarioComponent } from './tienda/perfil-usuario/perfil-usuario.component';
import { DatosFacturaComponent } from './tienda/datos-factura/datos-factura.component';
import { TiendaBuscadorComponent } from './tienda/tienda-buscador/tienda-buscador.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home/home.component';
import { CookieService } from 'ngx-cookie-service';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { PagoOrdenComponent } from './tienda/pago-orden/pago-orden.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaCarritoComponent,
    TiendaFacturaComponent,
    ActorDetalleComponent,
    ActorResumenComponent,
    PeliculaDetalleComponent,
    PeliculaResumenComponent,
    PeliculaNoDisponibleComponent,
    PerfilUsuarioComponent,
    DatosFacturaComponent,
    TiendaBuscadorComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    PaginaPrincipalComponent,
    PagoOrdenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    NgbModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
