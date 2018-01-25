import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], filtro: string): any {
    if (!value) return [];
    if (!filtro) return value;

    filtro = filtro.toLowerCase();

    return value.filter( val => {
      return val.name.toLowerCase().includes(filtro);
    });
  }

}
