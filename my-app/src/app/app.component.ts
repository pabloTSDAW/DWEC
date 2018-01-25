import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mi primera web';
  segundaVariable = 'pablo';
  variableServicio;

  constructor(private _ServicioService:ServicioService){}

  ngOnInit(){
  this._ServicioService.variable$.subscribe(data=>{
    this.variableServicio = data;
    })
  }
}
