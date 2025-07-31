export function area(r) { return (Math.PI * r ** 2).toFixed(2); };
export function circunferencia(r) { return (2 * Math.PI * r).toFixed(2); };

export class Circulo {
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