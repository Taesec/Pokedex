import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  myimage:string ="assets/fondo.jpg"
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
