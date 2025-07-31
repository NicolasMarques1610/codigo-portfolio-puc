export class Locadora {
    #_carros;

    constructor() {
        this.#_carros = [];
    }

    adicionarCarro(carro) {
        this.#_carros.push(carro);
    }

    consultaCarros() {
        this.#_carros.forEach((carro) => console.log(`Carro placa (${carro.placa}); tanque: ${carro.tanque} litros; capacidade: ${carro.capacidade} litros`));
    }

    abasteceCarro(index, quantidade) {
        if (index >= 0 && index < this.#_carros.length) {
            this.#_carros[index].tanque = quantidade;
        }
    }
}