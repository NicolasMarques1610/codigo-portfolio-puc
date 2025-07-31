const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Pedido atendido');
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
        return "valor";
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

console.log('Fim do Programa');