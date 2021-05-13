import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-despesas-fixas-edit',
  templateUrl: './despesas-fixas-edit.component.html',
  styleUrls: ['./despesas-fixas-edit.component.css']
})
export class DespesasFixasEditComponent implements OnInit {

  constructor(    public dialog_Ref: MatDialogRef<DespesasFixasEditComponent>  
    ) { }

 
 ngOnInit(): void {
    despesasFixas: ['', [Validators.required]]
}

cancel(): void {
  this.dialog_Ref.close();
}

}


