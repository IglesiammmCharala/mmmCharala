import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../app/principal/principal.component';
import { InformacionComponent } from '../app/informacion/informacion.component';
import { ProgramacionComponent } from '../app/programacion/programacion.component';
import { EnvivoComponent } from '../app/envivo/envivo.component';

const routes: Routes = [
  {path:'Inicio', component: PrincipalComponent},
  {path:'Informacion', component: InformacionComponent},
  {path:'Programacion', component: ProgramacionComponent},
  {path:'Galeria', component: EnvivoComponent},
  {path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
