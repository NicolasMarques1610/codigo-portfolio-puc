// TDD - Test Driven Development
let novoMapa = new Map();

class HistoryMap {
    constructor() {
        this.data = new Map();
    }
}

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: 'urlSozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: 'urlSozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: 'urlSozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: 'urlSozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', {});

novoMapa.set('11/11/2011 - 23:31 - URL', { title: 'Título do site', url: 'urlSozinha'});

let resultado = novoMapa;
console.log(resultado);

let result = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(result);