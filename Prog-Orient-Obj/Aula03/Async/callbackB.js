const fs = require('fs')

fs.readFile('Prog-Orient-Obj/Aula03/Async/texto.txt', (err, buf) => {
    if(err)
        console.log("houve um erro")
    else
        console.log(buf.toString())
})