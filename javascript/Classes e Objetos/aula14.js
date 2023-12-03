// Criar uma classe Agenda com métodos para adicionar, remover e listar contatos

class Agenda {
    constructor(){
        this.contatos = [];
    }

    // Método para adicionar um contato à agenda
    adicionarContato(nome, telefone){
        this.contatos.push({nome, telefone});
    }

    // Método para remover um contato da agenda pelo nome
    removerContato(nome){
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    // Método para listar todos os contatos da agenda
    listarContatos(){
        this.contatos.forEach(contato => console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}`));
    }
}  

// Criar uma instância da classe Agenda
const agenda1 = new Agenda();
agenda1.adicionarContato("Carlos", "123456789");
agenda1.adicionarContato("Ana", "987654321");
agenda1.listarContatos();

agenda1.removerContato("Carlos");
agenda1.listarContatos();
