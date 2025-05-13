function criaEmpregado (nome, cargo, salarioBase, valorHoraExtra, qtdHorasExtras) {
    return {
        nome,
        cargo,
        salarioBase,
        valorHoraExtra,
        qtdHorasExtras,
        calculaSalario: function() {
            return this.salarioBase + (this.valorHoraExtra * this.qtdHorasExtras);
        }
    };
}

const empregado1 = criaEmpregado("Nicolas", "Júnior", 5000, 100, 10);
const empregado2 = criaEmpregado("Marcus", "Gerente", 10000, 1000, 2);
console.log(empregado1);
console.log(`O solário do ${empregado1.nome} neste mês é ${empregado1.calculaSalario()}\n`);
console.log(empregado2);
console.log(`O solário do ${empregado2.nome} neste mês é ${empregado2.calculaSalario()}`);