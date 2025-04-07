// console.log('Hello World!');

function avaliaParidade(limite) {
    for(let i = 0; i < limite; i++) {
        if(i % 2 == 0) console.log(i + ' é par');
        else console.log(i + ' é ímpar');
    }
}

avaliaParidade(10);