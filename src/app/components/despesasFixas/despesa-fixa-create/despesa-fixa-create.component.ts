import { Component, OnInit } from '@angular/core';
import { DespesaFixaService } from 'src/app/services/despesa-fixa.service';
import { DespesaFixa } from '../despesaFixa.model';

@Component({
  selector: 'app-despesa-fixa-create',
  templateUrl: './despesa-fixa-create.component.html',
  styleUrls: ['./despesa-fixa-create.component.css']
})
export class DespesaFixaCreateComponent implements OnInit {

despesaFixa : DespesaFixa = {
  aluguel: 0,
  transporte:0,                
  internet:0,
  alimentacao:0 ,
  agua: 0,
  luz: 0,
  academia: 0,
  telefonia: 0
}

  constructor(private despesaService: DespesaFixaService) { }

  ngOnInit(): void {

  }

  createDespesaFixa(): void {
    this.despesaService.create(this.despesaFixa).subscribe(() =>
    this.despesaService.showMessage('Valor inserido com sucesso'))
  }

}
