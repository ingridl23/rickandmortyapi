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

/*
llenarData() {
  this.rymappiservice.getAll().subscribe(response => {
    this.users = response.results; // Accediendo al array de personajes
    console.log(this.users);
  });  //codigo inicial antes de darme cuenta que era mejor controlar de donde venia el maldito error que no dejaba acceder a los datos de la api =)
}*/


llenarData() {
  this.rymappiservice.getAll().subscribe(
    response => {
      this.users = response.results;
      console.log(this.users); // Verifica que los datos se reciban correctamente
    },
    error => {
      console.error('Error al obtener los datos:', error);
    }
  );
}

}

