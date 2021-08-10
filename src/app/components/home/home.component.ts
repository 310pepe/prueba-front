import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  personajes:any[]=[];
  constructor( private marvelS:MarvelService,
               private router:Router) {

    this.marvelS.getPersonajes().subscribe((data:any)=>
    {
      console.log(data);
      this.personajes=data
      console.log(this.personajes);

    });

   }

   verPersonaje(id:number)
   {
     this.router.navigate(['/personaje',id])
   }
  

}
