import { Component } from '@angular/core';
import { MenuComponent } from "../../componentes/menu/menu.component";
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [MenuComponent, FooterComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

}
