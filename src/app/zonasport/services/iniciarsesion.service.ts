import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IniciarsesionService {

  constructor(
    private http: HttpClient
  ) { }

  iniciarSesion() {
    
  }
}
