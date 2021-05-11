import { DespesaVariavel } from './../../components/despesasVar/despesaVar.model';
import { DespesaFixa } from './../../components/despesasFixas/despesaFixa.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-gastos-ideais',
  templateUrl: './gastos-ideais.component.html',
  styleUrls: ['./gastos-ideais.component.css']
})
export class GastosIdeaisComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true })
  elemento!: ElementRef;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type:'pie',
      data: {
        labels: ["Despesas Fixa", "Despesas Varaiaveis"],
        datasets: [
          {
            data:[1,2,3,4,5,6]
          }
        ]
      }
    });
  }

}
