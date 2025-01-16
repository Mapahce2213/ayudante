'use strict';

let valua = "";

let mensaje1User = document.createElement("div");
let mensaje2User = document.createElement("p");

document.addEventListener('keypress', function(event){

    if (event.keyCode === 13) {




        toca();

        setTimeout(responda, 1000);
    }
});
function checkor() {

if(document.getElementById("butti")) {

let bucabutti = document.getElementById("butti");

bucabutti.onclick = toca;
}
}
document.onclick = checkor;

function toca() {


            if(document.getElementById("mensaje")) {

                let inputa = document.getElementById("mensaje");

        valua = inputa.value;

        inputa.value = "";

        if(valua != "") {
            if(valua != " ") {
                if(valua != "  ") {

        mensaje1User.id = "mess2";
        mensaje1User.className = "usermess";
        mensajes.append(mensaje1User);

        mensaje2User.className = "textMess";
        mensaje2User.textContent = valua;
        mensaje1User.append(mensaje2User);




        if(document.documentElement.clientWidth > 1348) {


        if(valua.length < 17) {

            let bucor = document.getElementById("mess2");
            bucor.style.marginLeft = "7vw";
            bucor.style.width = "9vw";
        }

        if(valua.length < 15) {

            let bucor = document.getElementById("mess2");
            bucor.style.marginLeft = "9vw";
            bucor.style.width = "7vw";
        }

        if(valua.length < 14) {

            let bucor = document.getElementById("mess2");
            bucor.style.marginLeft = "9vw";
            bucor.style.width = "7vw";
        }
        if(valua.length < 13) {

            let bucor = document.getElementById("mess2");
            bucor.style.marginLeft = "8vw";
            bucor.style.width = "8vw";
        }

        if(valua.length < 12) {

            let bucor = document.getElementById("mess2");
            bucor.style.marginLeft = "11vw";
            bucor.style.width = "5vw";
        }
    
        if(valua.length < 6) {
    
            let bucor = document.getElementById("mess2");
            bucor.style = ""
        }

    }


                }
            }
        }

}
};


function responda() {


    if(valua.includes("hola")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, con que yo puedo ayudar en ese dia?";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("Que tal?")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, con que yo puedo ayudar en ese dia?";
        mensaje1.append(mensaje2);
    }

    if(valua == "Okay") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, con que yo puedo ayudar en ese dia?";
        mensaje1.append(mensaje2);
    }

    if(valua == "Ok") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, con que yo puedo ayudar en ese dia?";
        mensaje1.append(mensaje2);
    }

    if(valua == "Tengo problemas") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Estoy aqui para resolver problema, explicame la problema.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Tengo problema") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Estoy aqui para resolver problema, explicame la problema.";
        mensaje1.append(mensaje2);
    }


    if(valua.includes("Hola")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, con que yo puedo ayudar en ese dia?";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("bot no sirve")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Si bot no sirve entonces el esta durmiendo porque el no tiene hosting.";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("bot no funciona")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Si bot no sirve entonces el esta durmiendo porque el no tiene hosting.";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("Que hacer si bot no sirve")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Si bot no sirve entonces el esta durmiendo porque el no tiene hosting.";
        mensaje1.append(mensaje2);
    }



    if(valua.includes("Como usar commandos?")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Para usar commandos se usa prefix  '*' ejemplo: '*help'";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("Como usar bot?")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Para usar bot necesita:<br> 1. Invita a su discord server<br> 2. Escribe *help y manda en el chat";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("Como se usa bot?")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Para usar bot necesita:<br> 1. Invita a su discord server<br> 2. Escribe *help y manda en el chat";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("Como usa bot?")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Para usar bot necesita:<br> 1. Invita a su discord server<br> 2. Escribe *help y manda en el chat";
        mensaje1.append(mensaje2);
    }

    if(valua == "Por que no puedo invitar bot?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Aqui hay dos razones:<br>1. Usted no es dueño de servidor<br>2. Usted no es admin de servidor.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Por que no invita bot?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Aqui hay dos razones:<br>1. Usted no es dueño de servidor<br>2. Usted no es admin de servidor.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Bot no quiere unir a servidor") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.innerHTML = "Aqui hay dos razones:<br>1. Usted no es dueño de servidor<br>2. Usted no es admin de servidor.";
        mensaje1.append(mensaje2);
    }

    if(valua.includes("no responde")) {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Si bot no responde entonces el no sabe respuesta de la pregunta o contexto de que se habla.";
        mensaje1.append(mensaje2);
    }




    if(valua == "Para que sirve este bot?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Este bot fue creado para apoyar a gente que usan mucho discord y tiene mucho funciones utiles.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Para que fue creado este bot?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Este bot fue creado para apoyar a gente que usan mucho discord y tiene mucho funciones utiles.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Por que este bot esta en discord?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmessGrande";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Este bot fue creado para apoyar a gente que usan mucho discord y tiene mucho funciones utiles.";
        mensaje1.append(mensaje2);
    }


    if(valua == "Que bot sabe hacer?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "El bot sabe mucho, usted puede ver commandos en ese pagina.";
        mensaje1.append(mensaje2);

        commands();
    }

    if(valua == "En que idioma se habla ese bot?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "Solo en español otros idiomas no esta disponible todavia.";
        mensaje1.append(mensaje2);
    }

    if(valua == "Donde puedo entrar en servidor de Ayudante?") {
        mensaje1.remove();
        mensaje2.remove();
    
        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);
    
        mensaje2.className = "textMess";
        mensaje2.textContent = "El link de servidor esta en bio del bot.";
        mensaje1.append(mensaje2);
    }

}