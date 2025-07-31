import {UmaClasse} from '../../Desestruturacao/ComObjetos/classeObjeto.mjs';

let umObjetoDeClasse = new UmaClasse("um valor");

let json = JSON.stringify(umObjetoDeClasse); // Converte o objeto em uma string JSON

console.log(json);