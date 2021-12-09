import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  meses: string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  mesBorrado: string | undefined = "";

  borrarMes(){
    this.mesBorrado = this.meses.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
