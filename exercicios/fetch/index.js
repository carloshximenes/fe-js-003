let pokemonData;

const headers = new Headers();

const params = {
    method: 'GET',//POST DELETE PUT
    headers: headers,
    mode: 'cors',
    cache: 'default'
};

// const params = {
//     method: 'POST',
//     body: data,
//     headers: new Headers()
// }

const numeroAleatorio = Math.floor(Math.random() * 150);
const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroAleatorio}.png`;
// const url = 'https://pokeapi.co/api/v2/pokemon/';

const request = new Request(url, params);

//IMAGEM
var myImage = document.querySelector('img');

fetch(request)
    .then(function (response) {
        return response.blob();
    })
    .then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
        console.log(myImage);
    });

//JSON
// fetch(request)
//     .then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log(data)
//         setData(data)
//     }).catch( 
//         // alert('pokemon nao encontrado')
//     );


function setData(pokemon) {
    const pokemonNumber = document.querySelector('.number');
    const pokemonName = document.querySelector('.name');
    const pokemonHeight = document.querySelector('.height');
    const pokemonWeight = document.querySelector('.weight');
    const pokemonAbility = document.querySelector('.abilities');
    const pokemonType = document.querySelector('.type');
    
    pokemonNumber.innerHTML = pokemon.id;
    pokemonName.innerHTML = pokemon.name;
    pokemonHeight.innerHTML = `${pokemon.height / 10} m`;
    pokemonWeight.innerHTML = `${pokemon.weight / 10} kg`;

    pokemon.abilities.forEach(a => {
        pokemonAbility.innerHTML += `<span>${a.ability.name}</span>`;
    });

    pokemon.types.forEach(t => {
        pokemonType.innerHTML += `<span>${t.type.name}</span>`;
    });
}
