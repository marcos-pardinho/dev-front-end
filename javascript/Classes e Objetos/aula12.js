// criar uma classe Aluno com métodos para definir e obter a média.

class Aluno {
    constructor(nome){
        this.nome = nome;
        this.notas = [];
    }

    // Método para adicionar uma nota
    adicionarNota(nota){
        this.notas.push(nota);
    }

    // Método para calcular a média das notas do aluno
    calcularMedia(){
        const totalNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        return totalNotas / this.notas.length;
    }
}

// Criar uma instância da classe Aluno
const aluno1 = new Aluno ("Maria");
aluno1.adicionarNota(7.5);
aluno1.adicionarNota(8.0);
aluno1.adicionarNota(9.2);

console.log(aluno1.calcularMedia());



