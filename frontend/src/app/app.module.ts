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
    TiendaBuscadorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
