const prompt = require("prompt-sync")();
let pedido = prompt("Informe o seu pedido: ");

console.log("Pedido recebido")

setTimeout(() => {
    console.log("Pedido pronto: " + pedido)
}, 5000);