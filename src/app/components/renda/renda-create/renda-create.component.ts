import { Renda } from './../renda.model';
import { RendaService } from './../../../services/renda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renda-create',
  templateUrl: './renda-create.component.html',
  styleUrls: ['./renda-create.component.css']
})
export class RendaCreateComponent implements OnInit {

  renda: any;


  constructor(private RendaService: RendaService) { }

  ngOnInit(): void {
  }

  saveRenda() {
    this.RendaService.createRenda(this.renda).subscribe(res => {
    })

  }

}
