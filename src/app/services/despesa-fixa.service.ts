import { DespesaFixa } from './../components/despesasFixas/despesaFixa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class DespesaFixaService {

  baseUrl = "http://localhost:3030/despesafixas"

  constructor(private snackBar: MatSnackBar ,private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  create(despesafixa: DespesaFixa): Observable<DespesaFixa>{  
     
    return this.http.post<DespesaFixa>(this.baseUrl, despesafixa) 
  }

  read(): Observable<DespesaFixa[]> {
    return this.http.get<DespesaFixa[]>(this.baseUrl)
  }

  readById(id: string): Observable<DespesaFixa>{
    const url = `${this.baseUrl}`
    return this.http.get<DespesaFixa>(url)
  }

  update(despesafixa: DespesaFixa): Observable<DespesaFixa> {
    const url = `${this.baseUrl}/${despesafixa}`
    return this.http.put<DespesaFixa>(url, despesafixa)
  }
}


