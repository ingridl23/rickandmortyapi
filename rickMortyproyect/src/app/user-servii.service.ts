import { Injectable } from '@angular/core';


import { BehaviorSubject } from 'rxjs';
//maneja la logica del carrito




@Injectable({
  providedIn: 'root'
})
export class UserServiiService {
  
  constructor() { }
  
    private _usersList: CharacterData[] = [];
  usersList : BehaviorSubject< any [] >  = new BehaviorSubject(this._usersList);
}
