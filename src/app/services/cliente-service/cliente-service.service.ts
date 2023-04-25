import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  public endpoint = ServiceService.apiUrl;

  constructor(private http: HttpClient) { }

  listar() {
    this.http.get(this.endpoint + "cliente").subscribe(resultado => console.log(resultado));
  }
}
