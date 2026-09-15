const{desconto, acrescimo, prompt}= require("./profunc.js");

let a;
let opcao;
let resultado = 0;
console.log("----CALCULADORA----");
console.log("escolha: cacrescimo ou desconto:");
opcao = prompt("Digite sua opçao:");
a = Number(prompt("Digite o valor:"));

if(opcao === "1" || opcao === "+" || opcao.toLowerCase() === "cacrescimo"){
   resultado = acrescimo(a);
}
else if (opcao === "2" || opcao === "-" || opcao.toLowerCase() === "desconto"){
   resultado = desconto(a);
}
console.log("O resultado é: " + resultado);