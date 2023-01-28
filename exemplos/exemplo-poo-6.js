class Animal {
    nome;
    qtdPatas;
    cor;
}

class Cliente {
    #nome;
    #sobrenome;
    #cpf;

    constructor(nome, sobrenome, cpf) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    nomeCompleto() {
        return `${this.#nome} ${this.#sobrenome}`;
    }
}


class ContaCorrente {
    static totalDeContas = 0;
    static exibirTotalContas() {
        return ContaCorrente.totalDeContas;
    }
    #agencia;
    #numeroConta;
    #cliente;
    #saldo = 0;

    get saldo() {
        return this.#saldo;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this.#cliente = novoCliente;
        }
    }

    constructor(agencia, numeroConta, cliente) {
        this.#agencia = agencia;
        this.#numeroConta = numeroConta;
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        } else {
            this.#cliente = null;
        }
        ContaCorrente.totalDeContas += 1;
    }

    sacar(valor) {
        if (this.#saldo >= valor && valor > 0) {
            this.#saldo -= valor;
        } else {
            console.log('Pode não meu chapa!');
        }
    }

    depositar(valor) {
        if (valor >= 0) {
            this.#saldo += valor;
        } else {
            console.log('Passe mais tarde!');
        }
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}

var cliente1 = new Cliente('Carlos', 'Mota', '12345678900');
var cliente2 = new Cliente('Giulyano', 'Santos', '98765432100');
var cliente3 = new Animal('Bartolomeu', 5, 'rosa');
var cliente4 = 'banana';

var contaCliente1 = new ContaCorrente(3579, 234567, cliente1);
console.log(ContaCorrente.exibirTotalContas()); //1
var contaCliente2 = new ContaCorrente(4856, 123456, cliente2);
console.log(ContaCorrente.exibirTotalContas()); //2
var contaCliente3 = new ContaCorrente(7890, 098765, cliente3);
console.log(ContaCorrente.exibirTotalContas()); //3
var contaCliente4 = new ContaCorrente(1234, 345673, cliente4);
console.log(ContaCorrente.exibirTotalContas()); //4

contaCliente3.cliente = cliente3;
contaCliente4.cliente = cliente4;

var novoCliente3 = new Cliente('Bartolomeu', 'Barbosa', '345535789895');
var novoCliente4 = new Cliente('Banana', 'Prata', '12345678899');

contaCliente3.cliente = novoCliente3;
console.log(ContaCorrente.exibirTotalContas()); //4
contaCliente4.cliente = novoCliente4;
console.log(ContaCorrente.exibirTotalContas()); //4

console.log(contaCliente1);
console.log(contaCliente2);
console.log(contaCliente3);
console.log(contaCliente4);



// //Deposito
// contaCliente2.depositar(1001);
// contaCliente1.depositar(1002);

// //Saque
// contaCliente2.sacar(301);
// console.log(contaCliente2.saldo); //700

// //Transferencia
// contaCliente1.transferir(102, contaCliente2);
// console.log(contaCliente1.saldo); //900
// console.log(contaCliente2.saldo); //802

// //Hacker
// contaCliente2.sacar(-100000);
// contaCliente2.sacar(null);
// console.log(contaCliente2.saldo); //802

// //Hacker 2
// contaCliente2.depositar(-1000);
// console.log(contaCliente2.saldo); //802