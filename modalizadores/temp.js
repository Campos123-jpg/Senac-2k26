const{fc, cf, ks, ck, kf, fk, prompt}= require("./tempfunc")

let a;
let opcao;
let resultado = 0;
console.log("----CALCULADORA----");
console.log("escolha: a conversao de temperatura: 1=Ferenheit para Celsius, 2=Celsius para Ferenheit, 3=Kelvin para Celsius, 4=Celsius para Kelvin, 5=Kelvin para Ferenheit, fahrenheit para celsius");
opcao = prompt("Digite sua opçao:");
a = Number(prompt("escolha o valor para os números A e B:"));

if(opcao === "1" || opcao.toLowerCase() === "ferenheit para celsius"){
   resultado = fc(a-32) * 5/9;
}
else if (opcao === "2" || opcao.toLowerCase() === "celsius para ferenheit"){
   resultado = cf(a) * 9/5 + 32;
}
else if (opcao === "3" || opcao.toLowerCase() === "kelvin para celsius"){
   resultado = kc(a-273.15);
}
else if (opcao === "4" ||  opcao.toLowerCase() === "celsius para kelvin"){
   resultado = ck(a) + 273.15;
}
else if (opcao === "5" ||  opcao.toLowerCase() === "kelvin para ferenheit"){
   resultado = kf(a) * 9/5 - 459.67;
}
else if (opcao === "6" || opcao.toLowerCase() === "fahrenheit para kelvin"){
   resultado = fk(a-32) * 5/9 + 273.15;
}
else {
console.log("Opcão inválida")
}
console.log(resultado)

