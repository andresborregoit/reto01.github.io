let btn1 = document.querySelector('#btn') //instanciado de containers y botones
let container1 = document.querySelector('#container')
let container2 = document.querySelector('#container2')
let container3 = document.querySelector('#container3')

let btnadd = document.querySelector('#btnadd2')
let btnback = document.querySelector('#btnback')
let btn3back = document.querySelector('#btn3back')

let ptitulo1 = document.querySelector('#ptitulo1')
let ptitulo2 = document.querySelector('#ptitulo2')
let ptitulo3 = document.querySelector('#ptitulo3')
let emote = document.querySelector('#emoji')

let id = 0
let tareas = JSON.parse(localStorage.getItem("tareas")) || []  // chequeo si hay algo en el local store de no ser asi el array tareas estara vacio


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

function modificarP() {
    if (tareas.length > 0) {
        ptitulo1.innerHTML = 'Felicitaciones';
        ptitulo2.innerHTML = 'Tenes varias tareas';
        ptitulo3.innerHTML = 'Por hacer!';
        emote.innerHTML = '🤩'
        
    } else {
    console.log('no tenes tareas loko, quelokepasa');
    }
}
modificarP()



    function fechaCorta(date) {  //funcion choriza creada con conceptos que nos tiro mati en la jam,  tambien de la documentacion de de get date 
    let day = date.getDate(); // y chat gpt tirando un centroviche pero se entiende, hacemos variables de dias mes y año  y los retornamos
    let month = date.getMonth() + 1;  //gran funcion que trabaja con el date que le pasamos y accedemos  a su dia (date) ,a su mes (getmonth)y get year
    let year = date.getFullYear() % 100; 

    return `${day}/${month}/${year}`;
}
function adddias (dias){                         
    let date = new Date () // nos da la fecha actual
    date.setDate(date.getDate() + dias ) //set date para cambiar date. get date para traer el date y + dias para sumar los dias que 
    console.log(date)                                                                 // oh casualidad es el parametro de la funcion
    return fechaCorta(date); //como si fuera poco llamamos a la funcion fecha corta para que devuelva el tipo de fecha resumido xx/xx/xx
}                                                                                                    

function adddiasRegresivo(dias) {          // aca tuvimos que hacer otra vez la misma funcion pero con un return distinto ya que 
    let date = new Date();                 // el formato de fechaCorta no nos permitia trabajar bien.
    date.setDate(date.getDate() + dias);
    return date;
}                                            // hasta ahora estas funciones crean fechas estaticas, cuando deberias hacerlo en xx/xx/xx
                                             //y dentro de cuantos dias es la tarea
            





// se empieza a picar , formulario ... suspenso 
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();   //recomendado por mati lo acabo de googlear no entendi bien




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


        

            let horaInicio = Date.now() //DEFINIMOS HORA INICIO
            console.log("Tu tarea es " + input2 , ', tu emoji es ' , textoEmoji , 'y tu periodicidad de tarea es de '+ textoTimer);
            // creamos el objeto de tarea que ira dento de nuestro array TAREA'S
            const tarea = {
                deber: input2 ,
                timer: adddias(parseInt(valorTimer)),  //funcion add dias que agrega a el date now de esa funcion los dias y devuelve xx/xx/xx
                timerRegresivo: adddiasRegresivo(parseInt(valorTimer)), //aca devuelve el valor en estado manipulable para que despues lo hagamos regresivo
                emoji: textoEmoji,
                horaInicio: horaInicio,
                valorDelTimer: (parseInt(valorTimer))
                } 


            tareas.push(tarea) //LO PUSHEAMOS
            localStorage.setItem("tareas" , JSON.stringify(tareas)) //lo mandamos al localstorage
        alert('agregaste una tarea!')
        
        formulario.reset()
        getTareas()


})

const divtareas = document.querySelector('#divtitulopadre3') //instanciamos el div que luego llenaremos de template

function timeleft(time) { //funcion picada tiempo restante cuenta regresiva
    let date = new Date();    //crea en date la gecha del dia de hoy
    let tareasDate = new Date(time); // aca mas abajajo traemos el tarea.timer.regresivo, que viene de add dias que tiene un date now, es la fecha cuando se clickeo
    let timeLeft = tareasDate - date; // time left es la diferencia en milisegundos de tareas date (fecha que queremos realizar la tarea)
                                      // y date que es un new date


    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const horas = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutos = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const segundos = Math.floor((timeLeft % (60 * 1000)) / 1000);

    let fraseTimer = `Faltan ${days} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`;

    return fraseTimer;
}

let actual = (horaInicio, valorDelTimer ) => {
    let ahora = Date.now();
    let tiempoTranscurrido = Math.round(ahora - horaInicio);
    console.log("pasaron: ", tiempoTranscurrido /1000 /60 , "minutos")
    let divform4creacion = document.querySelector('#divform4creacion')

    let tiempoDeEspera = 1000*60*60*valorDelTimer; //donde ponemos el timer value
    let tercio = tiempoDeEspera / 3

    if (tiempoTranscurrido > tercio*2){
        console.log("red")
        divform4creacion.classList.add('bg-red')
    } else if(tiempoTranscurrido < tercio){
        console.log("gren")
        divform4creacion.classList.add('bg-green');
    }else if (tiempoTranscurrido > tercio && tiempoTranscurrido < tercio*2){
        console.log("naranj")
        divform4creacion.classList.add('bg-yellow')
    }       
}

const getTareas = () => {

    divtareas.innerHTML = '';  //#f81a1a #ffa700 #fffc00 #109130//

    tareas.forEach((tarea, index) => {
        let tiempo = timeleft(tarea.timerRegresivo);
        let timerRegresivo = tarea.timerRegresivo
        let tercio = tarea.timerRegresivo / 3;

        //let colorClass = ''; // Clase de color para los divs


        let template = `
        
        <div id="divform4creacion" class="width   ">
            <div id="row1">
                <div id="cerrar3">
                    <button>x</button>
                </div>
                <p class="ptimerclass"> Fecha a realizar: ${tarea.timer}</p>
            </div>
            <div id="row2">
                <span class="spanemojiclass ">${tarea.emoji}</span>
                <p class="ptitularclass">${tarea.deber}</p>
            </div>
            <div id="row3">
                
                <p class="ptimerclass">${tiempo}</p>
                <button id="btncheck3"> Check!</button>
            </div>
            
        </div>`;

        
        

        divtareas.insertAdjacentHTML('afterbegin', template);
        actual(tarea.horaInicio, tarea.valorDelTimer)
        
        
        //divform4creacion.classList.add('bg-red');
        


    });
    
}

setInterval(getTareas ,1000)






