// Criar uma classe Email com método para definir e obter o destinatário

class Email{
    constructor(destinatario){
        this.destinatario = destinatario;
    }

    // Método para obter o destinatario do email
    getDestinatario(){
        return this.destinatario;
    }

    // Método para definir o destinatário do email
    setDestinatario(novoDestinatario){
        this.destinatario = novoDestinatario;
    }
}

// Criar uma instância da classe Email
const email1 = new Email("usuario@example.com");
console.log(email1.getDestinatario());

// Alterar o destinatário usando o método SetDestinatario
email1.setDestinatario("outroUsuario@example.com");
console.log(email1.getDestinatario());