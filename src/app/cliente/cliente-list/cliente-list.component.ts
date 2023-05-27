import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteServiceService } from 'src/app/services/cliente-service/cliente-service.service';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes: Cliente[];

  constructor(private clienteService: ClienteServiceService){
    this.clientes = [];
  }

  ngOnInit(): void {
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }

  remove(id: number){
    this.clienteService.remover(id).subscribe(dados => console.log(dados));
  }
}
