import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sheard', component: BuscarComponent},
  { path:'personaje/:id', component: PersonajeComponent },
  { path: '**', pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
