const{soma, multiplicacao, subtracao, divisao, prompt}= require("./calculadorafunc")

let a;
let b;
let opcao;
let resultado = 0
console.log("----CALCULADORA----");
console.log("escolha: soma, divisão, subtração ou divisão:");
opcao = prompt("Digite sua opçao:");
a = Number(prompt("escolha o valor para os números A e B:"));
b = Number(prompt("escolha o valor para os números A e B:"));

if(opcao === "1" || opcao === "+" || opcao.toLowerCase() === "soma"){
    soma();
}
else if (opcao === "2" || opcao === "-" || opcao.toLowerCase() === "subtracao"){
    subtracao()
}
else if (opcao === "3" || opcao === "*" || opcao.toLowerCase() === "multiplicacao"){
    multiplicacao()
}
else if (opcao === "4" || opcao === "/" || opcao.toLowerCase() === "divisao"){
    divisao()
}
else {
console.log("Opcão inválida")
}
console.log(resultado)

