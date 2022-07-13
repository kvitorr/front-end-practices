let visor = document.getElementById('visor') /*selecionar o visor*/

let resultado = document.querySelector('#grid-equal-item') //seleciona o botão de igual

function insert(value){
    visor.innerHTML += value
}

function resetar(){
    visor.innerHTML = ""
    resultado = ''
}

function deletar(){

    let novo_conteudo = ''
    const string = visor.innerHTML

    for (let i = 0; i < (string.length - 1); i++) {
        novo_conteudo += string[i]    
    }

     visor.innerHTML = novo_conteudo
}

function calculo(){
    visor.innerHTML = eval(visor.innerHTML)
}

