const prompt = require("prompt-sync")();
function desconto(a, resultado){
resultado = a-(1*0.10);
return  resultado
}
function acrescimo(a, resultado){
resultado = a+(1*0.20);
return  resultado
}
module.exports ={
    desconto, acrescimo, prompt
}