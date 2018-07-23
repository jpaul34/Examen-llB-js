import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {Pagina3Component} from "./paginas/pagina3/pagina3.component";
import {Pagina1Component} from "./paginas/pagina1/pagina1.component";
import {Pagina2Component} from "./paginas/pagina2/pagina2.component";
import {PaginaPrincipalComponent} from "./paginas/pagina-principal/pagina-principal.component";

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

];
