import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  dato: string;
  clicks: int;
  dato = 'pepe';
  clicks = 0;

  clickeame(){
    this.clicks++;
  }
  constructor() { }

  ngOnInit() {
  }

}
