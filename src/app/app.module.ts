import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DespesaFixaCreateComponent } from './components/despesasFixas/despesa-fixa-create/despesa-fixa-create.component';
import { DespesaFixaReadComponent } from './components/despesasFixas/despesa-fixa-read/despesa-fixa-read.component';
import { DespesaFixaUpdateComponent } from './components/despesasFixas/despesa-fixa-update/despesa-fixa-update.component';
import { DespesaFixaDeleteComponent } from './components/despesasFixas/despesa-fixa-delete/despesa-fixa-delete.component';
import { DespesaVarCreateComponent } from './components/despesasVar/despesa-var-create/despesa-var-create.component';
import { DespesaVarReadComponent } from './components/despesasVar/despesa-var-read/despesa-var-read.component';
import { DespesaVarUpdateComponent } from './components/despesasVar/despesa-var-update/despesa-var-update.component';
import { DespesaVarDeleteComponent } from './components/despesasVar/despesa-var-delete/despesa-var-delete.component';
import { RendaCreateComponent } from './components/renda/renda-create/renda-create.component';
import { RendaReadComponent } from './components/renda/renda-read/renda-read.component';
import { RendaUpdateComponent } from './components/renda/renda-update/renda-update.component';
import { RendaDeleteComponent } from './components/renda/renda-delete/renda-delete.component';
import { ChartsModule } from 'ng2-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartistModule } from 'ng-chartist';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { from } from 'rxjs';
import { TabelaComponent } from './tabela/tabela.component';
import { TabelavarComponent } from './tabelavar/tabelavar.component';
import { GraficoRealComponent } from './components/grafico-real/grafico-real.component';
import { AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService } from '@syncfusion/ej2-angular-charts';
import { GraficoIdealComponent } from './components/grafico-ideal/grafico-ideal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdicionarEconomiaComponent } from './components/dialogs/adicionar-economia/adicionar-economia.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DespesaFixaCreateComponent,
    DespesaFixaReadComponent,
    DespesaFixaUpdateComponent,
    DespesaFixaDeleteComponent,
    DespesaVarCreateComponent,
    DespesaVarReadComponent,
    DespesaVarUpdateComponent,
    DespesaVarDeleteComponent,
    RendaCreateComponent,
    RendaReadComponent,
    RendaUpdateComponent,
    RendaDeleteComponent,
    DashboardComponent,
    TabelaComponent,
    TabelavarComponent,
    GraficoRealComponent,
    GraficoIdealComponent,
    AdicionarEconomiaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatCardModule,
    ChartsModule,
    MatTooltipModule,
    ChartistModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    AccumulationChartModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,


  ],
  providers: [PieSeriesService, AccumulationDataLabelService, AccumulationLegendService,  AccumulationTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
