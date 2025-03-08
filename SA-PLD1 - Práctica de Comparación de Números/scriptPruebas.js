//código modificado para hacer test
function numRequest (){
    let num1 = parseInt(prompt("Ingresa num1: "));
    let num2 = parseInt(prompt("Ingresa num2: "));
    let num3 = parseInt(prompt("Ingresa num3: "));
    let nums = [num1,num2,num3];
    return [num1,num2,num3];
}
//-2
function analizeNumbers (nums){
    
    //Ver si los numeros son iguales
    if(nums[0]==nums[1] || nums[0]==nums[2] || nums[1]==nums[2]){
        return "Los numeros son iguales";
    }else{
        let bigNum = Math.max(...nums);
        let smallNum = Math.min(...nums);
        let medNum = nums.find(num => num !== bigNum && num !== smallNum);
    return {
        mayor_a_menor : [bigNum, medNum, smallNum],
        menor_a_mayor : [smallNum, medNum, bigNum]
        };
    }
    
}

//Exportar fun
module.exports = {numRequest, analizeNumbers};