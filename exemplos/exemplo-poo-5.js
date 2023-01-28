class Pessoa {
    #nome;
    #cpf;
    #endereco;

    getNome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get endereco() {
        return this.#endereco;
    }

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
        // this.#endereco = endereco;
        this.nome = 'Pedro';
    }
}

var pessoa1 = new Pessoa('Carlos', '12345678900', 'Rua BliBliBli');
console.log(pessoa1.nome, pessoa1.cpf, pessoa1.endereco, pessoa1.getNome(), pessoa1);