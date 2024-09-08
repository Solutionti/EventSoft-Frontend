import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(
    private http: HttpClient
  ) { }

  getServiciosInicio() {
    const url = "http://localhost:8000/api/getServiciosInicio";

    return this.http.get(url);
  }

  getServicioId(codigo: any ) {
    const url = "http://localhost:8000/api/getServicioId";

    let params = new HttpParams().set("codigo", codigo);

    return this.http.get(url, { params });
  }
}
