class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    imprimirDetalhes(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}   

const pessoa1 = new Pessoa ("Alice", 25);
pessoa1.imprimirDetalhes();