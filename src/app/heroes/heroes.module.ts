import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* dentro de declarations van los component  */
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    /* Aqui las cosas que quiero hacer "publicas fuera de este modulo" */
    exports:[
        ListadoComponent
    ],
    /* aqui dentro solo van modulos */
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}