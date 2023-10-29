let horaInicio = Date.now();
let btn = document.querySelector('#btn')
let actual = () => {
    let ahora = Date.now();
    let tiempoTranscurrido = Math.round(ahora - horaInicio);
    console.log("pasaron: ", tiempoTranscurrido /1000 /60 , "minutos")

    let tiempoDeEspera = 1000*60*3;
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


btn.addEventListener('click' ,alert('ola') ,actual())


