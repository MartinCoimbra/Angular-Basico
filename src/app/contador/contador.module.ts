import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contador } from './contador/contador.component';

@NgModule({
    /* dentro de declarations van los component  */
    declarations:[
        Contador
    ],
    /* Aqui las cosas que quiero hacer "publicas fuera de este modulo" */
    exports:[
        Contador
    ],
})

export class ContadorModule{}