import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ RouterLink,MenuComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
