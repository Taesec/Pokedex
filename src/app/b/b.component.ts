import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../services/pokeservice.service';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  public folder:Array<any> = [] 
  public estadisticas:Array<any> = []
  public apariencia:Array<any> = [] 
  public altura:String =""
  public peso:String =""
  public myimages:String =""

  constructor(private pokeservice:PokeserviceService) { 
 
  }

  ngOnInit(): void {  

    this.pokeservice.pokeinfo.subscribe( data =>{
    //  console.log('Recibiendo data...',data)
      

      this.pokeservice.getInfo(data.data).subscribe((resp:any)=>{
      //  console.log(resp)
      //  console.log('aca')


        this.folder=(resp.types)
      //  console.log(this.folder)
        
        this.estadisticas=(resp.stats)
      //  console.log(this.estadisticas)

      //  this.estadisticas=(this.folder)
      //  console.log(this.estadisticas)

        this.altura=(resp.height)
      //  console.log(this.altura)

        this.peso=(resp.weight)
      //  console.log(this.peso)

        this.myimages=(resp.sprites.front_default)
      //  console.log(this.myimages)

      })

    } )
    
  }

}
