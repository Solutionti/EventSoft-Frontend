import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IniciarsesionService {

  constructor(
    private http: HttpClient
  ) { }

  iniciarSesion(email: any, password: any) {
    const url = "http://localhost:8000/api/iniciarsesion";
    
    return this.http.post(url, {
      email: email,
      password: password
    });
  }
}
