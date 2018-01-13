import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() param: any;
  @Output() borrarNota = new EventEmitter();

  constructor() {
  }

  eliminar() {
    console.log(this.param);
    this.borrarNota.emit(this.param);
  }

}
