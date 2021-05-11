import { Component } from '@angular/core';
import { GastosReaisService } from './charts/gastos-reais/gastos-reais.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardPI';

  constructor(private_gastos: GastosReaisService) {}

  ngOnInit() {

  }
}
