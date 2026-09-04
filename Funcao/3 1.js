const prompt = require("prompt-sync")();
function fazerMedia(n1, n2, n3, media){
    media = (n1+ n2+ n3)/3
    return media;
}

let media = 0;

let n1 = Number(prompt("digite um numero: "));
let n2 = Number(prompt("digite outro numero: "));
let n3 = Number(prompt("digite outro numero: "));
console.log(fazerMedia(n1, n2, n3, media));