let visor = document.getElementById('visor') /*selecionar o visor*/

let resultado = document.querySelector('#grid-equal-item') //seleciona o botão de igual

let theme = document.getElementById("theme-calculator")

let theme1 = document.getElementById("one");
let theme2 = document.getElementById("two");
let theme3 = document.getElementById("three");


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

function apply_theme(value){

    if(value == 1) {
        theme.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
        theme.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)');
        theme.style.setProperty('--especial-button', 'hsl(225, 21%, 49%)');
        theme.style.setProperty('--especial-button-active', 'hsl(224, 28%, 35%');
        theme.style.setProperty('--equal-button', 'hsl(6, 63%, 50%)');
        theme.style.setProperty('--equal-button-active', 'hsl(6, 70%, 34%)');
        theme.style.setProperty('--number-button', 'hsl(30, 25%, 89%)');
        theme.style.setProperty('--number-button-active', 'hsl(28, 16%, 65%)');
        theme.style.setProperty('--color-letters', 'hsl(221, 14%, 31%)');
        theme.style.setProperty('--color-letters-panel', 'white');
        theme1.style.backgroundColor = "var(--equal-button)";
        theme2.style.backgroundColor = "var(--toggle-background)";
        theme3.style.backgroundColor = "var(--toggle-background)";


    } else if (value == 2){
        theme.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
        theme.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)');
        theme.style.setProperty('--especial-button', 'hsl(185, 42%, 37%)');
        theme.style.setProperty('--especial-button-active', 'hsl(185, 58%, 25%)');
        theme.style.setProperty('--equal-button', 'hsl(25, 98%, 40%)');
        theme.style.setProperty('--equal-button-active', 'hsl(25, 99%, 27%)');
        theme.style.setProperty('--number-button', 'hsl(45, 7%, 89%)');
        theme.style.setProperty('--number-button-active', 'hsl(35, 11%, 61%)');
        theme.style.setProperty('--color-letters', 'hsl(60, 10%, 19%)');
        theme.style.setProperty('--color-letters-panel', 'hsl(60, 10%, 19%)');
        theme1.style.backgroundColor = "var(--toggle-background)";
        theme2.style.backgroundColor = "var(--equal-button)";
        theme3.style.backgroundColor = "var(--toggle-background)";

    } else {
        theme.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
        theme.style.setProperty('--toggle-background', 'hsl(268, 71%, 12%)');
        theme.style.setProperty('--especial-button', 'hsl(281, 89%, 26%)');
        theme.style.setProperty('--especial-button-active', 'hsl(285, 91%, 52%)');
        theme.style.setProperty('--equal-button', 'hsl(176, 100%, 44%)');
        theme.style.setProperty('--equal-button-active', 'hsl(177, 92%, 70%)');
        theme.style.setProperty('--number-button', 'hsl(268, 47%, 21%)');
        theme.style.setProperty('--number-button-active', 'hsl(290, 70%, 36%)');
        theme.style.setProperty('--color-letters', 'hsl(52, 100%, 62%)');
        theme.style.setProperty('--color-letters-panel', 'hsl(52, 100%, 62%)');
        theme1.style.backgroundColor = "var(--toggle-background)";
        theme2.style.backgroundColor = "var(--toggle-background)";
        theme3.style.backgroundColor = "var(--equal-button)";
    }
    

}
