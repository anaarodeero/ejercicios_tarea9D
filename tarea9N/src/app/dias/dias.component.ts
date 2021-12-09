import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  dias:string[] = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  diaBorrado: string | undefined = "";

  borrarDia(){
    this.diaBorrado = this.dias.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
