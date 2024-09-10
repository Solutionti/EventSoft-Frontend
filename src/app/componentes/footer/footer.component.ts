import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

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
