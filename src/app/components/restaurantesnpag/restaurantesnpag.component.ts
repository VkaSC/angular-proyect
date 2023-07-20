

import { RestauranteService } from './../../service/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-restaurantesnpag',
  templateUrl: './restaurantesnpag.component.html',
  styleUrls: ['./restaurantesnpag.component.css']
})
export class RestaurantesnpagComponent implements OnInit {
  listaRestaurantes!: Array<Restaurante>;
  totalRegistros: number = 0; //Total de restaurantes que tenemos
  totalPorPagina: number = 4; //Restaurantes que se muenstran
  opcionesTamanio: number[] = [2, 4, 6, 8];
  paginaActual: number = 0;

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
   this.getRestaurantesPorPaginas();
  }

  paginar(evento: PageEvent) {
    console.log("evento paginator");
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;
    this.getRestaurantesPorPaginas();
  }

  borrarRestaurante() {
    console.log('Quiere borrar restaurante');
  }

  getRestaurantesPorPaginas() {
    this.restauranteService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe(
      {
        complete: () => console.log("completo"),
        error: (errorRx) => console.error(errorRx),
        next: (pagina) => {
          //hago el castin
          this.listaRestaurantes = <Array<Restaurante>> pagina.content;
          this.totalRegistros = pagina.totalElements;
        }        
      }
    )
  }
}
