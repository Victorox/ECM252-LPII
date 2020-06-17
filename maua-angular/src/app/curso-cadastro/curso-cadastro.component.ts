import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css'],
})
export class CursoCadastroComponent {
  @Output() cursoAdicionada = new EventEmitter();
  adicionar(titulo, descricao, duracao) {
    const curso = {
      titulo: titulo,
      descricao: descricao,
      duracao: duracao,
      imagem:
        'https://is4-ssl.mzstatic.com/image/thumb/Purple127/v4/a8/1b/71/a81b7103-3ef9-175c-878f-20389b5f7a25/source/512x512bb.jpg',
    };
    this.cursoAdicionada.emit(curso);
  }
}
