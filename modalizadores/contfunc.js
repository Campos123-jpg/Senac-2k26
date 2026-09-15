let contador = 0;
function temp() {
   const intervalo = setInterval(() => {
        console.log(contador);
        contador++;
        if(contador > 10) {
            clearInterval(intervalo);
        }
    }, 1000);
}

    temp();
