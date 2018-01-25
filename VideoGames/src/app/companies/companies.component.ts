import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {slideToDown} from '../router.animation';
import { FiltroPipe} from '../filtro.pipe';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class CompaniesComponent implements OnInit {
  companias: any;
  pagina: number = 0;
  filtroPlataforma;

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    $('.cargar').hide();
    $('.busqueda').hide();
    this._ServicioService.seturl('platforms');
    this._ServicioService.peticion('platforms', 154, this.pagina).subscribe(
      data => {
        console.log(data);
        this.companias = data.results;
        console.log(data.results);
        $('#fountainG').hide();
        $('.cargar').show();
        $('.busqueda').show();
        this._ServicioService.peticion('platforms', 54).subscribe(
          data => {
            console.log(data);
            this.companias = this.companias.concat(data.results);
          }
        );
      }
    );
  }

  // cargarMas() {
  //   this.pagina = this.pagina + 54;
  //   this._ServicioService.peticion('platforms', this.pagina).subscribe(
  //     data => {
  //       console.log(data);
  //       this.companias = this.companias.concat(data.results);
  //     }
  //   );
  // }

}
