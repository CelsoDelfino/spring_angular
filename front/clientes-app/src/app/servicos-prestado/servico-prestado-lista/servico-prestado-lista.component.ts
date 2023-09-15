import { Component, OnInit } from '@angular/core';
import { servicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicosPrestadoService } from 'src/app/servicos-prestado.service';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css'],
})
export class ServicoPrestadoListaComponent implements OnInit {
  nome: string;
  mes: number;
  meses: number[];
  lista: servicoPrestadoBusca[];
  message: string;

  constructor(private service: ServicosPrestadoService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {}

  consultar() {
    this.service
      .buscar(this.nome, this.mes)
      .subscribe( response => {
        this.lista = response;
        if(this.lista.length <= 0){
          this.message = "Nenhum registro encontrado";
        }else{
          this.message = '';
        }
      });
  }
}
