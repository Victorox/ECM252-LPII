//pontuacao dos jogadores
var pontuacao = [0, 0];

//pontuacao da rodada atual
var pontuacaoRodada = 0;

//jogador atual
var jogadorAtual = 0;
var dado = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#pontuacao-rodada-0').textContent = dado;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");

var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var botaoPassarVez = document.querySelector("#botao-passar-vez");

var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];

botaoLancarDado.addEventListener("click", function () {
  var dado = Math.floor(Math.random() * 6) + 1;
  if (dado == 9) {
    pontuacao[jogadorAtual] = 0;
    pontuacoesRodadas[jogadorAtual].textContent = 1;
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    jogadorAtual = 1 - jogadorAtual;
  } else {
    pontuacao[jogadorAtual] += dado;
    pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacoesRodadas[jogadorAtual].textContent = dado;
    terminar();
  }
});

botaoPassarVez.addEventListener("click", function () {
  pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
  pontuacoesRodadas[jogadorAtual].textContent = null;
  jogadorAtual = 1 - jogadorAtual;
});

botaoNovoJogo.addEventListener("click", function () {
  restart();
});

function terminar() {
  if (pontuacao[jogadorAtual] >= 100) {
    $("#Modal").modal("show");
    restart();
  }
}
function restart() {
  pontuacao[jogadorAtual] = 0;
  pontuacoesRodadas[jogadorAtual].textContent = null;
  pontuacoesGlobais[jogadorAtual].textContent = 0;
  jogadorAtual = 1 - jogadorAtual;
  pontuacao[jogadorAtual] = 0;
  pontuacoesRodadas[jogadorAtual].textContent = null;
  pontuacoesGlobais[jogadorAtual].textContent = 0;
  if (jogadorAtual == 1) {
    jogadorAtual = 1 - jogadorAtual;
  }
}
