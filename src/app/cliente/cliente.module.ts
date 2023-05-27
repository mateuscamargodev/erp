import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ClienteEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ClienteModule { }
