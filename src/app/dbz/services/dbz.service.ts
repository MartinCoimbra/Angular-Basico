import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';

@Injectable()
/* aqui se consumirian los enpoints */
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  /* se autoejecuta */
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
