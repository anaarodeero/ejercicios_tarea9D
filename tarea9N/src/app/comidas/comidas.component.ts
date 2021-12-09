import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  comidas:string[] = ["macarrones", "paella", "ensalada","filete de ternera", "tortilla de patatas", "arroz tres delicias", "burrito", "asado de pollo"];

  borrarComida(){
    this.comidas = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
