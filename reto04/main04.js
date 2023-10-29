let btn1 = document.querySelector('#btn') //instanciado de containers y botones
let container1 = document.querySelector('#container')
let container2 = document.querySelector('#container2')
let container3 = document.querySelector('#container3')

let btnadd = document.querySelector('#btnadd2')
let btnback = document.querySelector('#btnback')
let btn3back = document.querySelector('#btn3back')

let id = 0
let tareas = JSON.parse(localStorage.getItem("tareas")) || []  // chequeo si hay algo en el local store de no ser asi el array tareas estara vacio

let horas6 = 1
let horas12 = 1
let dia1 = 1
let dia2 = 12
let dia3 = 1
let dia4 = 1
let dia5 = 1
let dia6 = 1
let dia7 = 1
let dia8 = 1
let dia9 = 1
let dia10 = 1
let dia11 = 1
let dia12 = 1
let dia13 = 1
let dia14 = 1
let dia15 = 1
let dia16 = 1
let dia17 = 1
let dia18 = 1
let dia19 = 1
let dia20 = 1
let dia21 = 1
let dia23 = 1
let dia24 = 1
let dia25 = 1
let dia26 = 1
let dia27 = 1
let dia28 = 1
let dia29 = 1
let dia30 = 1
let dia31 = 1

// botones de pantallas
btn.addEventListener ('click', ()=> {
    container1.style.display = "none"
    container2.style.display = "flex"

})

btnback.addEventListener('click', ()=>{
    container1.style.display = "flex"
    container2.style.display = "none"
}
)

btnadd.addEventListener('click', ()=>{
    container3.style.display = "flex"
    container2.style.display = "none"

})

btn3back.addEventListener('click', ()=>{
    container2.style.display = "flex"
    container3.style.display = "none"
    console.log('que esta pasando')

})

function fechaCorta(date) {  //funcion choriza creada con conceptos que nos tiro mati en la jam,  tambien de la documentacion de de get date 
    let day = date.getDate(); // y chat gpt tirando un centroviche pero se entiende, hacemos variables de dias mes y año  y los retornamos
    let month = date.getMonth() + 1; 
    let year = date.getFullYear() % 100; 

    return `${day}/${month}/${year}`;
}
function adddias (dias){                         
    let date = new Date ()
    date.setDate(date.getDate() + dias )
    console.log(date)
    return fechaCorta(date);
}

// se empieza a picar , formulario ... suspenso 
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();   
        /*bueno aca estamos tirando la funcion para recolectar los datos del input*/
            /*aca agarramos el select y lo instanciamos*/
            var selectEmoji = document.getElementById("select");
            // aca nos dan el index de la opcion seleccionada podria haber sido el value tranquilamente
            var indiceEmoji = selectEmoji.selectedIndex;
            //console.log('lo que dice el indice seleccionado es esto' , indiceEmoji) //para chekear util pero lo voy a comentar
            // ahi nos dio un numero en azul que es el index
            // y ahora vamos a buscar el valor de lo que hay en el select y luego lo que se ve del select que son dos cosas distintas
            var valorEmoji = selectEmoji.options[indiceEmoji].value;
            var textoEmoji = selectEmoji.options[indiceEmoji].text;
            
            let input2 = e.target.input2.value
            let periodicidad = e.target.selecttiempo.value

            //AHORA A HACER LO MISMO CON EL TIEMPO
            var selectTimer = document.getElementById("selecttiempo");
            var indiceTimer = selectTimer.selectedIndex;
            //console.log('lo que dice el indice seleccionado es esto' , indiceTimer) //para chekear 0util pero lo voy a comentar
            var valorTimer = selectTimer.options[indiceTimer].value;
            var textoTimer = selectTimer.options[indiceTimer].text;



            // Imprime el valor y el texto seleccionado en la consola
    
        /*  console.log("Valor de emoji seleccionado: " + valorEmoji);
            console.log("Texto de emoji seleccionado: " + textoEmoji);
            console.log("Valor de timer seleccionado: " + valorTimer);
            console.log("Texto de timer seleccionado: " + textoTimer);*/

            

            console.log("Tu tarea es " + input2 , ', tu emoji es ' , textoEmoji , 'y tu periodicidad de tarea es de '+ textoTimer);
            // creamos el objeto de tarea que ira dento de nuestro array TAREA'S
            const tarea = {
                deber: input2 ,
                timer: adddias(parseInt(valorTimer)),  
                emoji: textoEmoji } 


            tareas.push(tarea) //LO PUSHEAMOS
            localStorage.setItem("tareas" , JSON.stringify(tareas)) //lo mandamos al localstorage

        agregarTarea(input2, textoEmoji , textoTimer)
        formulario.reset()
        getTareas()


})

const divtareas = document.querySelector('#divtitulopadre3')

const agregarTarea = (input2 , textoEmoji , textoTimer) => {
    id++
    
    /**let template = `<div id="divform4creacion"  class="width"><div id="row1"><div id="cerrar3"><button>x</button></div></div>
    <div id="row2"><span class="spanemojiclass" id="spanemoji+${id}">${textoEmoji}</span> <p class="ptitularclass" id="ptitular+${id}">${input2}</p></div>
    <div id="row3"><p class="ptimerclass" id="ptimer+${id}">${textoTimer}</p> <button id="btncheck3"> Check!</button></div></div>
    ` 
    /*divtareas.innerHTML += template*/
    
}

// ... (Código anterior)

const getTareas = () => {
    divtareas.innerHTML = ''; // Limpia el contenido anterior antes de agregar nuevas tareas
    
    tareas.forEach((tarea, index) => {
        let template = `
        <div id="divform4creacion" class="width">
            <div id="row1">
                <div id="cerrar3">
                    <button>x</button>
                </div>
            </div>
            <div id="row2">
                <span class="spanemojiclass">${tarea.emoji}</span>
                <p class="ptitularclass">${tarea.deber}</p>
            </div>
            <div id="row3">
                <p class="ptimerclass"> Fecha: ${tarea.timer}</p>
                <p class="ptimerclass">${tarea.timer}</p>
                <button id="btncheck3"> Check!</button>
            </div>
        </div>`;

        divtareas.insertAdjacentHTML('afterbegin', template);
    });
}

getTareas(); // Llamada fuera de la función getTareas

// ... (Resto del código)
