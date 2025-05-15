class Pessoa {
    #nome;
    #anoDeNascimento;
    #profissao;

    constructor(nome, anoDeNascimento, profissao) {
        this.#nome = nome;
        this.#anoDeNascimento = anoDeNascimento;
        this.#profissao = profissao;
    }

    getNome() {
        return this.#nome;
    }

    getAnoDeNascimento() {
        return this.#anoDeNascimento;
    }

    getProfissao() {
        return this.#profissao;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setProfissao(profissao) {
        this.#profissao = profissao;
    }

    calculaIdade() {
        return new Date().getFullYear() - this.getAnoDeNascimento();
    }

    saudar() {
        console.log("Olá, meu nome é " + this.#verificaNome() + "!!");
    }

    #verificaNome() {
        return (Array.isArray(this.getNome()) ? this.getNome().join(" ") : this.getNome())
    }

    toString() {
        return `Nome: ${this.#verificaNome()}, Ano de Nascimento: ${this.getAnoDeNascimento()}, Profissão: ${this.getProfissao()}`;
    }
}

class Estudante extends Pessoa {
    #curso;
    #matricula;
    materias = [];

    constructor(nome, anoDeNascimento, curso, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.#curso = curso;
        this.#matricula = matricula;
    }

    addNota(nome, nota) {
        if(nota < 0 || nota > 10) {
            console.log("Nota inválida");
            return;
        }

        if(nome === undefined || nome === null) {
            console.log("Disciplina inválida");
            return;
        }

        this.materias.push(new Materia(nome, nota));
    }

    getNota(disciplina) {
        const materia = this.materias.find(materia => materia.nome === disciplina);
        if(materia === undefined) {
            console.log("Disciplina não encontrada");
            return;
        }

        return materia.getNota();
    }

    getMateria(nome) {
        if(nome === undefined || nome === null) {
            console.log("Disciplina inválida!");
            return;
        }

        const materia = this.materias.find(materia => materia.nome === nome);

        if(!materia) {
            console.log("Disciplina não encontrada!");
            return;
        }

        return materia; //`${materia.nome} = ${materia.getNota()}`;
    }

    getMaterias() {
        return this.materias.map(nota => `${nota.nome} - ${nota.getNota()}`).join(", ");
    }

    getCurso() {
        return this.#curso;
    }

    getMatricula() {
        return this.#matricula;
    }

    setCurso(curso) {
        this.#curso = curso;
    }

    saudar() {
        super.saudar(); // sobreescreve o método da classe pai
        console.log(`Eu sou estudante de ${this.getCurso()}.`); // console.log(`Olá meu nome é ${this.getNome()} e eu sou estudante de ${this.getCurso()}.`);
    }

    toString() {
        return `${super.toString()}, Curso: ${this.getCurso()}, Matrícula: ${this.getMatricula()}${this.materias.length !== 0 ? `,\nMaterias: ${this.getMaterias()}` : ""}`;
    }
}

class Materia {
    #nota;

    constructor(nome, nota) {
        this.nome = nome;
        this.#nota = nota;
    }

    getNota() {
        return this.#nota;
    }

    setNota(nota) {
        if(nota < 0 || nota > 10) {
            console.log("Nota inválida");
            return;
        }

        this.#nota = nota;
    }
}

const pessoa = new Pessoa(["Nicolas", "Kics Marques"], 2002, "Programador");
console.log(pessoa.nome);
console.log(pessoa);
pessoa.setProfissao("Consultor de Integrações");
console.log(pessoa.calculaIdade());
pessoa.saudar();
console.log(pessoa.toString());

const estudante = new Estudante("Lucas", 2002, "Engenharia de Sofware", "123456");
console.log(estudante.toString());
estudante.addNota("Matemática", 8);
estudante.addNota("Física", 9);
console.log(estudante.toString());
console.log(estudante.getNota("Matemática"));
const materia = estudante.getMateria("Matemática");
console.log(materia);
materia.setNota(10);
console.log(estudante.getNota("Matemática"));
estudante.saudar();