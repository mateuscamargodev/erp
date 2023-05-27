import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  public endpoint = ServiceService.apiUrl;
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cliente[]>(this.endpoint + "/cliente");
  }

  remover(id: number){
    return this.http.delete(this.endpoint + "/cliente/" + id);
  }
}
