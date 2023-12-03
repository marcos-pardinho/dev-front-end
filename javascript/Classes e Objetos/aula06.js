// Criar uma classe livro com  metodos para obter e definir o autor

class Livro {
    constructor (titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    // metodo para obter o autor do livro
    getAutor(){
        return this.autor;
    }

    // método para definir o autor do livro
    setAutor(novoAutor){
        this.autor = novoAutor;
    }
}

// Criar uma instancia da classe livro
const livro1 = new Livro ("JavaScript 101", "John Doe");
console.log(livro1.getAutor());

// Alterar o autor usando o método SetAutor
livro1.setAutor("Jane Doe");
console.log(livro1.getAutor());