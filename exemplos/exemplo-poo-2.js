class Pessoa {
    nome;

    constructor(nome) {
        this.nome = nome;
    }
}

class Usuario extends Pessoa {
    login;
    senha;
    constructor(nome, login, senha) {
        super(nome);
        this.login = login;
        this.senha = senha;
    }
}

class Administrador extends Usuario {
    possuiSuperPoderes;
    constructor(nome, login, senha, possuiSuperPoderes) {
        super(nome, login, senha);
        this.possuiSuperPoderes = possuiSuperPoderes;
    }
}

const admin = new Administrador('Carlos', 123, 321, true);
console.log(admin.nome);