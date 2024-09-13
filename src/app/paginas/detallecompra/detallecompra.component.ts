import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaginaService } from '../services/pagina.service';

@Component({
  selector: 'app-detallecompra',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './detallecompra.component.html',
  styleUrl: './detallecompra.component.css'
})
export class DetallecompraComponent implements OnInit {
  constructor(
    private paginaServices: PaginaService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.cargaPagina();
    this.mostrarCarritoComprar();
    this.calcularTotalCarrito();
  }

  spinner = true;
  total: any = 0;

  detalleFacturacionForm = new FormGroup({
    nombre_facturacion: new FormControl('', [Validators.required]),
    apellido_facturacion: new FormControl('', [Validators.required]),
    tpdocumento_facturacion: new FormControl('', [Validators.required]),
    documento_facturacion: new FormControl('', [Validators.required]),
    departamento_facturacion: new FormControl('', [Validators.required]),
    ciudad_facturacion: new FormControl('', [Validators.required]),
    direccion_facturacion: new FormControl('', [Validators.required]),
    telefono_facturacion: new FormControl('', [Validators.required]),
    correo_facturacion: new FormControl('', [Validators.required]),
    acompanantes_facturacion: new FormControl('', [Validators.required]),
    rh_facturacion: new FormControl('', [Validators.required]),
    seguro_medico_facturacion: new FormControl('', [Validators.required]),
    nacimiento_facturacion: new FormControl('', [Validators.required])
  });

  promocionalForm = new FormGroup({
    codigo_promocional: new FormControl(''),
  });

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

  CrearInscripcionesDetalle() {
    const carrito = localStorage.getItem('carrito');
    if(carrito) {
      this.carritoCompra = JSON.parse(carrito);
    }

    let datos: any = [
      {
        nombre: this.detalleFacturacionForm.get("nombre_facturacion")?.value,
        apellido: this.detalleFacturacionForm.get("apellido_facturacion")?.value,
        tpdocumento: this.detalleFacturacionForm.get("tpdocumento_facturacion")?.value,
        documento: this.detalleFacturacionForm.get("documento_facturacion")?.value,
        departamento: this.detalleFacturacionForm.get("departamento_facturacion")?.value,
        ciudad: this.detalleFacturacionForm.get("ciudad_facturacion")?.value,
        direccion: this.detalleFacturacionForm.get("direccion_facturacion")?.value,
        telefono: this.detalleFacturacionForm.get("telefono_facturacion")?.value,
        correo: this.detalleFacturacionForm.get("correo_facturacion")?.value,
        acompanantes: this.detalleFacturacionForm.get("acompanantes_facturacion")?.value,
        rh: this.detalleFacturacionForm.get("rh_facturacion")?.value,
        seguro_medico: this.detalleFacturacionForm.get("seguro_medico_facturacion")?.value,
        fechanacimiento: this.detalleFacturacionForm.get("nacimiento_facturacion")?.value,
        total: this.total,
        envio: 0,
        codigo_promocional: this.promocionalForm.get("codigo_promocional")?.value,
      }
    ];

    this.paginaServices
        .CrearInscripcionesDetalle(datos,this.carritoCompra)
        .subscribe((response: any) => {
          if(response.status == 200) {
            localStorage.removeItem('carrito');
            this.router.navigate(['/', 'mensajefinal']);
          }
          else {

          }
        });
  }
}
