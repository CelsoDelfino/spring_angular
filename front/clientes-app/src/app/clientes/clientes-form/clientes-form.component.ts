import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../cliente'
import { ClientesService } from 'src/app/clientes.service';
import { error, param } from 'jquery';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  erros: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params: any = this.activateRoute.params;
    if (params && params.value && params.value.id) {
      this.id = params.value.id;
      this.service.getClienteById(this.id)
        .subscribe(response => this.cliente = response)
    }
  }

  editarUsuario(){
    this.router.navigate([`clientes-form/${this.id}`])
  }


  onSubmit() {

    if(this.id){
      this.service.atualizar(this.cliente).subscribe( response => {
        this.success = true;
        this.erros = [];
      },
      errorResponse =>{
        this.erros = ['Erro ao atualizar o cliente'];
      })

    }else{
      this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.erros = [];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.erros = errorResponse.error.errors;
      }
      )
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes']);
  }


}
