class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    }

    getNome() {
        return this.nome;
    }

    getAnoDeNascimento() {
        return this.anoDeNascimento;
    }

    getProfissao() {
        return this.profissao;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setProfissao(profissao) {
        this.profissao = profissao;
    }

    calculaIdade() {
        return new Date().getFullYear() - this.getAnoDeNascimento();
    }

    saudar() {
        console.log("Olá, meu nome é " + this.verificaNome());
    }

    verificaNome() {
        return (Array.isArray(this.getNome()) ? this.getNome().join(" ") : this.getNome())
    }

    toString() {
        return `Nome: ${this.verificaNome()}, Ano de Nascimento: ${this.getAnoDeNascimento()}, Profissão: ${this.getProfissao()}`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, curso, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.curso = curso;
        this.matricula = matricula;
    }

    getCurso() {
        return this.curso;
    }

    getMatricula() {
        return this.matricula;
    }

    setCurso(curso) {
        this.curso = curso;
    }

    toString() {
        return `${super.toString()}, Curso: ${this.getCurso()}, Matrícula: ${this.getMatricula()}`;
    }
}

const pessoa = new Pessoa(["Nicolas", "Kics Marques"], 2002, "Programador");
console.log(pessoa);
console.log(pessoa.calculaIdade());
pessoa.saudar();
console.log(pessoa.toString());

const estudante = new Estudante("Lucas", 2002, "Engenharia de Sofware", "123456");
console.log(estudante);