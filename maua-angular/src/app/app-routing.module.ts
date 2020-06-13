import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';

const routes: Routes = [
  { path: 'professores', component: ProfessoresComponent },
  { path: 'inicio', component: CursosComponent },
  { path: 'sugestoes', component: SugestoesComponent },
  { path: '**', component: CursosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
