import { Component, OnInit } from '@angular/core';
import { MenuadminComponent } from "../../componentes/menuadmin/menuadmin.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [MenuadminComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent implements OnInit {

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
  });
}
