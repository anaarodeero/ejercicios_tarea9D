import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {

  flores:string[] = ["orquidea", "margarita", "girasol","azalea", "dalia", "hortensia", "lirio", "azucena"];

  borrarFlor(){
    this.flores = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
