//Iniviar variáveis globais do jogo
const simbolos = ["X","O"]
let jogadorAtual = 0
const jogadasTabuleiro = ["","","","","","","","",""]
let qtdJogadas = 0
// let gameOver = false

const celulas = document.querySelectorAll(".celula") //Selecionar todas as celulas do tabuleiro

celulas.forEach(celula => {
    celula.addEventListener("click", fazerJogada, {once: true})
})

function fazerJogada(celula){
    // gameOver = eCampeao()
    celula.target.innerHTML = simbolos[jogadorAtual] //Colocar o simbolo do jogadorAtual dentro da celula
    jogadasTabuleiro[celula.target.id] = simbolos[jogadorAtual] //Salvar a jogada colocando o simbolo do jogador no array
    qtdJogadas++
    eCampeao()
    empate()
    trocarJogador()
    document.querySelector(".jogadorAtualTxt").innerHTML = `Aguardando a jogada de ${simbolos[jogadorAtual]}`
    document.querySelector(".qtdJogadasTxt").innerHTML = `Quantidade de jogadas: ${qtdJogadas}`
}

function trocarJogador(){
    jogadorAtual = jogadorAtual == 0 ? 1 : 0 //Operador ternario, se jogadorAtual for 0 ele será trocado por 1
}

function eCampeao(){
    const combinacoes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i < combinacoes.length; i++){
        let sequencia = combinacoes[i]

        let pos0 = sequencia[0]
        let pos1 = sequencia[1]
        let pos2 = sequencia[2]

        if(jogadasTabuleiro[pos0] == jogadasTabuleiro[pos1] && jogadasTabuleiro[pos0] == jogadasTabuleiro[pos2] && jogadasTabuleiro[pos0] != ""){
            
            document.querySelector(".vencedor").innerHTML = `${simbolos[jogadorAtual]} venceu!`
            document.querySelector(".resultado").style.display = 'flex'
            return true
        }
    }
   
    return false
}

function empate(){
    if(!eCampeao() && jogadasTabuleiro.indexOf("") == -1){
        document.querySelector(".vencedor").innerHTML = `Empate`
        
        document.querySelector(".resultado").style.display = 'flex'
        return true
    }
    return false
}

//Jogar Novamente
document.querySelector('button').addEventListener('click', jogarNovamente => {
    document.location.reload()
})