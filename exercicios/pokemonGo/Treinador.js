class Treinador {
    #nome;
    #cidade;
    #qtdPokemon;
    #qtdPokebola;
    #iniciouJornada;

    constructor(nome, cidade) {
        this.#nome = nome;
        this.#cidade = cidade;
        this.#qtdPokemon = 0;
        this.#qtdPokebola = 0;
        this.#iniciouJornada = false;
    }

    get nome() {
        return this.#nome;
    }

    get cidade() {
        return this.#cidade;
    }

    get qtdPokemon() {
        return this.#qtdPokemon;
    }

    get qtdPokebola() {
        return this.#qtdPokebola;
    }

    set qtdPokemon(valor) {
        this.#qtdPokemon = valor;
    }

    set qtdPokebola(valor) {
        this.#qtdPokebola = valor;
    }

    iniciarJornada() {
        if (this.#iniciouJornada) {
            console.log(`O treinador ${this.#nome} já inicou a jornada`);
            return;
        }

        this.#qtdPokebola += 5;
        this.#qtdPokemon += 1;
        this.#iniciouJornada = true;
        console.log(`O treinador ${this.#nome} iniciou sua jornada Pokemon`);
    }
}

module.exports = Treinador;