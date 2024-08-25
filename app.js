


/**
 * CHALLENGE ENCRIPTADOR DE TEXTO
 * DESARROLLADO POR: Andrea Lisbeth Suárez Martínez
 * 
 * REGLAS DEL ENCRIPTADOR
 * 'La letra "e" es convertida para "enter"'
    'La letra "i" es convertida para "imes"'
    'La letra "a" es convertida para "ai"'
    'La letra "o" es convertida para "ober"'
    'La letra "u" es convertida para "ufat"'
 */


/*Declaración de las variables*/

    const Tabla_encrip = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
    const caracterInvalido = new RegExp(/[^a-zA-ZñÑ\s]/);
    const texto_Area = document.querySelector(".presentacion__area");
    const result = document.querySelector(".presentacion__area__resultado");
    const boton_Copiar = document.querySelector(".boton__copiar");



/*Función encriptador de texto */

    function encriptar(stringEncriptado) {
        stringEncriptado = stringEncriptado.toLowerCase()
        for (let apps = 0; apps < Tabla_encrip.length; apps++){
            if(stringEncriptado.includes(Tabla_encrip[apps][0])){
                stringEncriptado = stringEncriptado.replaceAll(Tabla_encrip[apps][0], Tabla_encrip[apps][1]);
            }
        }
        return stringEncriptado;
    }


/* Función desencriptador de texto */

    function desencriptar(stringDesencriptado) {
        stringDesencriptado = stringDesencriptado.toLowerCase() 
        for (let apps = 0; apps < Tabla_encrip.length; apps++){
            if(stringDesencriptado.includes(Tabla_encrip[apps][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(Tabla_encrip[apps][1], Tabla_encrip[apps][0]);
            }
        }
        return stringDesencriptado;
    }


/* Función del botón encriptador */

function botonEncriptar(){
    if (validaTexto(texto_Area.value)){
        const textoEncriptado = encriptar(texto_Area.value);
        result.value =  textoEncriptado;
        limpiar();
    }
    else{
        mensajeInvalido();
    }
}


/* Función del botón desencriptador */

function botonDesencriptar(){
    if (validaTexto(texto_Area.value)){
        const textDesencriptado = desencriptar(texto_Area.value);
        result.value =  textDesencriptado;
        limpiar();
    }
    else{
        mensajeInvalido();
    }
}


/* Función del botón copiar */

function botonCopiar(){
    navigator.clipboard.writeText(result.value).then(
        () => {
            console.log('Text copied to clipboard');
            }
        ).catch(err => {
            console.error('Failed to copy text: ', err);
        }
    );
}


/* Función para limpiar */

    function limpiar(){
        texto_Area.value = "";
        result.style.backgroundImage = "none";
        boton_Copiar.style.display="block";
    }


/* Función para validar el texto correcto */

    function validaTexto(inputString){
        if (caracterInvalido.test(inputString)){
            return false;
        }
        else{
            return true;
        }
    }


/* Función que indica que el texto es incorrecto */

    function mensajeInvalido(){
        alert('A ingresado un caracter invalido.');
    }




    