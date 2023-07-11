import { PerroComponent } from './components/perro/perro.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FraseComponent } from './components/frase/frase.component';
import { ImcComponent } from './components/imc/imc.component';
import { ChuckComponent } from './components/chuck/chuck.component';

const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'adivina', component: AdivinaComponent },
  { path: 'perros', component: PerroComponent },
  { path: 'frase', component: FraseComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'chuck', component: ChuckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
