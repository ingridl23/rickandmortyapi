import { Component } from '@angular/core';
import { rymDataservice } from '../rymapi.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
 
  users:  CharacterData[] = [];

  
  
  constructor( 
    private rymDataservice : rymDataservice ){ //inyecciones de los servicios
      

}
ngOnInit(): void {
  
  this.rymDataservice.getAll().subscribe(users => this.users = users);
  console.log(this.users);

}
}
