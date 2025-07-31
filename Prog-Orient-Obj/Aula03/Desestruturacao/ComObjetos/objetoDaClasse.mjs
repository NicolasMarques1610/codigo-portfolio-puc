import { UmaClasse } from "./classeObjeto.mjs";

let umaClasse  = new UmaClasse("Primeiro atributo");

let {outroAtributo} = umaClasse;

console.log("um Atributo: " + umaClasse.capturaPrimeiroAtributo()); // "Primeiro atributo"
console.log("outro Atributo: " + outroAtributo); // "atributo dois"