import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { userlist } from './userlist/userlist';


const URL= 'https://rickandmortyapi.com/api/character';



@Injectable({
  providedIn: 'root'
})
export class rymDataservice {
  
  constructor(private http : HttpClient) { }
/*
consume la api y devuelve un observable a la respuesta
*/
  public getAll(): Observable <any>{
   
    //como el fetch en js
 return  this.http.get<any>(URL);
 
  }
}


