import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosAdministrador(){
    const url = "http://localhost:8000/api/getUsuariosAdministrador";

    return this.http.get(url);
  }

  getUsuariosDeportistas() {
    const url = "http://localhost:8000/api/getUsuariosDeportistas";

    return this.http.get(url);
  }

  codigosPromocionales() {
    const url = "http://localhost:8000/api/codigosPromocionales";

    return this.http.get(url);
  }

  getPatrocinios() {
    const url = "http://localhost:8000/api/getPatrocinios";

    return this.http.get(url);
  }

  getServiciosInicio() {
    const url = "http://localhost:8000/api/getServiciosInicio";

    return this.http.get(url);
  }

  getInscripciones()  {
    const url = "http://localhost:8000/api/getInscripciones";

    return this.http.get(url);
  }

  getDetalleInscripciones(codigo: any )  {
    const url = "http://localhost:8000/api/getDetalleInscripciones";
    let params = new HttpParams().set("codigo", codigo);
    return this.http.get(url, { params });
  }

  getDatosInscripcion(documento: any ) {
    const url = "http://localhost:8000/api/getDatosInscripcion";
    let params = new HttpParams().set("documento", documento);

    return this.http.get(url, { params });
  }

  crearRegalo(datos: any ) {
    const url = "http://localhost:8000/api/crearRegalo";

    return this.http.post(url, {
      codigo_promocional: datos[0].codigo_promocional,
      precio: datos[0].precio,
      estado: datos[0].estado,
      documento: datos[0].documento,
    });
  }

  crearServicio(formdata: FormData) {
    const url = "http://localhost:8000/api/crearServicio";

    return this.http.post(url, formdata);
  }

  crearPatrocinio(formdata: FormData) {
    const url = "http://localhost:8000/api/crearPatrocinio";

    return this.http.post(url, formdata);
  }

  entregaKits(tpdocumento: any, documento: any) {
    const url = "http://localhost:8000/api/EntregaKits";

    return this.http.post(url, {
      tpdocumento: tpdocumento,
      documento: documento
    });
  }

  cambiarEstadoPedido(tpdocumento: any, documento: any, estado: any) {
    const url = "http://localhost:8000/api/cambiarEstadoPedido";

    return this.http.post(url, {
      tpdocumento: tpdocumento,
      documento: documento,
      estado: estado
    });
  }

  crearUsuarios(datos: any ) {
    const url = "http://localhost:8000/api/crearUsuario";

    return this.http.post(url, {
      documento: datos[0].documento,
      nombre: datos[0].nombre,
      apellido: datos[0].apellido,
      telefono: datos[0].telefono,
      correo: datos[0].correo,
    });
  }
}
