function calcularFactorial() {
    // Obtener elementos del DOM
    const input = document.getElementById('numeroInput');
    const resultadoElement = document.getElementById('resultado');

    const numero = parseInt(input.value);

    if(isNaN(numero)){
        resultadoElement.textContent = "Valor ingresado inválido"
    }

    // Calcular factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    resultadoElement.textContent = `El factorial de ${numero} es: ${factorial}`;
}

