var numeroAleatorio = Math.floor(Math.random() * 100) + 1
var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')

var envioPalpite = document.querySelector('.envioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')


var contagemPalpites = 1
var botaoReinicio

function botaoReinicio() {
    location.reload()
}

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if (Number(campoPalpite.value > 100)) {
        alert('Númro digitado acima do permitido! Digite entre 0 a 100.')
        location.reload()
    }
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ', '

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!'
        ultimoResultado.style.backgroundColor = 'green'
        baixoOuAlto.textContent = ''
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = 'FIM DE JOGO! VOCÊ PERDEU!'
        ultimoResultado.style.backgroundColor = 'black'
        baixoOuAlto.textContent = ''
    } else {
        ultimoResultado.textContent = 'Errado!'
        ultimoResultado.style.backgroundColor = 'red'
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!'
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!'
        }
    }

    contagemPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
}