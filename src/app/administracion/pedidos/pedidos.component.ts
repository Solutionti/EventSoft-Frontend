import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, TableModule, MenuadminComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {

  constructor(
    private administracionServices: AdministracionService
  ) {

  }

  ngOnInit(): void {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'assets/css/argon-dashboard.min.css';  // Ruta al archivo CSS alternativo
    document.head.appendChild(linkElement);

    this.getInscripciones();
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/argon-dashboard.min.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }

  inscripciones: any[] = [];
  getInscripciones() {
    this.administracionServices
        .getInscripciones()
        .subscribe((response: any ) => {
          console.log(response);
          this.inscripciones  = response;
        })
  }

  detalleinscripcion: any[] = [];
  getDetalleInscripciones(codigo: any ) {
    this.administracionServices
        .getDetalleInscripciones(codigo)
        .subscribe((response: any ) => {
          console.log(response);
          this.detalleinscripcion = response;
        });
  }
}
