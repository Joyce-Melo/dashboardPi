import { DespesaVariavel } from './../components/despesasVar/despesaVar.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaVarService {

  baseUrl = "http://localhost:3030/"


  constructor(private http: HttpClient) { }

  create(despesavariavel: DespesaVariavel): Observable<DespesaVariavel>{  
     
    return this.http.post<DespesaVariavel>(this.baseUrl, despesavariavel) 
  }

  read(): Observable<DespesaVariavel[]> {
    return this.http.get<DespesaVariavel[]>(this.baseUrl)
  }

  readById(id: string): Observable<DespesaVariavel>{
    const url = `${this.baseUrl}`
    return this.http.get<DespesaVariavel>(url)
  }

  update(despesavariavel: DespesaVariavel): Observable<DespesaVariavel> {
    const url = `${this.baseUrl}/${despesavariavel}`
    return this.http.put<DespesaVariavel>(url, despesavariavel)
  }
}

