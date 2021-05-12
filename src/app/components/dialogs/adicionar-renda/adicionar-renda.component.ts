import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-renda',
  templateUrl: './adicionar-renda.component.html',
  styleUrls: ['./adicionar-renda.component.css']
})
export class AdicionarRendaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdicionarRendaComponent>  
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
