import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from 'src/app/services/cliente-service/cliente-service.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit(): void {
    this.clienteService.listar();
  }

}
