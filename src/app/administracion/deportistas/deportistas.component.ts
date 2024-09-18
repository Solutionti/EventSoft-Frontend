import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
@Component({
  selector: 'app-deportistas',
  standalone: true,
  imports: [CommonModule, TableModule, MenuadminComponent],
  templateUrl: './deportistas.component.html',
  styleUrl: './deportistas.component.css'
})
export class DeportistasComponent implements OnInit {

  constructor(
    private administracionServices: AdministracionService
  ) {

  }

  ngOnInit(): void {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'assets/css/argon-dashboard.min.css';  // Ruta al archivo CSS alternativo
    document.head.appendChild(linkElement);

    this.getUsuariosDeportistas();
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/argon-dashboard.min.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }

  deportistas: any[] = [];
  getUsuariosDeportistas() {
    this.administracionServices
        .getUsuariosDeportistas()
        .subscribe((response: any ) => {
          console.log(response);
          this.deportistas = response;
        })
  }

}
