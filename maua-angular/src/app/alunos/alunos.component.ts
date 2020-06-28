import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  salvar(alunoForm) {
    const nome = alunoForm.value.nome;
    const idade = alunoForm.value.idade;
    const email = alunoForm.value.email;
    const curso = alunoForm.value.curso;
    console.log(
      `Nome: ${nome}, Idade: ${idade}, Email: ${email}, Curso: ${curso} `
    );
  }

  curso = [
    'Administração',
    'Design',
    'Engenharia Civil',
    'Engenharia de Computação',
  ];

  alunos = [
    { nome: 'Victor Duarte', idade: '22', curso: 'Design' },
    { nome: 'Roberta Duarte', idade: '19', curso: 'Design' },
    { nome: 'Marcos da Rocha', idade: '21', curso: 'Administração' },
  ];

  onAdicionarAluno(nomeAluno, idadeAluno, cursoAluno) {
    this.alunos = [
      { nome: nomeAluno, idade: idadeAluno, curso: cursoAluno },
      ...this.alunos,
    ];
  }
  constructor() {}

  ngOnInit(): void {}
}
