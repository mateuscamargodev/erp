import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private route: Router, private clienteService: ClienteService){
    this.clientes = [];
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  remove(id: number){
    let toRemove = confirm("Deseja remover este cliente?");
    if(toRemove) {
      this.clienteService.remover(id).subscribe(dados => this.loadClientes());      
    }
  }

  loadClientes() {
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }
}
