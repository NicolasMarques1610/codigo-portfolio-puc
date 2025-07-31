class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    area() {
        return (Math.PI * this.raio ** 2).toFixed(2);
    }
    circunferencia() {
        return (2 * Math.PI * this.raio).toFixed(2);
    }
};

// exportando a classe Circulo
module.exports = Circulo;