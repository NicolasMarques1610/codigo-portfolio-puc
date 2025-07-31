let user = '{"name": "John Doe", "age": 30, "isAdmin": false, "friends": [0, 1, 2, 3]}';

// console.log(user.friends[0] ?? "Propriedade inexisente"); // O operador `??` (nullish coalescing) é usado para verificar se a propriedade `friends[0]` existe. Caso não exista, retorna o valor padrão "Propriedade inexistente".

user = JSON.parse(user); // Converte a string JSON em um objeto JavaScript
console.log(user.friends[0]);