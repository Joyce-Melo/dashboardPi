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
import { DashComponent } from './dash/dash.component'
import { CardComponent } from './card/card.component';
import { GastosReaisComponent } from './charts/gastos-reais/gastos-reais.component';
import { GastosIdeaisComponent } from './charts/gastos-ideais/gastos-ideais.component';


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
    DashComponent,
    CardComponent,
    GastosReaisComponent,
    GastosIdeaisComponent,
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
