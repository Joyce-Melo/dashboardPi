import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-ideal',
  templateUrl: './grafico-ideal.component.html',
  styleUrls: ['./grafico-ideal.component.css']
})
export class GraficoIdealComponent implements OnInit {

  public data: Object[];
  public charTitle: string;
  public chartLabel: Object;
  public legend: Object;
  public tooltipSettings: Object;


  constructor() {
    this.charTitle = 'Recomendação de distribuicção de Gastos'
    this.data = [
     { name: 'Apple', value: 25, text:'25%'},
     { name: 'Orange', value: 25, text:'25%'},
     { name: 'Mango', value: 25, text:'25%'},
     { name: 'Pineapple', value: 25, text:'25%'},

    ];
    this.tooltipSettings = {
      enable: true
    };

    this.chartLabel ={
      visible: true,
      position: 'Inside',
      name: 'text'
    };
     this.legend = {
      visible: false,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    }
   }

  ngOnInit(): void {
  }

}
