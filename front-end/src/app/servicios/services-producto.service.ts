import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesProductoService {

  servidor = "http://localhost:5000";

  constructor(private servicio:HttpClient) { }

  consultarProductos():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/producto`);
  }
}
