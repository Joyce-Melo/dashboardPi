import { RendaService } from './../../../services/renda.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-adicionar-renda',
  templateUrl: './adicionar-renda.component.html',
  styleUrls: ['./adicionar-renda.component.css']
})
export class AdicionarRendaComponent implements OnInit {
  //public rendaForm!: FormGroup;


  constructor(
    //private fb: FormBuilder,
   // private rest: RendaService,
    public dialogRef: MatDialogRef<AdicionarRendaComponent>  
  ) { }

  ngOnInit(): void {
    //this.rendaForm = this.fb.group({
      renda: ['', [Validators.required]]
    //})
  }

  /*createRenda(){ //passaremos o input do html para o metodo post que criamos no service
    this.rest.postRenda(this.rendaForm.value).subscribe(result =>{});
    this.dialogRef.close();
    this.rendaForm.reset();

  }*/
  

  cancel(): void {
    this.dialogRef.close();
   // this.rendaForm.reset();
  }

}
