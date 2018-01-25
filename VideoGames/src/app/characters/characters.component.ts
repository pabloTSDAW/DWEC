import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { FiltroPipe} from '../filtro.pipe';
import {slideToDown} from '../router.animation';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class CharactersComponent implements OnInit {
  personajes: any;
  pagina: number = 0;
  pj: any;
  nombre: string;
  filtroPersonaje;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    $('.cargar').hide();
    $('.busqueda').hide();
    this._ServicioService.seturl('characters');
    this._ServicioService.peticion('characters', this.pagina).subscribe(
      data => {
        console.log(data);
        this.personajes = data.results;
        $('#fountainG').hide();
        $('.cargar').show();
        $('.busqueda').show();
      }
    );
  }

  cargarMas() {
    this.pagina = this.pagina + 20;
    this._ServicioService.peticion('characters', this.pagina).subscribe(
      data => {
        this.personajes = this.personajes.concat(data.results);
      }
    );
  }

  muestra(opcion){
    // this._ServicioService.setvariable(opcion);
    this._ServicioService.buscarPersonaje(opcion).subscribe(
    data=>{
      this._ServicioService.setvariable(data);
    }
  )
  }

}
