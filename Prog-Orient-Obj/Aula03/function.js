function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    return resultado;
}

console.log(potencia()); // Erro: base não definida
console.log(potencia(2)); // Usa o valor padrão de expoente
console.log(potencia(2, 6));
console.log(potencia(2,6,18)); // Ignora o terceiro parâmetro

// função anônima
let anonima = (a, b) => a + b;

console.log(anonima(2, 3));

// função manipulável
function decision(question, doOk, doCancel) {
    if (question === "OK") doOk();
    else doCancel();
}

// function showOk() {
//     console.log("You agreed.");
// }

// function showCancel() {
//     console.log("You canceled the execution.");
// }

// decision("OK", showOk, showCancel);
// decision("Cancel", showOk, showCancel);

// decision("OK", _ => {console.log("You agreed.");}, () => {console.log("You canceled the execution.");});
decision("OK", () => {console.log("You agreed.");}, () => {console.log("You canceled the execution.");});
decision("Cancel", () => {console.log("You agreed.");}, () => {console.log("You canceled the execution.");});


// função de fechamento (closure)
function somaValores(x) {
    return function(y) {
        return x + y;
    };
}

let soma5 = somaValores(5);
console.log(soma5(3));