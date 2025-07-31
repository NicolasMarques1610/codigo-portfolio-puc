/* 
A conversão não suporta qualquer tipo.
    Com objeto Date, que é serializado como String, não é possível converter diretamente de volta para Date.
    Deve-se usar uma função de reviver (reviver function) para converter a string de data em um objeto Date, que é um dos parâmetros da função JSON.parse.
*/

var json = '{"name": "John Doe", "birth": "2017-11-30T12:00:00.000Z", "city": "Porto Alegre"}';

var obj = JSON.parse(json, (key, value) => {
    if (key === "birth") {
        return new Date(value); // Converte a string de data em um objeto Date
    }
    return value; // Retorna o valor original para outras chaves
});

console.log("Nome: " + obj.name);
console.log("Data de Nascimento: " + obj.birth);
console.log("Data de Nascimento Formatada: " + obj.birth.toLocaleDateString());