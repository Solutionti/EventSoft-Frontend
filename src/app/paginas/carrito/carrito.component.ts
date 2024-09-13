import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { FooterComponent } from "../../componentes/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent,
    CommonModule,
    ToastModule
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
  providers: [ConfirmationService,MessageService]
})
export class CarritoComponent implements OnInit {
  
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {

  }

  ngOnInit(): void {
    this.mostrarCarritoComprar();
    this.cargaPagina();
    this.calcularTotalCarrito();
  }

  spinner = true;
  total: any = 0;
  fecha = "Detalle de la factura";

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

  carritoCompra: any[] = [];
  mostrarCarritoComprar() {
    const carrito = localStorage.getItem('carrito');

    if(carrito) {
      this.carritoCompra = JSON.parse(carrito);
    }
  }

  calcularTotalCarrito() {
    const carrito = localStorage.getItem('carrito');
    let total = 0;
    if(carrito) {
      this.carritoCompra = JSON.parse(carrito);
      this.carritoCompra.forEach(item => {
        total = (total + item.precio * item.cantidad);
      });
    }

    this.total = total.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
    
  }

  vaciarCarrito() {
    localStorage.removeItem('carrito');
    this.carritoCompra = [];
    this.calcularTotalCarrito();
    this.showSuccess("Se ha eliminado los items del carrito de compras");
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Gran fondo  Aviso',
      detail: message
    });
  }
  
}
