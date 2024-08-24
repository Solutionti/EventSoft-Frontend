import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import  QRCode  from 'qrcode';
import { MenuComponent } from "../../componentes/menu/menu.component";

@Component({
  selector: 'app-tuqr',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    MenuComponent
],
  templateUrl: './tuqr.component.html',
  styleUrl: './tuqr.component.css'
})
export class TuqrComponent  implements OnInit, AfterViewInit  {

  @Input() qrText: string = 'el ganador'; // El texto del código QR
           qrCodeUrl: string = 'https://chatgpt.com/'; // La URL del código QR generado
           
  constructor(private elRef: ElementRef) {

  }

  ngOnInit(): void {
    this.cargaPagina();
  }

  ngAfterViewInit(): void {
    this.generarCodigoQr();
  }

  spinner = true;

  generarCodigoQr(): void {
    QRCode.toDataURL(this.qrText)
      .then(url => {
        this.qrCodeUrl = url;
      })
      .catch(err => {
        console.error(err);
      });
  }

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
