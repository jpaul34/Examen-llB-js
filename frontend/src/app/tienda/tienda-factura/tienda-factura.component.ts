import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda-factura',
  templateUrl: './tienda-factura.component.html',
  styleUrls: ['./tienda-factura.component.css']
})
export class TiendaFacturaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = [
    {
      nombre: "usuario",
      apellido: "user",
      correo: "correo@mail.com",
      usuario: "usuario1"
    }
  ];

}
