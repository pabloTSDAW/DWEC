import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { FiltroPipe} from '../filtro.pipe';
import {slideToDown} from '../router.animation';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class GamesComponent implements OnInit {
  juegos: any;
  pagina: number = 0;
  filtroJuego;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    $('.cargar').hide();
    $('#fountainG').hide();
  }

  cargarMas() {
    this.pagina = this.pagina + 20;
    this._ServicioService.buscarJuegos(this.filtroJuego, this.pagina).subscribe(
      data => {
        console.log(data);
        this.juegos = this.juegos.concat(data.results);
      }
    );
  }

  buscar(opcion){
    $('#fountainG').show();
    $('.cargar').hide();
    this._ServicioService.buscarJuegos(opcion, this.pagina).subscribe(
      data=>{
        this.juegos = data.results;
        $('#fountainG').hide();
        $('.cargar').show();
      }
    )
  }

}
