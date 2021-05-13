import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-economia',
  templateUrl: './adicionar-economia.component.html',
  styleUrls: ['./adicionar-economia.component.css']
})
export class AdicionarEconomiaComponent implements OnInit {

  constructor(
    public dialog_Ref: MatDialogRef<AdicionarEconomiaComponent>  
  ) { }

  ngOnInit(): void {
      valor_extra: ['', [Validators.required]]
  }

  

  cancel(): void {
    this.dialog_Ref.close();
  }

}
