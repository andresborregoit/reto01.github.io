//Instanciamos
let img = document.querySelector('#img')
let btn = document.querySelector('#btn')
let nombrepoke = document.querySelector('#nombrepoke')
let card = document.querySelector('#card')
//Llamada  a la api
const url = "https://pokeapi.co/api/v2/pokemon/"
// una vez que llamamos a la urrl la parseamos ajson // en el segundo then imprimimos la respuesta ya en js, se hace con then poque este res es asincronico
fetch(url)
.then((res) => res.json())
.then((data) => mostrarListado(data))
.catch((err) => console.error(err))


let mostrarListado = (res) =>{
    res.results[3]((item) => {
        card.innerHTML += "item.name";
        nombrepoke.innerHTML += item.name






    })

};

