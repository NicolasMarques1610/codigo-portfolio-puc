let nomeCompleto = ["Nicolas", "Kics", "Marques"];
let [nome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log(nome);
console.log(nomeDoMeio);
console.log(ultimoNome);
console.log(`${nome} ${nomeDoMeio} ${ultimoNome}`);
console.log("-----------------");

let [primeiroNome, ...restante] = nomeCompleto;
console.log(primeiroNome);
console.log(restante.toString().replace(",", " "));
console.log("-----------------");

let [soNome, , soUtimoNome] = nomeCompleto;
console.log(soNome);
console.log(soUtimoNome);