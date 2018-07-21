import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home/home.component";
import {ActorDetalleComponent} from "./actor/actor-detalle/actor-detalle.component";
import {AppComponent} from "./app.component";
import {Pagina3Component} from "./paginas/pagina3/pagina3.component";
import {Pagina1Component} from "./paginas/pagina1/pagina1.component";
import {Pagina2Component} from "./paginas/pagina2/pagina2.component";
import {PaginaPrincipalComponent} from "./paginas/pagina-principal/pagina-principal.component";
// import {AtributoPapaComponent} from "./atributo-papa/atributo-papa.component";
// import {ModeloPapaComponent} from "./modelo-papa/modelo-papa.component";
// import {CardPapaComponent} from "./card-papa/card-papa.component";
// import {DatosCarritoComponent} from "./datos-carrito/datos-carrito.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'principal',
    component: PaginaPrincipalComponent,
  },
  {
    path: 'actor',
    component: Pagina1Component,
  },
  {
    path: 'pelicula',
    component: Pagina2Component,
  },
  {
    path: 'carrito',
    component: Pagina3Component,
  },
  {
    path: '**',
    component: PaginaPrincipalComponent
  }

  // ,
  // {
  //   path: 'modeloAuto',
  //   component: AtributoPapaComponent,
  // },
  // {
  //   path: 'modeloConductor',
  //   component: ModeloPapaComponent,
  // },
  // {
  //   path: 'carrito',
  //   component: DatosCarritoComponent,
  // },
  //
];
