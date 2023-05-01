import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public static apiUrl: string = "http://localhost:8080";
  constructor() { }
}
