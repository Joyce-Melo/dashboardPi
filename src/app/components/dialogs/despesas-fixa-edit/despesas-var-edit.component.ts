import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-despesas-var-edit',
  templateUrl: './despesas-var-edit.component.html',
  styleUrls: ['./despesas-var-edit.component.css']
})
export class DespesasVarEditComponent implements OnInit {

  constructor(    public dialog_Ref: MatDialogRef<DespesasVarEditComponent>  
    ) { }

    ngOnInit(): void {
      despesasFixas: ['', [Validators.required]]
  }

  

  cancel(): void {
    this.dialog_Ref.close();
  }

}
