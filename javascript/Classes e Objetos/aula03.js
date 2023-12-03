class livro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    exibirInformacoes(){
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
}

const livro1 = new livro ("Dom Casmurro", "Machado de Assis");
livro1.exibirInformacoes();