import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  cursos = [
    {
      titulo: 'Administração',
      descricao:
        'O Administrador Mauá é um profissional preparado para atuar, sempre como líder, nos mais diversos mercados de trabalho: instituições financeiras, empresas de serviços, consultorias, comércio varejista ou atacadista e indústrias de diversos segmentos, como Automobilístico, Eletroeletrônico, Alimentício, entre outros. Os alunos desenvolvem, ao longo do curso, capacitação e treinamento para a tomada de decisões e para a resolução de problemas de gestão empresarial.',
      imagem: 'https://maua.br/img/upload/092018/administracao-14102942.png',
      duracao: '4 anos',
    },

    {
      titulo: 'Design',
      descricao:
        'O curso de Design da Mauá, oferecido desde 2007, possui nota máxima no MEC, tem conquistado seu espaço no mundo acadêmico e já deixa sua marca de qualidade no mercado. Por meio de uma importante convivência com a tecnologia e os negócios, num ambiente bem estruturado, com professores comprometidos e bem preparados, apresenta um currículo arrojado e um projeto pedagógico atualizadíssimo; Vem formando Designers talentosos e atendendo às demandas do mercado.',
      imagem: 'https://maua.br/img/upload/092018/design-14102950.png',
      duracao: '4 anos',
    },

    {
      titulo: 'Engenharia de Alimentos',
      descricao:
        'A área de produção de alimentos vem se desenvolvendo e a cada dia cresce a necessidade de profissionais especializados para atender essa demanda. O engenheiro de alimentos pode atuar nas mais diversas áreas relacionadas à cadeia alimentícia: Produção Industrial, Desenvolvimento de Produtos, Otimização de Processos, Garantia da Qualidade, Consultoria, Fiscalização ou até mesmo nas áreas comerciais e de marketing de produtos alimentícios.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-alimentos-14103003.png',
      duracao: '5 anos',
    },

    {
      titulo: 'Engenharia Civil',
      descricao:
        'O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios residenciais, ferrovias, aeroportos ou faça o planejamento de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções.',
      imagem: 'https://maua.br/img/upload/092018/engenharia-civil-14103012.png',
      duracao: '5 anos',
    },
  ];

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }
}
