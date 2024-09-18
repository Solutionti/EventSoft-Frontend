import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import { CommonModule } from '@angular/common';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";

@Component({
  selector: 'app-configuracionevento',
  standalone: true,
  imports: [CommonModule, MenuadminComponent],
  templateUrl: './configuracionevento.component.html',
  styleUrl: './configuracionevento.component.css'
})
export class ConfiguracioneventoComponent implements OnInit {

  constructor(
    private administracionServices: AdministracionService
  ) {
    
  }

  ngOnInit(): void {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'assets/css/argon-dashboard.min.css';  // Ruta al archivo CSS alternativo
    document.head.appendChild(linkElement);

    this.getServiciosInicio();
    this.getUsuariosAdministrador();
    this.codigosPromocionales();
    this.getPatrocinios();
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/argon-dashboard.min.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }

  servicios: any [] = [];
  getServiciosInicio() {
    this.administracionServices
        .getServiciosInicio()
        .subscribe((response: any ) => {
          this.servicios = response;
        })
  }

  usuarios: any [] = [];
  getUsuariosAdministrador() {
     this.administracionServices
        .getUsuariosAdministrador()
        .subscribe((response: any ) => {
          
          this.usuarios = response;
        })
  }

  codigos: any [] = [];
  codigosPromocionales() {
    this.administracionServices
        .codigosPromocionales()
        .subscribe((response: any ) => {
          this.codigos = response;
    })
  }

  patrocinios: any [] = [];
  getPatrocinios() {
    this.administracionServices
        .getPatrocinios()
        .subscribe((response: any ) => {
          console.log(response);
          this.patrocinios = response;
    })
  }

}
