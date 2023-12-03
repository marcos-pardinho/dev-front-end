// Criar uma classe Triangulo com métodos para calcular a área

class Triangulo {
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    // Método para calcular a área do triângulo
    calacularArea(){
        return(this.base * this.altura) / 2;
    }
}

// Criar uma instância da classe triangulo
const triangulo1= new Triangulo(6, 4);
console.log(triangulo1.calacularArea());
