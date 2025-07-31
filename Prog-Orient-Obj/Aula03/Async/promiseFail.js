const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() =>  reject("Rejeitado"), 2000);
});

let ifFail = (err) => console.log(`Uma exceção foi lançada`);

myFirstPromise
.then(null, (msg) => {throw "Não fui atendido!!!"} )
.catch( ifFail )

console.log("Fim do programa")