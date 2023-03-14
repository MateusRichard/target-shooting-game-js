var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

var alvo = document.createElement('img')
alvo.src = 'imagens/alvo.png'
alvo.className = 'alvo1'
alvo.style.left = posicaoX + 'px'
alvo.style.top = posicaoY + 'px'
alvo.style.position = 'absolute'

document.body.appendChild(alvo)
}