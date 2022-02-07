import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";
  public mostrar:Boolean=false

  constructor(private http:HttpClient ) { 
  //  console.log('Servicio Pokemon')
  }

  mostrarocultar(){
    this.mostrar=true;
  }
  getPokemon(){
        let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get(this.url, { headers: header});
  }

  getInfo( info:string ){
  //  console.log('Servicio InfPokemon')
  //  console.log(info)
    let head = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get(info, { headers: head});
  }

  @Output() pokeinfo: EventEmitter<any> = new EventEmitter();
  
  
}
