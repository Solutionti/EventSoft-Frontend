import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginaService } from '../services/pagina.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {


  constructor(
    private paginaServices: PaginaService
  ) {

  }

  ngOnInit() {
    this.cargaPagina();
    this.getServiciosInicio();
    
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/pagina.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }


  spinner = true;
  direccionEvento = "Carrera 26 # 67 - 30 mall center";
  horaFechaEvento = "8:00 AM, 25 de DICIEMBRE 2024"

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

  // enviarMensajeWhatsapp() {
  //   const phoneNumber = '3155639791'; // Número de teléfono del destinatario
  //   const message = 'Hola, este es un recordatorio importante!';
  //   const encodedMessage = encodeURIComponent(message);
  //   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  //   window.open(whatsappUrl, '_blank');
  // }

  servicios: any[] = [];
  getServiciosInicio() {
    this.paginaServices
        .getServiciosInicio()
        .subscribe((response: any ) => {
          console.log(response);
          this.servicios = response;
        });
  }
  
}
