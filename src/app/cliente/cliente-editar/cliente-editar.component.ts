import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  editar(form: NgForm){
    let nome = form.value;
  }
}
