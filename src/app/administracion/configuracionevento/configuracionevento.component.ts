import { Component, OnInit } from '@angular/core';
import { AdministracionService } from '../services/administracion.service';
import { CommonModule } from '@angular/common';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-configuracionevento',
  standalone: true,
  imports: [CommonModule, MenuadminComponent, ReactiveFormsModule, ToastModule],
  templateUrl: './configuracionevento.component.html',
  styleUrl: './configuracionevento.component.css',
  providers: [ConfirmationService,MessageService]
})
export class ConfiguracioneventoComponent implements OnInit {

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

  regaloForm = new FormGroup({
    documento_deportista: new FormControl('', Validators.required),
    codigo_deportista: new FormControl('', Validators.required),
    total_deportista: new FormControl('', Validators.required),
    estado_deportista: new FormControl('Activo', Validators.required)
  });

  servicioForm = new FormGroup({
    codigo_servicio: new FormControl('', Validators.required),
    nombre_servicio: new FormControl('', Validators.required),
    precio_servicio: new FormControl('', Validators.required),
    estado_servicio: new FormControl('Activo', Validators.required),
    imagen_servicio: new FormControl('', Validators.required),
  });

  patrocinioForm = new FormGroup({
    codigo_patrocinio: new FormControl('', Validators.required),
    empresa_patrocinio: new FormControl('', Validators.required),
    logo_patrocinio: new FormControl('', Validators.required),
    valor_patrocinio: new FormControl('', Validators.required),
    descripcion_patrocinio: new FormControl('', Validators.required)
  });

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

  crearRegalo() {
    let regalo: any = [
      {
        codigo_promocional: this.regaloForm.get("codigo_deportista")?.value,
        precio: this.regaloForm.get("total_deportista")?.value,
        estado: this.regaloForm.get("estado_deportista")?.value,
        documento: this.regaloForm.get("documento_deportista")?.value,
      }
    ];

    this.administracionServices
        .crearRegalo(regalo)
        .subscribe((response: any ) => {
          if(response.status == 200) {
            this.showSuccess(response.message);
            this.codigosPromocionales();
            this.regaloForm.patchValue({
              documento_deportista: "",
              codigo_deportista: "",
              total_deportista: "",
              estado_deportista: "Activo"
            })
          }
          else {
            this.showError(response.message);
          }
        })
  }

  public archivo1: any = [];
  public archivo2: any = [];

  imageUpload(e: any  ): void {
    this.archivo1 = [];
    const target = e.target as HTMLInputElement;
    const archivo = e.target.files[0];
  
    // this.extraerBase64(archivo).then((imagen: any ) => {
    //   this.previsualizacion2 = imagen.base;
    // });
  
    this.archivo1.push(archivo);
  }

  crearServicio() {
    let ip: any  = "0.0.0.0",
        nombre: any  = this.servicioForm.get("nombre_servicio")?.value,
        precio: any  = this.servicioForm.get("precio_servicio")?.value,
        stock: any  = 0,
        vistas: any  = 0,
        estado: any  = this.servicioForm.get("estado_servicio")?.value;

    try {
      const formdata = new FormData();

      this.archivo1.forEach((element: any) => {
        formdata.append('url_imagen', this.archivo1[0]);
      });

      formdata.append('ip', ip);
      formdata.append('nombre', nombre);
      formdata.append('precio', precio);
      formdata.append('stock', stock);
      formdata.append('vistas', vistas);
      formdata.append('estado', estado);

      this.administracionServices
          .crearServicio(formdata)
          .subscribe((response: any ) => {
            if(response.status == 200) {
              this.showSuccess(response.message);
              this.getServiciosInicio();
               
              this.servicioForm.patchValue({
                codigo_servicio: "",
                nombre_servicio: "",
                precio_servicio: "",
                estado_servicio: "Activo",
                imagen_servicio: "",
              })
            }
            else {
              this.showError(response.message);
            }
          })
    }
    catch(e) {

    }
  }

  imageUpload2(e: any  ): void {
    this.archivo2 = [];
    const target = e.target as HTMLInputElement;
    const archivo = e.target.files[0];
  
    // this.extraerBase64(archivo).then((imagen: any ) => {
    //   this.previsualizacion2 = imagen.base;
    // });
  
    this.archivo2.push(archivo);
  }

  crearPatrocinio() {
    let nombre: any = this.patrocinioForm.get("empresa_patrocinio")?.value,
        descripcion: any = this.patrocinioForm.get("descripcion_patrocinio")?.value,
        valor: any = this.patrocinioForm.get("valor_patrocinio")?.value;

    try {
      const formdata = new FormData();
      this.archivo2.forEach((element: any) => {
        formdata.append('logo', this.archivo2[0]);
      });

      formdata.append('nombre', nombre);
      formdata.append('descripcion', descripcion);
      formdata.append('valor', valor);

      this.administracionServices
          .crearPatrocinio(formdata)
          .subscribe((response: any ) => {
            if(response.status == 200) {
              this.showSuccess(response.message);
              this.getPatrocinios();

              this.patrocinioForm.patchValue({
                codigo_patrocinio: "",
                empresa_patrocinio: "",
                logo_patrocinio: "",
                valor_patrocinio: "",
                descripcion_patrocinio: "",
              });
            }
            else {
              this.showError(response.message);
            }
          })
    }
    catch(e) {

    }
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
