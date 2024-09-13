import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-mensajefinal',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent
],
  templateUrl: './mensajefinal.component.html',
  styleUrl: './mensajefinal.component.css'
})
export class MensajefinalComponent implements OnInit {

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
