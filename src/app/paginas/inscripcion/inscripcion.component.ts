import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [MenuComponent, FooterComponent],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {

}
