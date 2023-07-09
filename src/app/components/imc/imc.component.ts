import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  peso?: number;
  altura?: number;
  imc?: number;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  calcularImc(): void {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
    }
  }
}
