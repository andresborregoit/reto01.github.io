
let h1js = document.getElementById("idh1")
let item1 = document.getElementById("tarea1")
let item2 = document.getElementById("tarea2")
let item3 = document.getElementById("tarea3")
let item4 = document.getElementById("tarea4")
let item5 = document.getElementById("tarea5")
let item6 = document.getElementById("tarea6")
let item7 = document.getElementById("tarea7")
let item8 = document.getElementById("tarea8")
let item9 = document.getElementById("tarea9")
let item10 = document.getElementById("tarea10")



let inputjs = document.getElementById("inputtt") /* INPUT INSTANCIADO */
let btnjs = document.getElementById('btn')

item1.innerHTML = "&nbsp; hola que pasaa";



/*hasta el momento todo instanciado de perlas*/ 



/* ------------------Instanciamiento de checks---------------------------------*/


let check1js = document.getElementById("check1")
let check2js = document.getElementById("check2")
let check3js = document.getElementById("check3")
let check4js = document.getElementById("check4")
let check5js = document.getElementById("check5")
let check6js = document.getElementById("check6")
let check7js = document.getElementById("check7")
let check8js = document.getElementById("check8")
let check9js = document.getElementById("check9")
let check10js = document.getElementById("check10")

/*-------------------------------------------------------- Instanciados con exito---------------- */
/*-------------------------------------------------------- le pondremos un add event listener---------------- */
/*let nombre = inputjs.value*//*
check1js.addEventListener('click', () => {
    let nombre = inputjs.value;
    alert('ouch maquinola ' + nombre);         });  ALERT DE PRUEBA      */                                                     /*funciono de perlas */

/*let nombre = input.value*/

btnjs.addEventListener('click', () => {
    let nombre = inputjs.value;
    if(nombre != '')
    {h1js.innerHTML = "La lista de " + nombre +" 💋";     }
        });          

/*document.addEventListener('click',(e)=>{
    console.log(e)
    if(e.target.localName == 'input'){
        e.target.classList.add('red')
    }
})*/

document.addEventListener('click', (e) => {
    if (e.target.localName === 'input' && e.target.type === 'checkbox') {
        const tareaId = e.target.getAttribute('id').replace('check', 'tarea');
        const tarea = document.getElementById(tareaId);
        
        if (e.target.checked) {
            tarea.classList.add('red');
        } else {
            tarea.classList.remove('red');
        }
    }
});



/*-----------------------------VERIFICA QUE LOS - CHECKBOX------- ESTEN MARCADOS---------------- ---------------- */

function checkAllTasks() {
    const checkboxes = document.querySelectorAll('.divparalosp input[type="checkbox"]');
    for (const checkbox of checkboxes) {
        if (!checkbox.checked) {
            return false;
        }
    }
    return true;
}





/*----------------------------EVENTO CLICK Y FELICITACIONES---------------------------- ---------------- */

document.addEventListener('click', (e) => {
    if (e.target.localName === 'input' && e.target.type === 'checkbox') {
        const tareaId = e.target.getAttribute('id').replace('check', 'tarea');
        const tarea = document.getElementById(tareaId);
        
        if (e.target.checked) {
            tarea.classList.add('red');
        } else {
            tarea.classList.remove('red');
        }

        if (checkAllTasks()) {
            let nombre = inputjs.value
            alert('¡Felicitaciones! ' + nombre +' terminaste tus actividades. \n Has sido ayudado por el bendecido 💋');
        }
    }
});








/*-------------------------------------------------------- ---------------- */