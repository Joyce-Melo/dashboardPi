import { Renda } from './../components/renda/renda.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendaService {

  baseUrl = "http://localhost:3030/"


  constructor(private http: HttpClient) { }



  create(renda: Renda): Observable<Renda>{  
     
    return this.http.post<Renda>(this.baseUrl, renda) 
  }

  read(): Observable<Renda[]> {
    return this.http.get<Renda[]>(this.baseUrl)
  }

  readById(id: string): Observable<Renda>{
    const url = `${this.baseUrl}`
    return this.http.get<Renda>(url)
  }

  update(renda: Renda): Observable<Renda> {
    const url = `${this.baseUrl}/${renda}`
    return this.http.put<Renda>(url, renda)
  }
}
