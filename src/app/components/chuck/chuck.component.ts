import { ChuckService } from './../../service/chuck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css'],
})
export class ChuckComponent implements OnInit {
  fraseChuck!: string;

  constructor(private servicioChuck: ChuckService) {}

  ngOnInit(): void {
    this.servicioChuck.getFraseChuck().subscribe({
      next: (frase) => {
        console.log('Frase bien recibida');
        this.fraseChuck = frase.value;
      },
      error: (fallo) => {
        alert('fallo al obtener la frase');
      },
      complete: () => console.log('com completada'),
    });
  }
}
