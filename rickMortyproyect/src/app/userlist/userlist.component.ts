import { Component, OnInit } from '@angular/core';
import { rymDataservice } from '../rymapi.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit {
 
  users:  any [] = [];

  
  
  constructor(  private rymappiservice :rymDataservice ){ //inyecciones de los servicios
      

}
ngOnInit(): void {
  this.llenarData();
}

llenarData(){


  this.rymappiservice.getAll().subscribe(users => { this.users = users

    console.log(this.users);
 } );
}
}
