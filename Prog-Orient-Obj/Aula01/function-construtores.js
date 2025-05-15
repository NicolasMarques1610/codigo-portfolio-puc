function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa(["Nicolas", "Kics Marques"], 2002, "Programador");
console.log("Objeto")
console.log(pessoa);
console.log("Funcão calcula idade: " + pessoa.calculaIdade());
console.log("Valor primitivo do objeto");
console.log(pessoa.valueOf());
console.log("Nome da função construtora: " + pessoa.constructor.name);

const pessoa2 = Object.create(pessoa); // Cria um novo objeto com pessoa como protótipo, herda os métodos e propriedades
pessoa2.nome = "Lucas";
console.log("Pessoa: " + pessoa.nome);
console.log("Pessoa2: " + pessoa2.nome);
console.log(pessoa2.anoDeNascimento);
console.log(pessoa2.profissao);
console.log(pessoa2.calculaIdade());
console.log(pessoa2);
console.log(pessoa2.constructor);

// Herança Prototipada

Pessoa.prototype.saudar = function() { // Adiciona um método ao protótipo da função construtora
    console.log("Olá, meu nome é " + (Array.isArray(this.nome) ? this.nome.join(" ") : this.nome));
};
pessoa.saudar();
pessoa2.saudar();