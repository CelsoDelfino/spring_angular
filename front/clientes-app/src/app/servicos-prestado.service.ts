import { servicoPrestadoBusca } from './servicos-prestado/servico-prestado-lista/servicoPrestadoBusca';
import { servicoPrestado } from './servicos-prestado/servicoPrestado';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicosPrestadoService {
  constructor(private http: HttpClient) {}

  salvar(servicoPrestado: servicoPrestado): Observable<servicoPrestado> {
    return this.http.post<servicoPrestado>(
      'http://localhost:8080/api/servicos-prestados',
      servicoPrestado

    );
  }

  buscar(nome: string, mes: number): Observable<servicoPrestadoBusca[]> {
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');
    const url =
      'http://localhost:8080/api/servicos-prestados' +
      '?' +
      httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
