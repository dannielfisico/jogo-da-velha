//Iniviar variáveis globais do jogo
const simbolos = ["X","O"]
let jogadorAtual = 0
const jogadasTabuleiro = ["","","","","","","","",""]

const celulas = document.querySelectorAll(".celula") //Selecionar todas as celulas do tabuleiro

celulas.forEach(celula => {
    celula.addEventListener("click", fazerJogada, {once: true})
})

function fazerJogada(celula){
    celula.target.innerHTML = simbolos[jogadorAtual]
    trocarJogador()
}

function trocarJogador(){
    jogadorAtual = jogadorAtual == 0 ? 1 : 0 //Operador ternario, se jogadorAtual for 0 ele será trocado por 1
}