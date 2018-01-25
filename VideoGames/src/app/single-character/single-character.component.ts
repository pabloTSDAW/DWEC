import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {slideToRight} from '../router.animation';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class SingleCharacterComponent implements OnInit {
  id: any;
  personaje: any;

  constructor(private _ServicioService: ServicioService) { }

  ngOnInit() {
    this._ServicioService.seturl('characters/character');
    this._ServicioService.pj$.subscribe(
      data => {
          console.log(data);
          this.personaje = data.results;
          this._ServicioService.seturl('characters/character' + this.personaje.guid);
          }
        );
  }

}
