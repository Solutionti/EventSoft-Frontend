import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
    import('./paginas/inicio/inicio.component').then((c) => c.InicioComponent) 
  },
  {
    path: 'carrito',
    loadComponent: () => 
    import('./paginas/carrito/carrito.component').then((c) => c.CarritoComponent) 
  },
  {
    path: 'inscripcion',
    loadComponent: () => 
    import('./paginas/inscripcion/inscripcion.component').then((c) => c.InscripcionComponent) 
  },
  {
    path: 'detallecompra',
    loadComponent: () => 
    import('./paginas/detallecompra/detallecompra.component').then((c) => c.DetallecompraComponent) 
  },
  {
    path: 'iniciarsesion',
    loadComponent: () => 
    import('./paginas/iniciarsesion/iniciarsesion.component').then((c) => c.IniciarsesionComponent) 
  },
];
