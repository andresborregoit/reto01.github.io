// Instanciamos los elementos HTML
let img = document.querySelector('#img');
let btn = document.querySelector('#btn');
let nombrepoke = document.querySelector('#nombrepoke');
let card = document.querySelector('#card');

// URL base para la API
const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// Función para obtener un número aleatorio entre 1 y 898 (cantidad total de Pokémon)
function getRandomPokemonId() {
    return Math.floor(Math.random() * 898) + 1;
}

// Función para mostrar un Pokémon en la página
function mostrarPokemon(pokemon) {
    img.src = pokemon.sprites.front_default;
    nombrepoke.textContent = "Tu pokemon es: " + pokemon.name;
}

// Evento click en el botón
btn.addEventListener('click', () => {
    // Generamos un número aleatorio para obtener un Pokémon aleatorio
    const randomPokemonId = getRandomPokemonId();
    
    // Hacemos la solicitud a la API con el ID del Pokémon aleatorio
    fetch(baseURL + randomPokemonId)
        .then(response => response.json())
        .then(data => {
            console.log("Detalles del Pokémon:", data); // Detalles del Pokémon específico
            // Hacemos una solicitud a la URL de la especie para obtener información general
            fetch(data.species.url)
                .then(response => response.json())
                .then(apiData => {
                    console.log("Información de la API:", apiData); // Mostramos la información de la API en la consola
                })
                .catch(error => {
                    console.error(error);
                });
            
            mostrarPokemon(data);
        })
        .catch(error => {
            console.error(error);
        });
});
