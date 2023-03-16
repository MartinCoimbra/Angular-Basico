import { Component } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  
  constructor() {}
}
