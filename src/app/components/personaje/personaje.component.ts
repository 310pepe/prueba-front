import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  load:boolean=false;
  info:any;
  personaje:any;
  
  constructor(private routerA:ActivatedRoute,
              private router:Router,
              private marverS:MarvelService) { 

                this.routerA.params.subscribe(params=>{

                  
                  this.getPer(params.id);
                  
                  
                })
              }

  ngOnInit(): void {
    
  }

  getPer(id:any)
  {
    this.marverS.getPersonaje(id).subscribe((resp)=>{
      if (resp.description)
      {
        this.personaje=resp;
      }else
      {
        resp.description='No tiene descripción';
        this.personaje=resp;
      }
      
      this.load=true;
      
      console.log(this.personaje);
      this.mostrarInfo('co');
      
    });
  }

  regresar()
  {
    this.router.navigate(['/home']);
  }

  mostrarInfo(para:string)
  {
    if(para==='co')
    {
      this.info=this.personaje.comics.items;
      console.log(this.info);
    }else
    {
      this.info=this.personaje.series.items;
      console.log(this.info);
    }
    
  }

  verMas(url:String)
  {
    this.router.navigate(['/info',url])
  }

}
