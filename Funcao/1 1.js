const prompt = require("prompt-sync")();
function usuario(){
    nome = prompt("informe o seu nome: ");
    console.log("Seja bem vindo " + nome)
}
usuario();

function usuario(nome){
    console.log("Bem vindo " + nome);
}
let nome = prompt("informe o seu nome: ");
usuario(nome);