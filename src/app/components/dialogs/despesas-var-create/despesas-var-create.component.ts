import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-despesas-var-create',
  templateUrl: './despesas-var-create.component.html',
  styleUrls: ['./despesas-var-create.component.css']
})
export class DespesasVarCreateComponent implements OnInit {

  constructor(
    public dialog_Ref: MatDialogRef<DespesasVarCreateComponent>  
  ) { }

  ngOnInit(): void {
      despesasVar: ['', [Validators.required]]
  }

  cancel(): void {
    this.dialog_Ref.close();
  }
}
