import { RestauranteService } from './../../service/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
/**
 * Forulario alta y modificación de registro(restaurante)
 * @autor Verónika
 */
export class FormularioComponent implements OnInit {
  //representa el nuevo restaurante
  //está conectado al formulario
  restaurante: Restaurante;
  foto_seleccionada!:File|null; //union type (es como si fuese un objeto de dos tipos)
  
  barrios: Array<String>;

  constructor(
    private RestauranteService: RestauranteService,
    private servicioRutas: Router
  ) {
    this.restaurante = new Restaurante();

    this.restaurante.nombre = 'El Cateto';
    this.restaurante.direccion = 'La fuente s/n';
    this.restaurante.barrio = 'Este';
    this.restaurante.web = 'http://www.elcateto.org';
    this.restaurante.fichaGoogle = 'http://www.google.elcateto.org';
    this.restaurante.latitud = 30;
    this.restaurante.longitud = 30;
    this.restaurante.precio = 10;
    this.restaurante.especialidad1 = 'Marisco';
    this.restaurante.especialidad2 = 'Pescado';
    this.restaurante.especialidad3 = 'Carne';

    this.barrios = [
      'Centro',
      'Este',
      'Ciudad Jardín',
      'Bailén-Miraflores',
      'Palma-Palmilla',
      'Cruz de Humilladero',
      'Carretera de Cádiz',
      'Churriana',
      'Campanillas',
      'Puerto de la Torre',
      'Teatinos-Universidad',
    ];
  }

  ngOnInit(): void {}

  /**
   * Creación de restaurantes
   */
  crearRestaurante() {
    console.log('enviar los datos');
    console.log(`Restaurante 
     ${this.restaurante.nombre}
     ${this.restaurante.direccion}
     ${this.restaurante.barrio}
     ${this.restaurante.web}
     ${this.restaurante.fichaGoogle}
     ${this.restaurante.latitud}
     ${this.restaurante.longitud}
     ${this.restaurante.precio}
     ${this.restaurante.especialidad1}
     ${this.restaurante.especialidad2}
     ${this.restaurante.especialidad3}
    `);

    this.RestauranteService.postRestaurante(this.restaurante).subscribe({
      complete: () => console.log('Comunicación completada'),
      error: (errorRx) => {
        console.log(errorRx);
        alert('Error al insertar el restaurante');
      },
      next: (restauranteNuevo) => {
        alert(
          `Restaurante insertado correctamente con id ${restauranteNuevo.id}`
        );
        this.servicioRutas.navigateByUrl('/restaurantes');
      },
    });
  }

  /**
   * Método para adjuntar archivo al formulario de alta y modificación
   *  @param evento 
   */
  seleccionarFoto(evento: Event) {
    console.log("foto cambiada");
    //evento.target //éste es el input file
    let input_file = evento.target as HTMLInputElement;

    if (input_file.files) {


      this.foto_seleccionada = input_file.files[0];

      console.log("Nombre fichero sel = " + this.foto_seleccionada.name);
      console.log("Tipo fichero sel = " + this.foto_seleccionada.type);

      //si es una imagen, perfecto "me la quedo"
      if (this.foto_seleccionada.type.indexOf('image') >= 0) {
        console.log("el usuario ha seleccionado una imagen");
      } else {
        console.log("el usuario NO ha seleccionado una imagen");
        this.foto_seleccionada = null;
        //si no, la elimino, "no me la quedo"
      }
    }

  }

}
