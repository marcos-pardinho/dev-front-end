// Criar uma classe Produto com métodos para definir e obter o preço

class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    // Método para obter o preco do produto
    getPreco(){
        return this.preco;
    }

    // Método para definir um novo preço para o produto
    setPreco(novoPreco){
        this.preco = novoPreco;
    }
}

// Criar uma instância da classe produto
const produto1 = new Produto("Notebook", 2000);
console.log(produto1.getPreco());

// Alterar o preco usando o método setPreco
produto1.setPreco(1800);
console.log(produto1.getPreco());