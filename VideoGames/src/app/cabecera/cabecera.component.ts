import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  ruta = 'Home';

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.url$.subscribe(
      data => this.ruta = data;
    )
  }

}
