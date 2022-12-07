import { Component, OnInit } from '@angular/core';
import { ServicesProductoService } from '../../servicios/services-producto.service';
import { productos } from '../../interfaces/productos';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  constructor(private servicioProducto: ServicesProductoService) { }
  datosProductos: Array<productos> = [];

  ngOnInit(): void {
    this.servicioProducto.consultarProductos().subscribe(datos => {
      for (let i = 0; i <= datos.length; i++) {
        this.datosProductos.push(datos[i]);
      }

      console.log(this.datosProductos);

    });
  }

}
