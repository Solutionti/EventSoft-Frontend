import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZonasportService {

  constructor(
    private http: HttpClient
  ) { }

  
  getPedidoDeportista() {
    const url = "http://localhost:8000/api/getPedidoDeportista";
    let documento: any = localStorage.getItem('documento');

    let params = new HttpParams().set("documento", documento);

    return this.http.get(url, { params });
  }
}
