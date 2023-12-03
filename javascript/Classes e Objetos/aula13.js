// Criar uma classe para calculadora com métodos para adição, subtração, multiplicação e divisão

class Calculadora{
    static somar(a, b){
        return a + b;
    }

    static subtrair(a, b){
        return a - b;
    }

    static multiplicar(a, b){
        return a * b;
    }

    static dividir(a, b){
        return b !== 0 ? a / b : "Divisão por zero !";
    }
}

// Realizar operações usando a classe calculadora
console.log(Calculadora.somar(5, 3));
console.log(Calculadora.subtrair(10, 4));
console.log(Calculadora.multiplicar(2, 6));
console.log(Calculadora.dividir(8, 2));
console.log(Calculadora.dividir(8, 0));