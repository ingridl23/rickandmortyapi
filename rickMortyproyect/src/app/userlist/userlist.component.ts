import { Component, OnInit } from '@angular/core';
import { rymDataservice } from '../rymapi.service';
import { CharacterpageService } from '../characterpage.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit {
 
  users:  any [] = [];

 
  characterService: any;
  characters: any ;

  pages: number[] = [];

  items: any[] = [];
  currentPage = 1;
  
  
  totalItems!: number;
  itemsPerPage = 20; // La API de Rick and Morty devuelve 20 personajes por página.
Math: any;
  
  constructor(  private rymappiservice :rymDataservice, private characterpageService: CharacterpageService){ //inyecciones de los servicios
      

}
ngOnInit(): void {

  this.pages = Array.from({ length: Math.ceil(this.totalItems / this.itemsPerPage) }, (_, i) => i + 1);

  this.loadItems(this.currentPage);
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

loadItems(page: number): void {
  this.characterpageService.getItems(page).subscribe(data => {
    this.characters = data.results; // 'results' es la clave en la que se encuentran los personajes en la API de Rick and Morty
    this.totalItems = data.info.count; // 'count' es el total de personajes en la API
    this.currentPage = page;
  });


}
 

onPageChange(page: number): void {
  this.loadItems(page);
}




}