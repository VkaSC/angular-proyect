import { Component, OnInit } from '@angular/core';
import { Dni } from 'src/app/models/dni';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  //readonly pq es constante
  //static es un atributo de la clase
  //para cada etiqueta/instancia, no cambia
  static readonly SECUENCIA_LETRAS_DNI: string = 'TRWAGMYFPDXBNJZSQVHLCKE';

  dni: string;
  letra: string;

  listaDni: Array<Dni>;
  listaNie: Array<Dni>;
  listaCompleta: Dni[];

  constructor() {
    this.dni = '';
    this.letra = '';
    this.listaDni = new Array<Dni>();
    this.listaNie = new Array<Dni>();
    this.listaCompleta = [];
  }

  //TODO: completar el ejercicio, para que funcione
  //e informe de la letra del dni introducido

  ngOnInit(): void {
    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    );
    console.log(inputSeleccionado.value);
  }

  calcularLetra(): void {
    let dni: Dni = new Dni();
    let numdni: number = 0;
    let inputSeleccionado: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    );
    console.log(inputSeleccionado.value);
    if (inputSeleccionado.value != 'sin') {
      //estoy en el caso extranjero , recalculo el dni
      let dnistrin: string = inputSeleccionado.value + this.dni;
      numdni = parseInt(dnistrin);
      dni.prefijo = inputSeleccionado.id;
    } else {
      numdni = parseInt(this.dni);
    }
    console.log(`El número introducido es  ${this.dni}`);
    //Integer numero = java
    let resto: number = numdni % 23;
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log('la letra es ' + this.letra);

    dni.letra = this.letra;
    dni.numero = parseInt(this.dni);
    if (dni.prefijo === '') {
      this.listaDni.push(dni);
    } else {
      this.listaNie.push(dni);
    }
    this.listaCompleta.push(dni);

    this.mostrarListaDni();
    this.dniExtrangeros();
    this.mostrarTodos();
  }
  mostrarListaDni(): void {
    console.log('Mostrando lista DNI');
    this.listaDni.forEach((d) => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`);
    });
  }
  //Metodo que saque lista de nie
  dniExtrangeros(): void {
    console.log('Lista NIE');

    const result = this.listaNie.filter((listaNie) => listaNie.prefijo !== '');
    result.forEach((d) => {
      let listaN: string = `NIE = ${d.prefijo}${d.numero}-${d.letra}`;
      console.log(listaN);
    });
  }
  mostrarTodos(): void {
    console.log('Mostrando lista completa');
    this.listaCompleta.forEach((d) => {
      console.log(`Documento = ${d.prefijo}${d.numero}-${d.letra}`);
    });
  }
  ordenarNumero(): void {
    this.listaCompleta.sort((dni1, dni2) => dni1.numero - dni2.numero);
  }

  //Añadir el boton para ordenar por letras
  ordenarLetra(): void {
    this.listaCompleta.sort((dni1, dni2) =>
      dni1.letra.localeCompare(dni2.letra)
    );
  }
  //Ordenar por prefijo
  //hacer componente imc.
}
