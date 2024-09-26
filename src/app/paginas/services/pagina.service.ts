import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(
    private http: HttpClient
  ) { }

  getDepartamentos() {
    const url = "http://localhost:8000/api/getDepartamentos";

    return this.http.get(url);
  }

  getServiciosInicio() {
    const url = "http://localhost:8000/api/getServiciosInicio";

    return this.http.get(url);
  }

  getServicioId(codigo: any ) {
    const url = "http://localhost:8000/api/getServicioId";

    let params = new HttpParams().set("codigo", codigo);

    return this.http.get(url, { params });
  }

  CrearInscripcionesDetalle(datos: any, detalle: any ) {
    const url = "http://localhost:8000/api/CrearInscripcionesDetalle";

    return this.http.post(url, {
      nombre: datos[0].nombre,
      apellido: datos[0].apellido,
      tpdocumento: datos[0].tpdocumento,
      documento: datos[0].documento,
      departamento: datos[0].departamento,
      ciudad: datos[0].ciudad,
      direccion: datos[0].direccion,
      telefono: datos[0].telefono,
      correo: datos[0].correo,
      acompanantes: datos[0].acompanantes,
      rh: datos[0].rh,
      seguro_medico: datos[0].seguro_medico,
      fechanacimiento: datos[0].fechanacimiento,
      detalle_carrito: detalle,
      total: datos[0].total,
      envio: datos[0].envio,
      codigo_promocional: datos[0].codigo_promocional,
    });
  }

  canjearCodigoPromocional(codigo: any, documento: any) {

    const url = "http://localhost:8000/api/canjearCodigoPromocional";
    let params = new HttpParams().set("codigo", codigo).set("documento", documento);

    return this.http.get(url, { params });
    
  }
}
