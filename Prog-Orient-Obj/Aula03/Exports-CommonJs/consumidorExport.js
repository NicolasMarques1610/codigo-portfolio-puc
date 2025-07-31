const circulo = require('./definicaoExport.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

// desestruturação
const {area, circunferencia} = require('./definicaoExport.js');
console.log(`Área do círculo de raio 5 é ${area(5)}`);
console.log(`Circunferência do círculo de raio 5 é ${circunferencia(5)}`);

const Circulo = require('./circuloExport.js');
const c1 = new Circulo(3);
console.log(`Área do círculo de raio ${c1.raio} é ${c1.area()}`);