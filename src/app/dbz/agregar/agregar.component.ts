import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  /* se reconoce como un evento */
  /* sirve para mandar "info" a un padre y poder leer dese arriba un dato de aca abajo */
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;

    /* lo mandamo "pa atras" */
    /* sirve para mandar "info" a un padre y poder leer dese arriba un dato de aca abajo */
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
