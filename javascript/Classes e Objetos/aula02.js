class Circulo {
    constructor(raio){
        this.raio = raio;
    }

    calcularArea(){
        return Math.PI * this.raio * this.raio;
    }
}

const Circulo1 = new Circulo(5);
console.log("Area do circulo: ", Circulo1.calcularArea());
