import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detallecompra',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './detallecompra.component.html',
  styleUrl: './detallecompra.component.css'
})
export class DetallecompraComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    this.cargaPagina();
  }

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
}
