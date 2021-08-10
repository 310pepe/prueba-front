import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url='http://gateway.marvel.com/v1/public/characters?apikey=e10449344c3ed4d23dbc39c2bf657aa8&hash=ac9cd13f55ac10371645a0126b7f009c&ts=abcdefghijk';

  constructor( private http:HttpClient ) { }

  

  getPersonajes()
  {
    return this.http.get(`${this.url}`);
  }

}
