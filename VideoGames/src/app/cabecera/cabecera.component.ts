import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  ruta = 'Home';
  estilo;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.url$.subscribe(
      data => this.ruta = data;
    )
  }

  cambiarEstilo(){
    let variable = $('select').val();
    this._ServicioService.setestilo(variable);
    this._ServicioService.estilo$.subscribe(
      data => this.estilo = data;
    );
    console.log(this.estilo);
  }

}
