import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-zonadeportista',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent
],
  templateUrl: './zonadeportista.component.html',
  styleUrl: './zonadeportista.component.css'
})
export class ZonadeportistaComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.cargaPagina()
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
}
