import { Renda } from './../components/renda/renda.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendaService {

  baseUrl = "http://localhost:3030/"


  constructor(
    private httpClient: HttpClient) { }



  //createRenda(renda: Renda): Observable<Renda>{  
     
  //  return this.httpClient.post<Renda>(this.baseUrl, renda) 
  //}

  update(renda: Renda): Observable<Renda> {
    const url = `${this.baseUrl}/${renda}`
    return this.httpClient.put<Renda>(url, renda)
  }

  public postRenda(renda:any): Observable<Renda>{
    return this.httpClient.post<any>(this.baseUrl, renda);
  }

}
