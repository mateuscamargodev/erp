import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from 'src/app/interfaces/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  public endpoint = environment.API;
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Cliente[]>(this.endpoint + "clientes");
  }

  selecionar(id:string) {
    return this.http.get<Cliente>(this.endpoint + "clientes/" + id);
  }

  remover(id: number){
    return this.http.delete(this.endpoint + "clientes/" + id);
  }
}
