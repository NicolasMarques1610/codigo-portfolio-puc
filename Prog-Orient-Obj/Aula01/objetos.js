let pessoa = { nome: "João", idade: 30, saudar: function() { console.log("Olá!!!");}};
let pessoa2 = [
    { nome: "João", idade: 30, saudar: function() { console.log("Olá!!!");}},
    { nome: "Maria", idade: 25, saudar: function() { console.log("Oi!!!");}},
    { nome: "José", idade: 35, saudar: function() { console.log("Oi!!!");}}
]

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.saudar();
console.log(pessoa["nome"]);
console.log(pessoa.saudar);
console.log(pessoa);
console.log("-----------------");

console.log(pessoa2[2].nome);
console.log("-----------------");

pessoa.saudar = function(amigo) { console.log("Hello " + amigo + "!");};
pessoa.saudar("Maria");
console.log(pessoa);
console.log("-----------------");

const empregado = {
    salarioBase: 5000,
    valorHoraExtra: 100,
    qtdHorasExtras: 10,
    calculaSalario: function() {
        return this.salarioBase + (this.valorHoraExtra * this.qtdHorasExtras);
    }
};

console.log(empregado.calculaSalario());