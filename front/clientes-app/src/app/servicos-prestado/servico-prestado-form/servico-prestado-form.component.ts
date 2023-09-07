import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { servicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: servicoPrestado;

  constructor(private clientesService: ClientesService){
    this.servico = new servicoPrestado();
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe( response => this.clientes = response);
  }

  onSubmit(){
    console.log(this.servico);
  }

}
