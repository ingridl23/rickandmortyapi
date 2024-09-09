import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

 profileId! : string;
 character: any = {};

  constructor (private activatedRoute: ActivatedRoute, private http: HttpClient){   }


ngOnInit(): void {
   this.profileId = this.activatedRoute.snapshot.paramMap.get('id')!;  //de la url actual (lo que obtengo , lo que viene)

   this.http.get('https://rickandmortyapi.com/api/character/'+ this.profileId)
   .subscribe(res => {
    this.character= res;

   })
  }
   

}
