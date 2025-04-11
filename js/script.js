function expressao(parametro) {
    document.getElementById('Display-calculadora').value += parametro; /*
    let valor = document.getElementById('Display-calculadora').value;
    valor = valor + parametro;
    document.getElementById('Display-calculadora').value = valor;*/
}

function calcular(){
    //eval() 
    try{
        let resultado = eval(document.getElementById('Display-calculadora').value);
        document.getElementById('Display-calculadora').value = resultado;
    }catch(error){
        document.getElementById('Display-calculadora').value = "Expressão incorreta.";
    }
}

function limpar(){
    document.getElementById('Display-calculadora').value = "";
}

function apagarUltimo() {
    let display = document.getElementById('Display-calculadora');
    display.value = display.value.slice(0, -1);
}

function paraNegativo() {
    let display = document.getElementById('Display-calculadora');
    display.value = (parseFloat(display.value)*-1);
}

function porCento() {
    let display = document.getElementById('Display-calculadora');
    display.value = (parseFloat(display.value)/100);
}