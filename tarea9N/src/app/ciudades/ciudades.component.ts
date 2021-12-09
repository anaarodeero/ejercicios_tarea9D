import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades:string[] = ["Madrid", "Murcia", "Alicante", "Teruel", "Barcelona", "Valencia", "Cadiz", "Sevilla"];
  ciudadesBorradas:string[] = [];

  borrarCiudad(){
    var ciudadBorrada = this.ciudades.pop()!;
    this.ciudadesBorradas.push(ciudadBorrada);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
