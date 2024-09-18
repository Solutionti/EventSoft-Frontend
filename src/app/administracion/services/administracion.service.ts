import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosAdministrador(){
    const url = "http://localhost:8000/api/getUsuariosAdministrador";

    return this.http.get(url);
  }

  getUsuariosDeportistas() {
    const url = "http://localhost:8000/api/getUsuariosDeportistas";

    return this.http.get(url);
  }

  codigosPromocionales() {
    const url = "http://localhost:8000/api/codigosPromocionales";

    return this.http.get(url);
  }

  getPatrocinios() {
    const url = "http://localhost:8000/api/getPatrocinios";

    return this.http.get(url);
  }

  getServiciosInicio() {
    const url = "http://localhost:8000/api/getServiciosInicio";

    return this.http.get(url);
  }

  getInscripciones()  {
    const url = "http://localhost:8000/api/getInscripciones";

    return this.http.get(url);
  }

  getDetalleInscripciones(codigo: any )  {
    const url = "http://localhost:8000/api/getDetalleInscripciones";
    let params = new HttpParams().set("codigo", codigo);
    return this.http.get(url);
  }
}
