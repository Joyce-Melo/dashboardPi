import { RendaCreateComponent } from './../renda/renda-create/renda-create.component';
import { DespesaFixa } from './../despesasFixas/despesaFixa.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import {MatTableDataSource} from '@angular/material/table';
import { DespesaFixaService } from 'src/app/services/despesa-fixa.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})


export class DashboardComponent implements OnInit {
  @ViewChild("ganhos") ganhos: ElementRef | undefined;

  cadastrar() {
    console.log(this.ganhos)
  }

  
  constructor() { }
  ngOnInit(): void {
  }

}
 