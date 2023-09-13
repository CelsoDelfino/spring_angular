import { servicoPrestado } from './servicos-prestado/servicoPrestado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosPrestadoService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: servicoPrestado): Observable<servicoPrestado>{
    return this.http.post<servicoPrestado>( 'http://localhost:8080/api/servicos-prestados', servicoPrestado )
  }
}
