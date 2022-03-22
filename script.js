// CAPTURANDO OS VALORES DOS NÚMEROS
var numero = document.getElementsByClassName("numero")
for (let i = 0; i < numero.length; i++) {
    numero[i].addEventListener('click', adicionar_numero)
}
// CAPTURANDO OS VALORES DOS OPERADORES 
var resultado = document.getElementById("resultado")
resultado.addEventListener("click", resultado_final)

var operador = document.getElementsByClassName("operador")
for (let i = 0; i < operador.length; i++) {
    operador[i].addEventListener('click', adicionar_operador)
}

let limpar = document.getElementById("limpar")
limpar.addEventListener("click", limpar_campo => {
    document.getElementById("tela").innerHTML = ""
    total = ""
    document.getElementById("tela_secundaria").innerHTML = "0"
})

//FUNÇÕES DE CRIAÇÃO 

var total = ""

function adicionar_numero(e) {
    total += e.target.value
    document.getElementById("tela").innerHTML += e.target.value
    document.getElementById("tela_secundaria").innerHTML = total
}

function adicionar_operador(e) {
    document.getElementById("tela").innerHTML = ""
    total += e.target.value
    document.getElementById("tela_secundaria").innerHTML = total
}


function resultado_final() {
    total_final = eval(total)
    if (total_final != undefined) {
        document.getElementById("tela").innerHTML = total_final
        document.getElementById("tela_secundaria").innerHTML = total_final
        console.log(total_final)
        total = total_final
    } else {
       
    }
}





