const Treinador = require('./Treinador');
const Pokemon = require('./Pokemon');

const treinador1 = new Treinador('Ash', 'Pallet');
const opcoesPokemonSelvagem = [
    new Pokemon('Pidgey'),
    new Pokemon('Rattata'),
    new Pokemon('Gastly'),
    new Pokemon('Grimer'),
    new Pokemon('Slowpoke'),
    new Pokemon('Magikarp'),
    new Pokemon('Psyduck'),
    new Pokemon('Vulpix'),
    new Pokemon('Oddish'),
    new Pokemon('Pikachu'),
];

function selecionarPokemonAleatorio() {
    const indexAleatorio = Math.floor(Math.random() * opcoesPokemonSelvagem.length);
    return opcoesPokemonSelvagem[indexAleatorio];
}

function jogarPokebola(treinador, pokemonAleatorio, contador) {
    const temPokebola = treinador.qtdPokebola > 0;
    if (!temPokebola) {
        console.log(`Você não tem pokebolas disponíveis`);
        return false;
    }
    treinador.qtdPokebola--;
    const chanceAcerto = Math.floor(Math.random() * 100);
    if (chanceAcerto <= (25 * (contador + 1))) {
        console.log(`${treinador.nome} capturou um ${pokemonAleatorio.nome}`);
        treinador.qtdPokemon++;
        return false;
    } else {
        console.log(`${pokemonAleatorio.nome} quebrou a pokebola`);
        pokemonAleatorio.selvagem = false;
        return true;
    }
}

function iniciarBatalha(treinador) {
    const pokemonAleatorio = selecionarPokemonAleatorio();
    console.log(`Um ${pokemonAleatorio.nome} (Lv. ${pokemonAleatorio.level}) selvagem apareceu!`);
    let contador = 0;
    while (contador < 3) {
        let podeContinuarJogando = jogarPokebola(treinador, pokemonAleatorio, contador);
        if (!podeContinuarJogando) {
            break;
        }
        contador++;
    }
}

treinador1.iniciarJornada();
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');
iniciarBatalha(treinador1);
console.log(treinador1.qtdPokemon);
console.log(treinador1.qtdPokebola);
console.log('-------------');