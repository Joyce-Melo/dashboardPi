import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DespesasVarEditComponent } from '../components/dialogs/despesas-fixa-edit/despesas-var-edit.component';
import { DespesasFixasCreateComponent } from '../components/dialogs/despesas-fixas-create/despesas-fixas-create.component';
import { TabelaDataSource, TabelaItem } from './tabela-datasource';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabelaItem>;
  dataSource: TabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['despesa', 'value', 'actions'];

  constructor(    public dialog: MatDialog
    ) {
    this.dataSource = new TabelaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(): void {
    const dialog_Ref = this.dialog.open(DespesasFixasCreateComponent, {
      minWidth: '400px',
    });

    dialog_Ref.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });


}
openDialogEdit(): void {
  const dialogRefEdit = this.dialog.open(DespesasVarEditComponent, {
    minWidth: '400px',
  });

  dialogRefEdit.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });


}
}
