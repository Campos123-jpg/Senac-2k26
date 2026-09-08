const prompt = require("prompt-sync")
function soma(a,b, resultado){
resultado = a+b;
return  resultado
}
function subtracao(a,b, resultado){
resultado = a-b;
return  resultado
}
function multiplicacao(a,b, resultado){
resultado = a*b;
return  resultado
}
function divisao(a,b, resultado){
resultado = a/b;
return  resultado
}
module.exports ={
    soma, multiplicacao, subtracao, divisao, prompt
}