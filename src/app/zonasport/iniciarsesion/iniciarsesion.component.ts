import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IniciarsesionService } from '../services/iniciarsesion.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css',
  providers: [MessageService],
})
export class IniciarsesionComponent implements OnInit {

  constructor(
    private iniciarsesionServices: IniciarsesionService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.cargaPagina();
  }

  spinner = true;
  typepassword = 'password';
  ocultarhidden = true;
  verhidden = false
  
  iniciarSesionForm = new FormGroup({
    correo_iniciar: new FormControl('', Validators.required),
    contrasena_iniciar: new FormControl('', Validators.required),
  });

  cargaPagina() {
    const intervalId = setInterval(() => {
      this.spinner = false;
    }, 100); // Ejecuta la función cada 100 milisegundos

    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000); // Detiene la ejecución después de 3 segundos

    const intervalId2 = setInterval(() => {
      this.spinner = true;
    }, 3000); // Ejecuta la función cada 100 milisegundos

    setTimeout(() => {
      clearInterval(intervalId2);
    }, 4000); // Detiene la ejecución después de 3 segundos
  }

  iniciarSesion() {
    let correo = this.iniciarSesionForm.get("correo_iniciar")?.value,
        contrasena = this.iniciarSesionForm.get("contrasena_iniciar")?.value;

    this.iniciarsesionServices
        .iniciarSesion(correo, contrasena)
        .subscribe((response: any ) => {
          if(response.status == 200) {
            sessionStorage.setItem('token', response.token);
            localStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('documento', response.users.documento.toUpperCase());
            localStorage.setItem('nombre', response.users.nombre.toUpperCase());
            localStorage.setItem('apellido', response.users.apellido.toUpperCase());
            localStorage.setItem('email', response.users.email.toUpperCase());
            localStorage.setItem('rol', response.users.rol_usuario.toUpperCase());
            localStorage.setItem('estado', response.users.estado.toUpperCase());

            this.showSuccess()
            if(response.users.rol_usuario == "Deportista") {
              setTimeout(() => {
                this.router.navigate(['/', 'zonasport']);
                this.spinner = true;
              }, 3000)
            }
            else if(response.users.rol_usuario == "Administrador") {
              setTimeout(() => {
                this.router.navigate(['administracion/configuracion']);
                this.spinner = true;
              }, 3000)
            }
          }
          else {
            let message = "El usuario y/o contraseña ingresado son invalidos."
            this.showError(message);
          }
        });
  }

  verContrasena() {
    this.typepassword = 'text';
    this.verhidden = true;
    this.ocultarhidden = false;
  }

  ocultarContrasena() {
    this.typepassword = 'password';
    this.verhidden = false;
    this.ocultarhidden = true;
  }

  showError(message: string) {
    
    this.messageService.add(
      {
        severity: 'error',
        summary: 'EventSoft Aviso',
        detail: message
      }
    );
  }

  showSuccess() {
    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    this.messageService.add({
      severity: 'success',
      summary: 'Bienvenido a EventSoft  !!', 
      detail: nombre?.toLocaleUpperCase() + '  ' +  apellido?.toLocaleUpperCase() + ' ' 
    });
  }
}
