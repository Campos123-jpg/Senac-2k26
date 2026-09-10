const prompt = require("prompt-sync")();
function fc(a,b, resultado){
resultado = (a-32) * 5/9;
return  resultado
}
function cf(a,b, resultado){
resultado = (a) * 9/5 + 32;
return  resultado
}
function kc(a,b, resultado){
resultado = (a-273.15);
return  resultado
}
function ck(a,b, resultado){
resultado = (a) + 273.15;
return  resultado
}
function  kf(a,b, resultado){
resultado =(a) * 9/5 - 459.67;
return  resultado
}
function fk(a,b, resultado){
resultado = (a-32) * 5/9 + 273.15;
return  resultado
}
module.exports ={
    fc, cf, kc, ck, kf, fk, prompt
}