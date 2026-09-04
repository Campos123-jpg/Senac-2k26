const prompt = require("prompt-sync")();
function calculo(numero){
    dobro = numero*2
    console.log("O dobro é: " + dobro)
}
numero =Number(prompt("digite um numero: "));
calculo(numero);