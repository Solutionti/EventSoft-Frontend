import { Component, OnInit } from '@angular/core';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdministracionService } from '../services/administracion.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [MenuadminComponent, ReactiveFormsModule, CommonModule, ToastModule],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css',
  providers: [ConfirmationService,MessageService]
})
export class InscripcionesComponent implements OnInit {

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
  }

  ngAfterViewInit(): void {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = 'assets/js/argon-dashboard.min.js'; // Ruta del archivo JS
    script.async = true;
    document.body.appendChild(script);
  }
  total = 0;

  inscripcionesForm = new FormGroup({

    codigoqr: new FormControl({value: '', disabled: false}),
    tpdocumento: new FormControl({value: '', disabled: true}),
    documento: new FormControl({value: '', disabled: false}),
    nombrecompleto: new FormControl({value: '', disabled: true}),
    departamento: new FormControl({value: '', disabled: true}),
    ciudad: new FormControl({value: '', disabled: true}),
    telefono: new FormControl({value: '', disabled: true}),
    direccion: new FormControl({value: '', disabled: true}),
    correo: new FormControl({value: '', disabled: true}),
    rh: new FormControl({value: '', disabled: true}),
    seguromedico: new FormControl({value: '', disabled: true}),
    fechanacimiento: new FormControl({value: '', disabled: true}),
    factura: new FormControl({value: '', disabled: true}),
  });

  inscripciones: any[] = [];
  getDatosInscripcion() {
    let documento = this.inscripcionesForm.get("documento")?.value;

    this.inscripcionesForm.patchValue({
      tpdocumento: "",
      nombrecompleto: "",
      departamento: "",
      ciudad: "",
      telefono: "",
      direccion: "",
      correo: "",
      rh: "",
      seguromedico: "",
      fechanacimiento: "",
      factura: "",
    });
    this.inscripciones = [];
    this.total = 0;
    this.administracionServices
        .getDatosInscripcion(documento)
        .subscribe((response: any ) => {
          if(response.status == 200) {
            this.inscripcionesForm.patchValue({
              tpdocumento: response.data.tipo_documento,
              nombrecompleto: response.data.nombre + '' + response.data.apellido,
              departamento: response.data.departamento,
              ciudad: response.data.ciudad,
              telefono: response.data.telefono,
              direccion: response.data.direccion,
              correo: response.data.correo_electronico,
              rh: response.data.rh,
              seguromedico: response.data.seguro_medico,
              fechanacimiento: response.data.fecha_nacimiento,
              factura: '  ' + response.data.codigo_inscripcion,
            });
  
            this.administracionServices
                .getDetalleInscripciones(response.data.codigo_inscripcion)
                .subscribe((response: any ) => {
                  this.inscripciones = response;
                });
            this.total = response.data.total;

            this.showSuccess(response.message)
          }
          else {
            this.showError(response.message)
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
