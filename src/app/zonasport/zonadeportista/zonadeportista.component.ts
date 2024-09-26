import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { ZonasportService } from '../services/zonasport.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zonadeportista',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
    ReactiveFormsModule,
    CommonModule
],
  templateUrl: './zonadeportista.component.html',
  styleUrl: './zonadeportista.component.css'
})
export class ZonadeportistaComponent implements OnInit {

  constructor(
    private router: Router,
    private zonasportServices: ZonasportService
  ) {

  }

  ngOnInit(): void {
    this.cargaPagina();
    this.getPedidoDeportista();
  }

  datospersonales = true;
  pedidos = false;
  spinner = true;

  cargaPagina() {
    const intervalId = setInterval(() => {
      this.spinner = false;
    }, 100); // Ejecuta la función cada 100 milisegundos

    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000); // Detiene la ejecución después de 3 segundos

    const intervalId2 = setInterval(() => {
      this.spinner = true;
    }, 3000); // Ejecuta la función cada 100 milisegundos

    setTimeout(() => {
      clearInterval(intervalId2);
    }, 4000); // Detiene la ejecución después de 3 segundos
  }

  verPedidos() {
    this.datospersonales = true;
    this.pedidos = false;
  }

  verDatosPersonales() {
    this.datospersonales = false;
    this.pedidos = true;
  }


  cerrarSesion() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200/';
  }

  getpedidos: any [] = [];
  getPedidoDeportista() {
    this.zonasportServices
        .getPedidoDeportista()
        .subscribe((response: any ) => {
          this.getpedidos = response;
        })
  }
}
