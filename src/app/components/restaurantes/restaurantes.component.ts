import { RestauranteService } from './../../service/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  listaRestaurantes!: Array<Restaurante>;
  ruta_servicio_foto:string = RestauranteService.URL_ACTUAL+"/obtenerFoto";

  constructor(private restauranteService: RestauranteService) {}

  ngOnInit(): void {
    this.restauranteService.getListaRestaurantes().subscribe({
      complete: () => console.log('Comunicación completada'),
      error: (errorRx) => {
        console.error(errorRx);
      },
      next: (listaRestaurantesRx) => {
        console.log('Lista Restaurantes recibida');
        listaRestaurantesRx.forEach((rest) => {
          console.log(`ID = ${rest.id} NOMBRE = ${rest.nombre}`);
        });
        this.listaRestaurantes = listaRestaurantesRx;
      },
    });
  }

  borrarRestaurante() {
    console.log('Quiere borrar restaurante');
  }
}
