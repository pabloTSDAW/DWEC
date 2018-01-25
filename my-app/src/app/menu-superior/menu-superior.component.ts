import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  dato: string='pepe';
  clicks = 0;

  clickeame(){
    this.clicks++;
  }

  constructor(public servicio:ServicioService){}

  ngOnInit(){}

  muestra(){
    this.servicio.setvariable(this.dato)


    // this.servicio.peticion().subscribe(
    //   data => console.log(data),
    //   error => console.log(error),
    //   () => console.log('Petición terminada')
    // );
  }


  // ngOnInit(): void {
  //  // Make the HTTP request:
  //  this.http.get('https://restcountries.eu/rest/v2/name/aruba?fullText=true').subscribe(data => {
  //    // Read the result field from the JSON response.
  //    console.log(data);
  //  });

}
