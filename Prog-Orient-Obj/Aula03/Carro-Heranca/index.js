// import {Carro} from './carro.mjs';
// import {CarroComPlaca} from './carroComPlaca.js';
import { CarroComPlaca } from './carroComPlaca.js';
import {Locadora} from './locadora.js';

// let carro = new Carro(55);
// console.log(carro.capacidade);
// console.log(carro.tanque);

// for (let i = 0; i < 6; i++) {
//     carro.tanque = 10;
//     console.log(carro.tanque);
// }

let locadora = new Locadora();
locadora.adicionarCarro(new CarroComPlaca(55, 'ABC-1234'));
locadora.adicionarCarro(new CarroComPlaca(65, 'DEF-5678'));
locadora.consultaCarros();

locadora.abasteceCarro(0, 20);
locadora.abasteceCarro(1, 70);
locadora.consultaCarros();