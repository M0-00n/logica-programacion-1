/* 
1. Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
2. Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
3. Debe imprimir ambos resultados por consola o por el DOM.
4. Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos. */


function convertirTemperatura(){
    let temInput=document.getElementById("temCelsius");
    let temCelsius= parseFloat(temInput.value);
    
    if (isNaN(temCelsius)) {
        alert("Ingrese un número válido.");
        return;
    }

    let temFah=(9/5)*(temCelsius) + 32;
    let temKelvin= temCelsius + 273;

    document.getElementById("resultado").innerHTML =`
    <h2>La temperatura en Farenheit: ${temFah.toFixed(2)} °F </h2>
    <h2>La temperatura en Kelvin: ${temKelvin.toFixed(2)} K</h2>
    `;
    
}




