import { Component, NgModule, OnInit } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { PaginaService } from '../services/pagina.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent implements OnInit {

  constructor(
    private paginaServices: PaginaService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.servicio = this.route.snapshot.paramMap.get("id");
    this.cargaPagina();
    this.getServicioId();
  }

  spinner = true;
  cantidad = 1;
  servicio: any = "";

  imagen: any = "";
  vistas: any = "";
  nombre: any = "";
  precio: any = "";
  carritoBtn = false;
  pasarBtn = true;
  carritoForm = new FormGroup({
    categoria_carrito: new FormControl('', [Validators.required]),
    jersy_carrito: new FormControl('', [Validators.required])
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

  sumarCantidad() {
    this.cantidad++;
  }

  restarcantidad() {
    if(this.cantidad != 1){
    this.cantidad--;
    }
  }

  getServicioId() {
    let codigo = this.servicio;
    this.paginaServices
        .getServicioId(codigo)
        .subscribe((response: any) => {
          
          this.imagen = response.url_imagen;
          this.vistas = response.vistas;
          this.nombre = response.nombre;
          this.precio = response.precio;
        });
  }

  carrito: any = [];
  AgregarCarritoCompras() {

    this.carrito.push(
      {
        codigo: this.servicio,
        nombre: this.nombre,
        precio: (this.precio * this.cantidad),
        imagen: this.imagen,
        cantidad: this.cantidad,
        categoria: this.carritoForm.get("categoria_carrito")?.value,
        jersy: this.carritoForm.get("jersy_carrito")?.value
      }
    );

    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    const dd: any  = localStorage.getItem('carrito');
    console.log(JSON.parse(dd));
  }
}
