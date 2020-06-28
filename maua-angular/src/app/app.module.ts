import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    CursosComponent,
    SugestoesComponent,
    CursoCartaoComponent,
    CursoCadastroComponent,
    AlunosComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
