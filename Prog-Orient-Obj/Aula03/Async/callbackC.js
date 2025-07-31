const fs = require('fs')

fs.readFile('Prog-Orient-Obj/Aula03/Async/texto.txt', (err, buf) => {
    if(err)
        throw err
    else
        console.log(buf.toString())
})
    