import { Component, OnInit } from '@angular/core';
import {slideToDown} from '../router.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
