import { Component, OnInit, Input } from '@angular/core';
import { PokeserviceService } from '../services/pokeservice.service';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})


export class AComponent implements OnInit {

  public pokemons:Array<any> = []
  public lista:Array<any> = []
  

  constructor(private pokeservice:PokeserviceService) { 

    this.pokeservice.getPokemon().subscribe((resp:any)=>{
    //  console.log(resp)
      this.pokemons=(this.lista = resp.results)
      
    })
  }


  ngOnInit(): void {
  }
  

  clicktodo(@Input() hola:string =""){
  //  console.log(hola);
    this.pokeservice.pokeinfo.emit({data:hola})
  }

}

