const{desconto, acrescimo, prompt}= require("./profunc.js");

let a;
console.log("----CALCULADORA----");
a = Number(prompt("escolha: 1=Falar a média ou 2=Fale suas notas:"));

if(a === 1) {
   console.log("Qual a sua média?");
}
else if (a < 7) {
  console.log("está reprovado");
}