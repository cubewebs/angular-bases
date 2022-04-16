import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)=" acumulador(-base) "> - {{base}} </button>
        <span> {{ number }} </span>
        <button (click)=" acumulador(base) "> + {{base}} </button>
    `,
})

export class ContadorComponent {
    title = 'Counter';

    public number: number = 10;
    base: number = 5;
  
    // Metodo de componente
    acumulador( valor: number ){
      this.number += valor;
    }
    
  
}