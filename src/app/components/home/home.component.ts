import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  personajes:any[]=[];
  constructor( private marvelS:MarvelService ) {

    this.marvelS.getPersonajes().subscribe((data:any)=>
    {
      console.log(data);
      this.personajes=data
      console.log(this.personajes);

    });

   }
  

}
