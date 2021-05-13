import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-despesas-fixas-create',
  templateUrl: './despesas-fixas-create.component.html',
  styleUrls: ['./despesas-fixas-create.component.css']
})
export class DespesasFixasCreateComponent implements OnInit {

  constructor(
    public dialog_Ref: MatDialogRef<DespesasFixasCreateComponent>  
  ) { }

  ngOnInit(): void {
      despesasFixas: ['', [Validators.required]]
  }

  

  cancel(): void {
    this.dialog_Ref.close();
  }

}
