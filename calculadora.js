function numerico(numero) {
    let numeros = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = numeros + numero
}

function limpar() {
    document.querySelector('.resultado').innerHTML = ''
}

function voltar() {
    let resultado = document.querySelector('.resultado').innerHTML
    document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    let resultado = document.querySelector('.resultado').innerHTML

    if (resultado) {
        document.querySelector('.resultado').innerHTML = eval(resultado)
    }
}