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
      nombre: "Jonathan",
      apellido: "Caiza",
      correo: "jonathan.caiza@epn.edu.ec",
      usuario: "usuario1"
    }
  ];


}
