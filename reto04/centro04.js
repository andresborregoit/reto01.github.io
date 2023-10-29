const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();   
        /*bueno aca estamos tirando la funcion para recolectar los datos del input*/
            /*aca agarramos el select y lo instanciamos*/
            var selectEmoji = document.getElementById("select");
            // aca nos dan el index de la opcion seleccionada podria haber sido el value tranquilamente
            var indiceEmoji = selectEmoji.selectedIndex;
            console.log('lo que dice el indice seleccionado es esto' , indiceEmoji) //para chekear
            // ahi nos dio un numero en azul que es el index
            // y ahora vamos a buscar el valor de lo que hay en el select y luego lo que se ve del select que son dos cosas distintas
            var valorEmoji = selectEmoji.options[indiceEmoji].value;
            var textoEmoji = selectEmoji.options[indiceEmoji].text;
            let input = e.target.input.value
            let periodicidad = e.target.selecttiempo.value

            //AHORA A HACER LO MISMO CON EL TIEMPO
            var selectTimer = document.getElementById("selecttiempo");
            var indiceTimer = selectTimer.selectedIndex;
            console.log('lo que dice el indice seleccionado es esto' , indiceTimer) //para chekear
            var valorTimer = selectTimer.options[indiceTimer].value;
            var textoTimer = selectTimer.options[indiceTimer].text;



            // Imprime el valor y el texto seleccionado en la consola
    
        /*  console.log("Valor de emoji seleccionado: " + valorEmoji);
            console.log("Texto de emoji seleccionado: " + textoEmoji);
            console.log("Valor de timer seleccionado: " + valorTimer);
            console.log("Texto de timer seleccionado: " + textoTimer);*/
            console.log("Tu tarea es " + input , ', tu emoji es ' , textoEmoji , 'y tu periodicidad de tarea es de '+ textoTimer);
    

})


