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
    path: 'inscripcion/:id',
    loadComponent: () => 
    import('./paginas/inscripcion/inscripcion.component').then((c) => c.InscripcionComponent) 
  },
  {
    path: 'detallecompra',
    loadComponent: () => 
    import('./paginas/detallecompra/detallecompra.component').then((c) => c.DetallecompraComponent) 
  },
  {
    path: 'mensajefinal',
    loadComponent: () => 
    import('./paginas/mensajefinal/mensajefinal.component').then((c) => c.MensajefinalComponent) 
  },

  {
    path: 'iniciarsesion',
    loadComponent: () => 
    import('./paginas/iniciarsesion/iniciarsesion.component').then((c) => c.IniciarsesionComponent) 
  },

  // RUTAS DE ADMINISTRACION
  {
    path: 'tuqr',
    loadComponent: () => 
    import('./zonasport/tuqr/tuqr.component').then((c) => c.TuqrComponent) 
  },
  {
    path: 'zonasport',
    loadComponent: () => 
    import('./zonasport/zonadeportista/zonadeportista.component').then((c) => c.ZonadeportistaComponent) 
  },
  {
    path: 'fotografias',
    loadComponent: () => 
    import('./paginas/fotografias/fotografias.component').then((c) => c.FotografiasComponent) 
  },
];
