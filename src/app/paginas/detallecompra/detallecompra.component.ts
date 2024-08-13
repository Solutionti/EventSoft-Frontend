import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-detallecompra',
  standalone: true,
  imports: [MenuComponent, FooterComponent],
  templateUrl: './detallecompra.component.html',
  styleUrl: './detallecompra.component.css'
})
export class DetallecompraComponent {

}
