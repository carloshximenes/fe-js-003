class Animal {
    #nome;
    #qntDePatas;
    #cor;
    #possuiRabo;

    constructor(nome, qntDePatas, cor, possuiRabo) {
        this.#nome = nome;
        this.#qntDePatas = qntDePatas;
        this.#cor = cor;
        this.#possuiRabo = possuiRabo;
    }

    andar() {
        return 'Eu sou um animal e eu sei andar';
    }

    mostrarPatas() {
        return 'Eu tenho ' + this.#qntDePatas + ' patas';
    }
}

class Cachorro extends Animal {
    #raca;
    #possuiPedigree;

    constructor(nome, qntDePatas, cor, possuiRabo, raca, possuiPedigree) {
        super(nome, qntDePatas, cor, possuiRabo);
        this.#raca = raca;
        this.#possuiPedigree = possuiPedigree;
    }

    latir() {
        return 'Au, Au, Au';
    }

    andar() {
        return 'Não quero andar, vou dormir';
    }
}

class Passsaro extends Animal {
    formatoDoBico;
    especie;
    corDasPenas;
}

const animal = new Animal('Bartolomeu', 5, 'rosa', true);
const animal2 = new Animal('Baltazar', 17, 'roxo', false);
console.log(animal.mostrarPatas());

const cachorro1 = new Cachorro('Lisa', 4, 'tricolor', true, 'beagle', true);
console.log(cachorro1.latir());
console.log(cachorro1.andar());