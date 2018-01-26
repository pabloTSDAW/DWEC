import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
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

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    $('.cargar').hide();
    this._ServicioService.seturl('games');
    this._ServicioService.peticion('games', 20, this.pagina).subscribe(
      data => {
        console.log(data);
        this.juegos = data.results;
        $('#fountainG').hide();
        $('.cargar').show();
      }
    );
  }

  cargarMas() {
    this.pagina = this.pagina + 20;
    this._ServicioService.peticion('games', this.pagina).subscribe(
      data => {
        console.log(data);
        this.juegos = this.juegos.concat(data.results);
      }
    );
  }

}
