import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
  titulo: string;
  numeroUsuario: number;
  numeroBuscado: number;
  contador: number;

  /**
   *
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   *
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   *
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES
   * MENOR O MAYOR QUE EL BUSCADO
   *
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */

  constructor() {
    console.log('Estoy en el constructor');
    this.titulo = 'Adivina un número en 5 intentos';
    this.numeroUsuario = 0;
    this.numeroBuscado = this.calcularNumeroAleatorioDe1A100();
    console.log('numero a adivinar ' + this.numeroBuscado);
    this.contador = 5;
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('Estoy en OnInit');
  }

  calcularNumeroAleatorioDe1A100(): number {
    let numeroGenerado: number = 0;
    numeroGenerado = Math.floor(Math.random() * 100 + 1);
    return numeroGenerado;
  }

  comprobarIntento() {
    console.log('Comprobando intent0...');
    console.log(this.numeroUsuario);
    if (this.numeroBuscado != this.numeroUsuario) {
      this.contador--;
      window.alert('Te quedan ' + this.contador + ' intentos');
      if (this.contador < 1) {
        window.alert('Has perdido');
      }
    }
    if (this.numeroBuscado == this.numeroUsuario) {
      console.log('Felicidades, lo has encontrado!!!');
      window.alert('Has ganado la partida!!!');
    }
  }
}
