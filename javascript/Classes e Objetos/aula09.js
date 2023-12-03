//  Criar uma classe contaBancaria com métodos para depositar e sacar dinheiro

class contaBancaria {
    constructor(saldoInicial){
        this.saldo = saldoInicial;
    }

    // Método para depositar dinheiro na conta
    depositar(valor){
        this.saldo += valor;
    }

    // Método para sacar dinheiro da conta, verificando se há saldo suficiente
    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Novo saldo  de R$ ${this.saldo}.`);

        }else {
            console.log("Saldo insuficiente para saque.")
        }
    }
}

// Criar uma instância da classe contaBancaria
const conta1 = new contaBancaria(1000);
conta1.depositar(500);
console.log(conta1.saldo);
conta1.sacar(200);