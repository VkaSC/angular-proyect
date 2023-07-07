import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css'],
})
export class FraseComponent implements OnInit {
  titulo: String;
  frase: String;
  resultadoFrase: String;
  longitud: number;
  esPar: boolean;
  resultadoParInpar: String;
  /**
   * permita al usuario intrododucir una cadena
   *que muestre la misma cadena que va introduciendo el usuario , pero al revés
   *que muestre la longitud de esa cadena
   *y que diga si la longitud de esa cadena es par o impar
   */
  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'FRASES Y PALABRAS...';
    this.frase = '';
    this.resultadoFrase = '';
    this.longitud = 0;
    this.esPar = false;
    this.resultadoParInpar = '';
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('Estoy en el OnInit');
  }

  fraseAlReves(): void {
    //String se convierte en array de caracteres (OPERADOR DE DISPERSIÓN)
    let fraseAlReves: string[] = [...this.resultadoFrase];
    //le damos la vuelta al string
    fraseAlReves.reverse();
    // volvemos a convertir a string
    this.resultadoFrase = fraseAlReves.join('');
    //contamos los caracteres
    this.longitud = this.resultadoFrase.length;
    //Comprobamos si es par o impar
    this.cadenaEsPar();
  }
  cadenaEsPar(): void {
    if (this.longitud % 2 === 0) {
      this.esPar = true;
      this.resultadoParInpar = 'PAR';
    } else {
      this.resultadoParInpar = 'IMPAR';
    }
  }
}
