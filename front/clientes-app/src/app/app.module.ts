import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { ClientesService } from './clientes.service';
import { ServicosPrestadoModule } from './servicos-prestado/servicos-prestado.module';
import { ServicosPrestadoService } from './servicos-prestado.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicosPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicosPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
