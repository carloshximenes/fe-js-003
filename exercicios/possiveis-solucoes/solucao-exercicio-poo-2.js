class Treinador {
    #nome;
    #totalPokemons = 0;

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    get totalPokemons() {
        return this.#totalPokemons;
    }

    set totalPokemons(novoValor) {
        this.#totalPokemons = novoValor;
    }
}

class Pokemon {
    #nome;
    #level = 0;

    constructor(nome) {
        this.#nome = nome;
    }

    set level(novoValor) {
        this.#level = novoValor;
    }

    get level() {
        return this.#level;
    }

    get nome() {
        return this.#nome;
    }
}

const listaPokemons = [
    new Pokemon('Zubat'),
    new Pokemon('Rattata'),
    new Pokemon('Slowpoke'),
    new Pokemon('Gastly'),
    new Pokemon('Diglet'),
    new Pokemon('Oddish'),
    new Pokemon('Pidgey'),
    new Pokemon('Spearow'),
    new Pokemon('Magikarp'),
    new Pokemon('Vulpix'),
];

function iniciarCaptura(treinador) {
    const posicaoAleatoria = Math.floor(Math.random() * listaPokemons.length);
    const pokemonAleatorio = listaPokemons[posicaoAleatoria];

    const levelAleatorioBaseadoQntPkmTreinador = Math.floor((Math.random() * listaPokemons.length) + 1);
    pokemonAleatorio.level = levelAleatorioBaseadoQntPkmTreinador;

    console.log(`Um ${pokemonAleatorio.nome} (Lv. ${pokemonAleatorio.level}) selvagem apareceu.`);
    if(lancarPokebola(treinador, 1)) {
        console.log(`${pokemonAleatorio.nome} foi capturado com sucesso!`);
        treinador.totalPokemons += 1;
    } else if(lancarPokebola(treinador, 2)) {
        console.log(`${pokemonAleatorio.nome} foi capturado com sucesso!`);
        treinador.totalPokemons += 1;
    } else if(lancarPokebola(treinador, 3)) {
        console.log(`${pokemonAleatorio.nome} foi capturado com sucesso!`);
        treinador.totalPokemons += 1;
    } else {
        console.log(`${pokemonAleatorio.nome} fugiu!`);
    }
    console.log('--------------------------------------------');
}

function lancarPokebola(treinador, variavel) {
    console.log(`${treinador.nome} lançou uma Pokebola! (${variavel}x)`);
    const numeroAleatorio = Math.floor(Math.random() * 254) + 1;
    const totalVariavel = 25 * variavel + treinador.totalPokemons;
    return totalVariavel > numeroAleatorio;
}

function capturarPokemon() {
    const rangePokeball = Math.floor(Math.random() * 254) + 1;
    const variable = Math.floor(Math.random() * 24) + 1;
    const captureRate = rangePokeball - variable;
    if (captureRate <= 0) {
        return true;
    }

    const factor = (pokemonAleatorio.level * 255) / 12;
    const newRange = Math.floor(Math.random() * 254) + 1;
    const captureRate2 = factor - newRange;

    if (captureRate2 <= 0) {
        return true;
    }
    return false;
}

const treinador1 = new Treinador("Carlos");
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
console.log('--------------------------------------------');
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
console.log('--------------------------------------------');
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
console.log('--------------------------------------------');
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
console.log('--------------------------------------------');
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
iniciarCaptura(treinador1);
console.log(`Total de Pokemon do Treinador ${treinador1.nome}: ${treinador1.totalPokemons}`);
