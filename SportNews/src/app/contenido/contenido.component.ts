import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  articulos: any;
  pagina: number = 1;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit(): void {
   // Make the HTTP request:
   this._ServicioService.peticion(this.pagina).subscribe(
    data => {
      this.articulos = data.articles;
      console.log(this.articulos);
      console.log(data.articles);
    }
  )
   }

   cargarNoticias(){
     this.pagina++;
     this._ServicioService.peticion(this.pagina).subscribe(
      data => {
        this.articulos = this.articulos.concat(data.articles);
        console.log(this.articulos);
        console.log(data.articles);
      }
    )
   }
}
