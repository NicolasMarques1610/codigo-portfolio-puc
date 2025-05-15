class ValidadorCPF {
    static #TAMANHO_CPF = 11;

    static validar(cpf) {
        if(cpf.length !== this.#TAMANHO_CPF) {
            return false;
        }

        return true;
    }
}

const cpf = '12345678901';

if(ValidadorCPF.validar(cpf)) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
};