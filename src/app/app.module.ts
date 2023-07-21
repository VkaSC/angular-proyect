import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { DniComponent } from './components/dni/dni.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FraseComponent } from './components/frase/frase.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { CdTimerModule } from 'angular-cd-timer';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { MapaComponent } from './components/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    PerroComponent,
    DniComponent,
    FraseComponent,
    ImcComponent,
    ChuckComponent,
    RestaurantesComponent,
    FormularioComponent,
    RestaurantesnpagComponent,
    BusquedaComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CdTimerModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
