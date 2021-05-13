import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DespesasVarCreateComponent } from '../components/dialogs/despesas-var-create/despesas-var-create.component';
import { TabelavarDataSource, TabelavarItem } from './tabelavar-datasource';

@Component({
  selector: 'app-tabelavar',
  templateUrl: './tabelavar.component.html',
  styleUrls: ['./tabelavar.component.css']
})
export class TabelavarComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabelavarItem>;
  dataSource: TabelavarDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['despesaVar', 'value', 'actions'];

  constructor(public dialog: MatDialog) {
    this.dataSource = new TabelavarDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(): void {
    const dialog_Ref = this.dialog.open(DespesasVarCreateComponent, {
      minWidth: '400px',
    });

    dialog_Ref.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogEdit(): void {
    const dialogRefEdit = this.dialog.open(DespesasVarCreateComponent, {
      minWidth: '400px',
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


}
}
