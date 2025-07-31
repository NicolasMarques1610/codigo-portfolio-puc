import {Carro} from './carro.mjs';

export class CarroComPlaca extends Carro {
    #_placa;

    constructor(capacidadeTanque, placa) {
        super(capacidadeTanque);
        this.#_placa = placa;
    }

    get placa() {
        return this.#_placa;
    }
}