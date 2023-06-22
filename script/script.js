//Iniviar variáveis globais do jogo
const simbolos = ["X","O"]
let jogadorAtual = 0
const jogadasTabuleiro = ["","","","","","","","",""]
let qtdJogadas = 0

const celulas = document.querySelectorAll(".celula") //Selecionar todas as celulas do tabuleiro

celulas.forEach(celula => {
    celula.addEventListener("click", fazerJogada, {once: true})
})

function fazerJogada(celula){
    celula.target.innerHTML = simbolos[jogadorAtual] //Colocar o simbolo do jogadorAtual dentro da celula
    jogadasTabuleiro[celula.target.id] = simbolos[jogadorAtual] //Salvar a jogada colocando o simbolo do jogador no array
    qtdJogadas++
    trocarJogador()
    document.querySelector(".jogadorAtualTxt").innerHTML = `Aguardando a jogada de ${simbolos[jogadorAtual]}`
    document.querySelector(".qtdJogadasTxt").innerHTML = `Quantidade de jogadas: ${qtdJogadas}`
}

function trocarJogador(){
    jogadorAtual = jogadorAtual == 0 ? 1 : 0 //Operador ternario, se jogadorAtual for 0 ele será trocado por 1
}