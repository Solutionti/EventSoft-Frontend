import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
    CommonModule,
    ToastModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.contarElementos();
  }

  cantidadElementos: number  = 0;
  
  contarElementos() {
    const arrayString: any  = localStorage.getItem('carrito');
    
    if (!arrayString) {
      this.cantidadElementos = 0;
    }
    
    const array = JSON.parse(arrayString);

    this.cantidadElementos = array.length;
  }

}
