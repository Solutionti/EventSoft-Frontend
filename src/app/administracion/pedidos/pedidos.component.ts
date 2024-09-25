import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, TableModule, MenuadminComponent, ConfirmDialogModule,ToastModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
  providers: [ConfirmationService,MessageService]
})
export class PedidosComponent implements OnInit {

  constructor(
    private administracionServices: AdministracionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
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
          this.inscripciones  = response;
        })
  }

  detalleinscripcion: any[] = [];
  getDetalleInscripciones(codigo: any ) {
    this.administracionServices
        .getDetalleInscripciones(codigo)
        .subscribe((response: any ) => {
          this.detalleinscripcion = response;
        });
  }

  cambiarEstadoPedido(documento: any, tpdocumento: any ) {
    this.confirmationService.confirm({
      header: 'Estas seguro ?',
      message: '¿Desea aceptar que los datos y factura del deportista estan en correctos?',
      accept: () => {
        this.administracionServices
            .cambiarEstadoPedido(tpdocumento,documento, "Aceptado")
            .subscribe((response: any ) => {
              if(response.status == 200) {
                this.showSuccess(response.message);
                this.getInscripciones();
              }
              else {
                this.showError(response.message);
              }
            });
      },
      reject: () => {
        this.administracionServices
            .cambiarEstadoPedido(tpdocumento,documento, "Cancelado")
            .subscribe((response: any ) => {
              if(response.status == 200) {
                this.showSuccess(response.message);
                this.getInscripciones();
              }
              else {
                this.showError(response.message);
              }
            });
      }
    });
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Gran fondo  Aviso',
      detail: message
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Gran fondo  Aviso',
      detail: message
    });
  }
}
