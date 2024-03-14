function calcular() {
    let coletar = document.getElementById("options").value; 

    function divisaoInteira(dividendo, divisor) {
        return Math.trunc(dividendo / divisor);
    }

    if (coletar == "binário") { 
        let num1 = parseInt(document.getElementById("num1").value);
        const divisor = 2;
        let colocar = [];
        let resultado;
        while (num1 != 0) {
            let resto = num1 % divisor;
            num1 = divisaoInteira(num1, divisor);
            colocar.push(resto); 
        } 
        let result = "";
        colocar.reverse();
        for (let i = 0; i < colocar.length; i++) {
            result += colocar[i];
        } 
        let texto = document.getElementById("texto");
        texto.innerHTML="O número é " + result;
    }
    else if(coletar=="decimal"){
        let num1 = parseInt(document.getElementById("num1").value);  
        let str = num1.toString();
        let lista = str.split(''); // Convertendo a string em uma lista de caracteres
        lista.reverse(); // Revertendo a lista
        let tamanho = lista.length; 
        let soma = 0; // Inicializando a variável soma

        for(let i = 0; i < lista.length; i++){
            soma += lista[i] * Math.pow(2, i); // Adicionando o valor binário convertido para decimal à soma
        }
        let texto = document.getElementById("texto");
        texto.innerHTML="O número é " + soma;
        


    }
}
