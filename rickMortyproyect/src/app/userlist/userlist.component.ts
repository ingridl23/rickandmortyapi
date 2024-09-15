import { Component, OnInit } from '@angular/core';
import { rymDataservice } from '../rymapi.service';
import { CharacterpageService } from '../characterpage.service';
import { ChangeDetectorRef } from '@angular/core';


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
  
  constructor(  private rymappiservice :rymDataservice, private characterpageService: CharacterpageService, private cdr: ChangeDetectorRef ){ //inyecciones de los servicios
      

}
ngOnInit(): void {

  this.pages = Array.from({ length: Math.ceil(this.totalItems / this.itemsPerPage) }, (_, i) => i + 1);

  this.llenarData();
  this.loadItems(this.currentPage);
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
    console.log('Datos recibidos:', data); // Verifica que los datos sean los esperados
    this.characters = data.results; // Actualiza los personajes
    this.totalItems = data.info.count; // Actualiza el número total de personajes
    this.currentPage = page; // Actualiza la página actual
    this.pages = Array.from({ length: Math.ceil(this.totalItems / this.itemsPerPage) }, (_, i) => i + 1); // Actualiza las páginas disponibles
 
    // Forzar la detección de cambios
    this.cdr.detectChanges();
  }, error => {
    console.error('Error al cargar personajes:', error); // Maneja cualquier error
  });


}
 

onPageChange(page: number): void {

   // Añadimos un chequeo para ver si se está llamando correctamente
   console.log('Página solicitada:', page); 

   if (page > 0 && page <= this.pages.length) {
     this.currentPage = page;  // Actualiza la página actual
     this.loadItems(page);      // Carga los nuevos personajes para la página seleccionada
   }
 // this.loadItems(page);
}




}