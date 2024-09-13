import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-deportistas',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './deportistas.component.html',
  styleUrl: './deportistas.component.css'
})
export class DeportistasComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'assets/css/argon-dashboard.min.css';  // Ruta al archivo CSS alternativo
    document.head.appendChild(linkElement);
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/argon-dashboard.min.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }

}
