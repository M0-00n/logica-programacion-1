const {analizeNumbers} =require("./scriptPruebas");


test("Ordena de menor a mayor y de mayor a menor -15,5,45",()=>{
    let nums=[-15,5,45];
    let result = analizeNumbers(nums);

    expect(result.menor_a_mayor).toEqual([-15,5,45]);
    expect(result.mayor_a_menor).toEqual([45,5,-15]);
});

test("Ordena de menor a mayor y de mayor a menor 0,2,-37",()=>{
    let nums=[0,2,-37];
    let result = analizeNumbers(nums);

    expect(result.menor_a_mayor).toEqual([-37,0,2]);
    expect(result.mayor_a_menor).toEqual([2,0,-37]);
});


test("Numeros iguales debe mostrar mensaje Los numeros son iguales con 4,4,2",()=>{
    let nums=[4,4,2];
    let result = analizeNumbers(nums);

    expect(result).toEqual("Los numeros son iguales");
});

test("Numeros iguales debe mostrar mensaje Los numeros son iguales con 4,2,4",()=>{
    let nums=[4,2,4];
    let result = analizeNumbers(nums);

    expect(result).toEqual("Los numeros son iguales");
});

test("Numeros iguales debe mostrar mensaje Los numeros son iguales con 2,4,4",()=>{
    let nums=[2,4,4];
    let result = analizeNumbers(nums);

    expect(result).toEqual("Los numeros son iguales");
});