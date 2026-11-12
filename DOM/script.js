function negrito(){

    let texto = document.getElementById("texto")

    if(texto.style.fontWeight === "bold"){

        texto.style.fontWeight = "normal"

    }

    else{

        texto.style.fontWeight = "bold"

    }

}

function italico(){

    let texto = document.getElementById("texto")

    if(texto.style.fontStyle === "italic"){

        texto.style.fontStyle = "normal"

    }

    else{

        texto.style.fontStyle = "italic"

    }

}

function sublinhado(){

    let texto = document.getElementById("texto")

    if(texto.style.textDecoration === "underline"){

        texto.style.textDecoration = "none"

    }
    

    else{

        texto.style.textDecoration = "underline"

    }

}

function alterarCor(){

    let texto = document.getElementById("texto");
    let cor = document.getElementById("cor");

    texto.style.color = cor.value;

}

function alterarFonte(){

}

let tamanhoZoom = 16;

function zoom(valor){

let texto = document.getElementById("texto")

    if(valor === 'aumentar'){

        tamanhoZoom = tamanhoZoom + 1

    }

    else{

        if(tamanhoZoom>12){

        tamanhoZoom = tamanhoZoom - 1

        }

    }

    texto.style.fontSize = tamanhoZoom + "px"

}

function ligarLampada(){


}

function alterarTema(){

    let corpo = document.body;

    let tema = document.getElementById("tema");

    corpo.classList.toggle("dark-mode")

    if(corpo.classList.contains("dark-mode")){

        tema.innerText = "☀️"

    }

    else{

        tema.innerText = "🌑"

    }

    }
    function escreverTexto(){

    let entrada = document.getElementById("entrada");
    let texto = document.getElementById("texto");

    texto.innerText = entrada.value;

}
function alterarFonte(){

    let texto = document.getElementById("texto");
    let fonte = document.getElementById("fonte");

    texto.style.fontFamily = fonte.value;

}