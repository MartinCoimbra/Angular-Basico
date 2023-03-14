import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h1>La Base es: {{ base }}</h1>
    <button (click)="acumular(base)">+ 5</button>

    <span>
      <b>{{ contador }}</b>
    </span>

    <button (click)="acumular(-base)">- 5</button>
  `,
})
export class Contador {
  contador: number = 0;
  title: string = 'Hola Martin';
  base: number = 5;

  acumular(valor: number) {
    this.contador += valor;
  }
}
