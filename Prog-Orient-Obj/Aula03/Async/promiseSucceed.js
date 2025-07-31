const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!');
    }, 2000);
});

let ifSucceed = (successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
}

myFirstPromise
    .then(ifSucceed);

console.log('Fim do Programa');