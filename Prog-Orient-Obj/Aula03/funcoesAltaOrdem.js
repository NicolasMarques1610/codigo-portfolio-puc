array = [2,3,4,5,6,7,8,9,10];
regraImpar = item => item % 2 !== 0;

regraPrimo = item => {
    let nDiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if(item % divisor === 0) nDiv++;
    }
    
    if(nDiv === 2) {
        return true;
    } else return false;
}

nroDivisores = item => {
    let nDiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if(item % divisor === 0) nDiv++;
    }
    return nDiv;
}

// some
console.log("Há algum número impar? " + array.some(regraImpar));
console.log("Há algum número primo? " + array.some(regraPrimo));

// filter
console.log("Números ímpares: " + array.filter(regraImpar));
console.log("Números primos: " + array.filter(regraPrimo));

// forEach
array.forEach( nro => console.log(nro + " -> " + (nro % 2 === 0 ? "par" : "ímpar")));
array.forEach( nro => console.log(nro + `-> nDivisores de 1 até ${nro} = ` + nroDivisores(nro)));

// reduce
let resultado = array.reduce((acumulador, val) => acumulador += (val % 2 === 0) ? val : 0, 0);
console.log("Soma dos números pares: " + resultado);

// map
let newArray = array.map(item => item*2);
console.log(newArray);

newArray = array.map(item => {return {x: item, y: item*2}});
console.log(newArray);

// juntando operações
array
    .filter(nro => nroDivisores(nro) === 2)
    .map(item => {return {x: item, par: (item%2) === 0}})
    .forEach(obj => console.log(obj.x + " é par? " + obj.par));