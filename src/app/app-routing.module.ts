import { FormularioComponent } from './components/formulario/formulario.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { PerroComponent } from './components/perro/perro.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraseComponent } from './components/frase/frase.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'adivina', component: AdivinaComponent },
  { path: 'perros', component: PerroComponent },
  { path: 'frase', component: FraseComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'chuck', component: ChuckComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/alta', component: FormularioComponent },
  { path: 'restaurantepag', component:  RestaurantesnpagComponent},
  { path: 'busqueda', component:  BusquedaComponent},
  {path:"**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
