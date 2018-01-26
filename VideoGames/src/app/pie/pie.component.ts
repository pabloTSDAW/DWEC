import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  estilo;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.estilo$.subscribe(
      data => this.estilo = data;
    );
    console.log(this.estilo);
  }

}
