import { ClienteEditarComponent } from './cliente/cliente-editar/cliente-editar.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';

const routes: Routes = [
  {path: "cliente", component: ClienteListComponent},
  {path: "editar/:id", component: ClienteEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
