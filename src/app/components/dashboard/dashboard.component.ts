import { RendaCreateComponent } from './../renda/renda-create/renda-create.component';
import { DespesaFixa } from './../despesasFixas/despesaFixa.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import {MatTableDataSource} from '@angular/material/table';
import { DespesaFixaService } from 'src/app/services/despesa-fixa.service';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarRendaComponent } from '../dialogs/adicionar-renda/adicionar-renda.component';
import { AdicionarEconomiaComponent } from '../dialogs/adicionar-economia/adicionar-economia.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})


export class DashboardComponent implements OnInit {
  
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdicionarRendaComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  
  
  }
    openDialogEco(): void {
    const dialog_Ref = this.dialog.open(AdicionarEconomiaComponent,{
      minWidth: '400px'
    })

    
    dialog_Ref.afterClosed().subscribe(result => {
      console.log('This dialog was closed')
    });
  }

}
 