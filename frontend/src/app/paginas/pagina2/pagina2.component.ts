import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cambiarRuta(){
    this.router.navigate(['/carrito']);
  }
}
