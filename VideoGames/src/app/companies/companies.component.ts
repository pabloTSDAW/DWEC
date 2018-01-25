import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {slideToDown} from '../router.animation';

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

  constructor(private _ServicioService:ServicioService) {}

  ngOnInit() {
    this._ServicioService.seturl('companies');
    this._ServicioService.peticion('companies', this.pagina).subscribe(
      data => {
        console.log(data);
        this.companias = data.results;
        console.log(data.results);
      }
    );
  }

  cargarMas() {
    this.pagina = this.pagina + 20;
    this._ServicioService.peticion('companies', this.pagina).subscribe(
      data => {
        console.log(data);
        this.companias = this.companias.concat(data.results);
      }
    );
  }

}
