// Criar uma classe "Carro" com marca, modelo e ano de fabricação

class Carro {
    constructor (marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
}

const carro1 = new Carro("Toyota", "Corolla", 2023)
console.log(carro1)