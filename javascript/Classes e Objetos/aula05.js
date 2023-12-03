// Criar uma classe animal com nome e som emitida
class Animal{
    constructor(nome, som){
        this.nome = nome;
        this.som = som;
    }

    fazerBarulho(){
        console.log(`${this.nome} faz o som: ${this.som}`);
    }
}

const caachorro = new Animal ("Cachorro", "Latida");
caachorro.fazerBarulho();