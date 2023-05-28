import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  public idControl = new FormControl('');
  public nomeControl = new FormControl('');
  public dataNascimentoControl = new FormControl('');

  constructor(private route: ActivatedRoute, private service: ClienteService) {}

  ngOnInit(): void {
    let id:string = this.route.snapshot.params['id'];
    if(id != null && id.length > 0) {
      this.service.selecionar(id).subscribe(data => {
        this.idControl = new FormControl(data.id);
        this.nomeControl = new FormControl(data.nome);
        this.dataNascimentoControl = new FormControl(data.dataNascimento);
      });
    }
    
  }

  editar(){
    console.log('Teste', this.nomeControl);
  }
}
