import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterpageService {

  private baseUrl = 'https://rickandmortyapi.com/api/character'


  constructor(private http: HttpClient) {}

  getItems(page: number): Observable<any> {
    const url = `${this.baseUrl}/?page=${page}`;
    console.log('URL solicitada:', url);  // Verifica que la URL se construya correctamente
    return this.http.get<any>(url);
  }


}
