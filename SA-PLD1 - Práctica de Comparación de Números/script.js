/* 
1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales. */

//-1 
function numRequest (){
    
    let num1 = parseInt(prompt("Ingresa num1: "));
    let num2 = parseInt(prompt("Ingresa num2: "));
    let num3 = parseInt(prompt("Ingresa num3: "));
    let nums = [num1,num2,num3];
    return nums;
}
//-2
function analizeNumbers (){
    let nums = numRequest();
    //Ver si los numeros son iguales
    if(nums[0]==nums[1] || nums[0]==nums[2] || nums[1]==nums[2]){
        console.log("Los numeros son iguales")
    }else{
        //Usamos los metodos Math.min y Math.max que nos devuelve el valor min y max de un conjunto de valores
        let bigNum = Math.max(...nums);
        let smallNum = Math.min(...nums);
        //find() method returns the value of the first array element that passes a test function.
        //num, que es una variable que se crea para alamacenar el valor en un determinado index debe ser dif de big y small Num
        let medNum = nums.find(num => num !== bigNum && num !== smallNum);
    
    let ordBtM = [bigNum,medNum,smallNum];
    console.log(ordBtM);
    let ordMtB =[...ordBtM].reverse();
    console.log(ordMtB);
    
    }
    
}

const button =document.querySelector("#botonOrden");
button.addEventListener("click",analizeNumbers);