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
    import('./zonasport/iniciarsesion/iniciarsesion.component').then((c) => c.IniciarsesionComponent) 
  },

  // RUTAS DE ADMINISTRACION ZONA SPORT
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
    import('./zonasport/fotografias/fotografias.component').then((c) => c.FotografiasComponent) 
  },

  // RUTAS DE ADMINISTRACION
  {
    path: 'administracion/configuracion',
    loadComponent: () => 
    import('./administracion/configuracionevento/configuracionevento.component').then((c) => c.ConfiguracioneventoComponent) 
  },
  {
    path: 'administracion/inscripciones',
    loadComponent: () => 
    import('./administracion/inscripciones/inscripciones.component').then((c) => c.InscripcionesComponent) 
  },
  {
    path: 'administracion/deportistas',
    loadComponent: () => 
    import('./administracion/deportistas/deportistas.component').then((c) => c.DeportistasComponent) 
  },
  {
    path: 'administracion/pedidos',
    loadComponent: () => 
    import('./administracion/pedidos/pedidos.component').then((c) => c.PedidosComponent) 
  },
  {
    path: 'administracion/reportes',
    loadComponent: () => 
    import('./administracion/reportes/reportes.component').then((c) => c.ReportesComponent) 
  },

];
