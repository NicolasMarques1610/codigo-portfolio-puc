let a = [];
a[0] = Math.random();
a[1] = Math.random();
a[9] = Math.random();
console.log(a.length);

// Primeiro for com for in -> pega os índices do array
console.log(" -for .. in- ");
console.log(" -=-=-=-=-=- ");
for (let val in a) {
    console.log(" --> " + val);
}
console.log(" -=-=-=-=-=- \n");

// Segundo for com for of -> pega os valores do array
console.log(" -for .. of- ");
console.log(" -=-=-=-=-=- ");
for (let val of a) {
    console.log(" --> " + val);
}
console.log(" -=-=-=-=-=- \n");

// Terceiro for com forEach -> pega os valores do array
console.log(" -forEach- ");
console.log(" -=-=-=-=-=- ");
a.forEach((val, index) => {
    console.log(" --> " + index + " = " + val);
});
console.log(" -=-=-=-=-=- \n");

// Quarto for com for -> pega os valores do array
console.log(" -for (;;))- ");
console.log(" -=-=-=-=-=- ");
for (let i = 0; i < a.length; i++) {
    console.log(" --> " + i + " = " + a[i]);
}