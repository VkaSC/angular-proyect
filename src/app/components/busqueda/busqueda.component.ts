import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/service/restaurante.service';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  //Atributos

  //ElementRef es el tipo genérico de Angular para referenciar
  //a una etiqueta estándar de HTML
  //Envoltorio de angular a los elementos/etiquetas
  //nativas "wrapper"
  @ViewChild('cajabusqueda') cajaInput!: ElementRef;
  @ViewChild('mapa') mapa!: MapaComponent;

  listaRestaurantes!:Array<Restaurante>;

  constructor(private restauranteService: RestauranteService) {}
  //filtroBusqueda
  ngOnInit(): void {    
  }
  busqueda1(){
    let terminoBusqueda:string = this.cajaInput.nativeElement.value;
    console.log('Búsqueda 1' + terminoBusqueda);
    if (terminoBusqueda!= '') {
      this.restauranteService.getRestaurantePorFiltro(terminoBusqueda).subscribe(
        {
          complete: () => console.log("completado"),
          error: (errorRx) => console.error(errorRx),
          next: (listaRestaurantesRx) =>
          {
            this.listaRestaurantes = listaRestaurantesRx;
          }
        }
      )
    } else {
      this.listaRestaurantes.length = 0;
    }
   
    //TODO: consumir el servicio web de búsqueda
    //para traer los restaurantes que coincidan
    //con el término de búsqueda
  }

  restaurateTocado (restaurante:Restaurante)
  {
    this.listaRestaurantes.length = 0;
    console.log('Nombre tocado = ' + restaurante.nombre);
    //alert('Nombre tocado = ' + restaurante.nombre + ' id ' + restaurante.id);
    this.mapa.dibujarPuntoNombre(restaurante.latitud, restaurante.longitud, restaurante.nombre);
  }

 
  encuentrame(){
    
    if (navigator.geolocation) {
      console.log( "tenemos acceso al Api Geolocation");
      navigator.geolocation.getCurrentPosition((pos) => this.exito(pos), ()=> this.fracaso);
    }
  }
  exito(position:GeolocationPosition){
    console.log("Se ha encontrado su posición");
    console.log(`Latitud ${position.coords.latitude}`);
    console.log(`Longitud ${position.coords.longitude}`);
    this.mapa.dibujarPunto(position.coords.latitude,position.coords.longitude);
  }

  fracaso(){
    alert("No es posible determinar su ubicación en este dispusitivo");
  }

  /*
  busqueda2(){
    console.log('Búsqueda 2');

  }
  busqueda3(){
    console.log('Búsqueda 3');

  }
  */

}
