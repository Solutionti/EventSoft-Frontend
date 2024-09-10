import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule
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
