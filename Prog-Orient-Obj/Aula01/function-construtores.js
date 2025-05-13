function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa(["Nicolas", "Kics Marques"], 2002, "Programador");
console.log(pessoa);
console.log(pessoa.calculaIdade());
console.log(pessoa.valueOf());
console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.constructor.name);

const pessoa2 = Object.create(pessoa);
console.log(pessoa2);
console.log(pessoa2.constructor);