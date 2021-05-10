import { DespesaFixa } from './../components/despesasFixas/despesaFixa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaFixaService {

  baseUrl = "http://localhost:3030/"

  constructor(private http: HttpClient) { }




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


