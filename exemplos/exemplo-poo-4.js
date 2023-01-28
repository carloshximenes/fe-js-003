class Animal {
    //atributos //Abstração
    #nome;
    #raca;
    #cor;
    #qtdDePatas;
    #especie;

    constructor(nome, raca, cor, qtdDePatas, especie) {
        this.#nome = nome;
        this.#raca = raca;
        this.#cor = cor;
        this.#qtdDePatas = qtdDePatas;
        this.#especie = especie;
        this.especie = especie;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    
    //ação
    setNome(novoNome) {
        this.#nome = novoNome;
    }

    comecarAhAndar() {
        return 'estou andando';
    }

    comer() {
        return 'estou comendo';
    }
}



var animal1 = new Animal();
animal1.nome = 'Lisa';
animal1.raca = 'Beagle';
animal1.cor = 'Tricolor';
animal1.qtdDePatas = 4;
animal1.especie = 'Cachorro';

var animal2 = new Animal('Lisa', 'Beagle', 'Tricolor', 4, 'Cachorro');
var animal3 = new Animal('Bartolomeu', 'Desconhecida', 'Rosa', 5, 'Desconhecida');

console.log('esta atualizado');
console.log(animal1.nome);
console.log(animal2.nome);
console.log(animal3.nome);

animal1.nome = 'Teste com set separado';
animal2.setNome('Teste com set junto');

console.log(animal1.nome, animal2.nome);