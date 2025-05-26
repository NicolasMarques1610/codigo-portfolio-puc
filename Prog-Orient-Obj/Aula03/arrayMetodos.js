let a = [1,2,3,4];
let i = a.findIndex((val) => {
    return val % 2 === 0;
})
let e = a.findIndex((val) => {
    return val >= 2 && val <=3;
})
let s = a.find((val) => {
    return val % 2 === 0;
})
let f = a.find((val) => {
    return val >= 2 && val <=3;
})

console.log(i); // retorna o índice do primeiro elemento que satisfaz a condição (0, 2, 4)
console.log(e);
console.log(s); // retorna o primeiro elemento que satisfaz a condição (2, 4)
console.log(f);
