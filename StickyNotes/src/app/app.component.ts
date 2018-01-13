import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaNotas: any = [];
  titulo: string;
  id:string;

  nuevaNota() {
    this.titulo = window.prompt('Titulo');
    this.id = String(this.listaNotas.length);
    this.listaNotas.push({title: this.titulo, ident: this.id});
    console.log(this.listaNotas);
  }

  eliminarNota(evento) {
    let borrada = this.listaNotas.indexOf(evento);
    console.log(borrada);
    this.listaNotas.splice(borrada, 1);
  }
}
