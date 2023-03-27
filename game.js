var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight * 0.85
    largura = window.innerWidth * 0.85

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {


    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaAlvo)
        alert('Vitoria')
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover o alvo anterior (caso exista)
    if(document.getElementById('alvo')) {
        document.getElementById('alvo').remove()

        if(vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        
        vidas++
    }
}

    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var alvo = document.createElement('img')
    alvo.src = 'imagens/alvo.png'
    alvo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    alvo.style.left = posicaoX + 'px'
    alvo.style.top = posicaoY + 'px'
    alvo.style.position = 'absolute'
    alvo.id = 'alvo'
    alvo.onclick = function() {
        this.remove()
    }

    document.body.appendChild(alvo)

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'alvo1'
        case 1:
            return 'alvo2'
        case 2:
            return 'alvo3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}