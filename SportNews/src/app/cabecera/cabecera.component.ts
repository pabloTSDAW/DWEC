import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  equipos_espana: any = ['alaves', 'athletic', 'atletico', 'barcelona', 'betis', 'celta', 'deportivo', 'eibar', 'espanol',
              'getafe','girona', 'leganes', 'levante', 'madrid', 'malaga', 'palmas', 'real', 'sevilla',
              'valencia', 'villareal'];

  equipos_inglaterra: any = ['arsenal', 'bournemouth', 'brighton', 'burnley', 'chelsea', 'city', 'crystal', 'everton', 'huddersfield',
              'leicester', 'liverpool', 'manchester', 'newcastle', 'southampton', 'stoke', 'swansea', 'tottenham', 'watford',
              'wba', 'westham'];

  equipos_francia: any = ['amiens', 'angers', 'caen', 'dijon', 'estrasburgo', 'girondins', 'guingamp', 'lille', 'lyon', 'marsella',
              'metz', 'monaco', 'montpellier', 'nantes', 'niza', 'psg', 'rennes', 'saint-etienne', 'toulouse', 'troyes'];

  ligue:string = '455';
  equipos: any;
  // ligaespañolaId = 455;
  // ligafrancesaId = 450;
  // ligainglesaId = 445;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.peticionEquipos(455).subscribe(
     data => {
       console.log(data);
       this.equipos = data._links.teams;
       console.log(this.equipos);
     }
   )
  }

  muestra(opcion){
    console.log(opcion);
  }

  eligeLiga(){
    this._ServicioService.peticionEquipos().subscribe(
     data => {
       console.log(data);
     }
   )
  }


}
