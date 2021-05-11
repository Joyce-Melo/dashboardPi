import { DespesaVarService } from './../../../services/despesa-var.service';
import { Component, OnInit } from '@angular/core';
import { DespesaVariavel } from '../../despesasVar/despesaVar.model';
import { DespesaFixaService } from 'src/app/services/despesa-fixa.service';

@Component({
  selector: 'app-despesa-fixa-read',
  templateUrl: './despesa-fixa-read.component.html',
  styleUrls: ['./despesa-fixa-read.component.css']
})
export class DespesaFixaReadComponent implements OnInit {

  constructor(despesaService: DespesaFixaService ) { }

  ngOnInit(): void {
    
  }
    

}
