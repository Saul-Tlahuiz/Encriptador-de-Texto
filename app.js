const btnEncriptar = document.querySelector(".button-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-container");
const btnCopiar = document.querySelector(".copy-button");
const btnDesencriptar = document.querySelector(".button-desencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿/?~!\¡@#%^&*()_|}\{[\]]>\<:";,\u0300-\u036f']/g,"");

    if(texto ==""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto esta vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight= "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El texto debe ir en minusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML=texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// boton de desencriptar
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿/?~!\¡@#%^&*()_|}\{[\]]>\<:";,\u0300-\u036f']/g,"");

    if(texto ==""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto esta vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight= "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El texto debe ir en minusculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML=texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

//boton de copiar

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiarselect();
    document.execCommand("copy");
});