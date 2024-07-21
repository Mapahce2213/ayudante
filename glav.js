'use strict';


let buca = document.getElementById("welcome");

let buca2 = document.getElementById("about2");

let buca3 = document.getElementById("poli");

let buca4 = document.getElementById("preg");

let header = document.getElementById("hed");

let inforCambia = document.getElementById("politicar");
let inforCambia2 = document.getElementById("politicar2");

let messaje = document.getElementById("messaje")


function about(event) {

    event.preventDefault();

buca.style.marginLeft = "-100vw";

if(document.documentElement.clientWidth > 301) {
buca2.style.marginLeft = "0vw";
}

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

if(document.documentElement.clientWidth < 480) {
    cierra();
}
if(document.documentElement.clientWidth < 301) {
    buca2.style.marginLeft = "-6vw";
}
if(document.documentElement.clientHeight < 916) {
    buca.style.marginLeft = "-120vw";
}
}



let linkir1 = document.getElementById("about");
linkir1.onclick = about;

function homa(event) {

    event.preventDefault();

    buca.style = "";
    
    buca2.style = "";

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

    if(document.documentElement.clientWidth < 480) {
        cierra();
    }
    }
    
    let linkir12 = document.getElementById("homa");
    linkir12.onclick = homa;

function cambia() {

        document.body.style.backgroundPositionY = document.documentElement.scrollTop + "px";

        if(document.documentElement.scrollTop > 20) {
            header.className = "header2";
        }
    
        if(document.documentElement.scrollTop < 20) {
            header.className = "header1";
        }


    }


    setInterval(cambia, 1)





    let burger = document.createElement("div");
    burger.id = "burger";
    burger.className = "Burgerhide";

    burger.innerHTML = `
<a class="blancos" id="homa" href="#">Home</a>
<a class="blancos" id="inv" href="https://discord.com/oauth2/authorize?client_id=1178478286184136825&amp;permissions=8&amp;integration_type=0&amp;scope=bot
">Invite</a>
<a class="blancos" id="poli" href="#politica">Politic Use</a>
<a class="blancos" id="comm" href="#politica">Commands</a>
<a class="blancos" id="about" href="#about">About</a>`;


let burgerButton = document.createElement("div");
burgerButton.id = "button";
burgerButton.className = "Button";
burgerButton.innerHTML = "=";

    function cierra() {
        burger.className = "Burgerhide";

        burgerButton.addEventListener("click", open)
        burgerButton.removeEventListener("click", cierra)
    }

    function open() {
        burger.className = "BurgerShow";

        burgerButton.addEventListener("click", cierra)
        burgerButton.removeEventListener("click", open)
    }

    if(document.documentElement.clientWidth < 480) {

        header.innerHTML = "";
        
        header.append(burgerButton);


        header.append(burger);

        let linkir123 = document.getElementById("about");
linkir123.onclick = about;

let linkir125 = document.getElementById("homa");
linkir125.onclick = homa;

let buca3213123 = document.getElementById("poli");
buca3213123.onclick = politic;

function bur() {

jcomma.style.width = "20vw";
}

setTimeout(bur, 2000);





        burgerButton.addEventListener("click", open)

        }


    let gettus = document.getElementById("politicar2");
    let polirica = document.createElement("p");
    let popa = document.getElementById("politics");

    function politic(event) {



        if(!document.getElementById("politicar2")) {

        polirica.id = "politicar2";
        polirica.className = "text";
        polirica.innerHTML = "1. Este bot no se usa para cosas malas! Como politica, como usar arma y etc.<br>2. La informacion que se da el bot no se garante 100% de verdad.<br>3. Todo informacion que ustedes dan va al base de informacion del bot para mejorar su respuestas!<br>4. El bot fue creado para pasar tiempo bueno y no aburre<br>5. IP adress, informacion de cuenta (discord), y nomrbe de cuenta nosotros no sabemos y esa informacion no se usa para el bot.<br>6. El bot no se garante la seguridad de contraseñas que usted va a mandar por el chat. (Por favor no manda este informacion privada)<br>7. El bot no se usa para comercio";
        
        popa.append(polirica);

        blockes.remove();
        blocke1.remove();
        }

    event.preventDefault();

    if(document.documentElement.clientWidth > 480) {
        window.scrollTo({
            top: 578,
            left: 0,
            behavior: "smooth"
        });
    }
    if(document.documentElement.clientWidth < 480) {
        window.scrollTo({
            top: 1077,
            left: 0,
            behavior: "smooth"
        });
    }

    if(document.documentElement.clientWidth < 301) {
        window.scrollTo({
            top: 785,
            left: 0,
            behavior: "smooth"
        });
    }
    
        cierra();
    

        inforCambia.textContent = "Cuando usted usa bot, usted accepta:";




    }








    buca3.onclick = politic;

    let crease = document.createElement("div");
    let top4ik = document.createElement("div");
    let crease2 = document.createElement("input");
    let nombre = document.createElement("h1");
    let cierrra = document.createElement("h1");
    let mensajes = document.createElement("div");
    let mensaje1 = document.createElement("div");
    let mensaje2 = document.createElement("p");
    
    let creabutt = document.createElement("button");

    function cierra2() {
        crease.remove();
        top4ik.remove();
        crease2.remove();
        cierrra.remove();
        mensajes.remove();
        mensaje1.remove();
        mensaje2.remove();
        creabutt.remove();
        mensaje1User.remove();
        mensaje2User.remove();
        nombre.remove();

        valua = "";

        buca4.removeEventListener("click", cierra2);
        
    buca4.addEventListener("click", helpef)
    }
    function helpef() {


        crease.id = "modal";
        crease.className = "show";
        messaje.append(crease);



        
        top4ik.id = "cerrar";
        top4ik.className = "topcer";
        crease.append(top4ik);

        mensajes.id = "mensajes";
        mensajes.className = "mensajer";
        crease.append(mensajes);

        mensaje1.id = "mess1";
        mensaje1.className = "botmess";
        mensajes.append(mensaje1);

        mensaje2.className = "textMess";
        mensaje2.textContent = "Hola, estoy aqui para responder cualquier pregunta!";
        mensaje1.append(mensaje2);

        crease2.id = "mensaje";
        crease2.className = "mess";
        crease2.placeholder = "Escribe mensaje";
        crease2.autocomplete = "off";
        crease.append(crease2);

        nombre.id = "nombre";
        nombre.className = "nombre";
        nombre.textContent = "Ayudante";
        top4ik.append(nombre);

        cierrra.id = "cierrra";
        cierrra.className = "cierrra";
        cierrra.textContent = "X";
        top4ik.append(cierrra);


        if(document.documentElement.clientWidth < 480) {
            creabutt.id = "butti";
            creabutt.className = "send";
            creabutt.textContent = ">"
            crease.append(creabutt);

        }

        buca4.removeEventListener("click", helpef);

        cierrra.addEventListener("click", cierra2)
    }

    buca4.addEventListener("click", helpef)





    let commandsr = document.getElementById("comm");

    let blockes = document.createElement("div");

    //commandos block1

    let blocke1 = document.createElement("div");

    let comma = document.createElement("h1");

    let comma2 = document.createElement("p");

    //commandos end block1

    // commandos block2


    let blocke2 = document.createElement("div");

    let rcomma = document.createElement("h1");

    let rcomma2 = document.createElement("p");

    //block3


    let blocke3 = document.createElement("div");

    let scomma = document.createElement("h1");

    let scomma2 = document.createElement("p");

    //block3 end

            //block4 


        let blocke4 = document.createElement("div");

        let dcomma = document.createElement("h1");
    
        let dcomma2 = document.createElement("p");
    
        //block4 end


        let blocke5 = document.createElement("div");

        let fcomma = document.createElement("h1");
    
        let fcomma2 = document.createElement("p");

        let blocke6 = document.createElement("div");

        let tcomma = document.createElement("h1");
    
        let tcomma2 = document.createElement("p");

        let blocke7 = document.createElement("div");

        let acomma = document.createElement("h1");
    
        let acomma2 = document.createElement("p");


        let blocke8 = document.createElement("div");

        let ocomma = document.createElement("h1");
    
        let ocomma2 = document.createElement("p");


        let blocke9 = document.createElement("div");

        let jcomma = document.createElement("h1");
    
        let jcomma2 = document.createElement("p");

        let blocke10 = document.createElement("div");

        let ccomma = document.createElement("h1");
    
        let ccomma2 = document.createElement("p");


        let blocke11 = document.createElement("div");

        let wcomma = document.createElement("h1");
    
        let wcomma2 = document.createElement("p");

        let blocke12 = document.createElement("div");

        let ecomma = document.createElement("h1");
    
        let ecomma2 = document.createElement("p");


        let blocke13 = document.createElement("div");

        let zcomma = document.createElement("h1");
    
        let zcomma2 = document.createElement("p");


        let blocke14 = document.createElement("div");

        let xcomma = document.createElement("h1");
    
        let xcomma2 = document.createElement("p");


        let blocke15 = document.createElement("div");

        let vcomma = document.createElement("h1");
    
        let vcomma2 = document.createElement("p");


        let blocke16 = document.createElement("div");

        let lcomma = document.createElement("h1");
    
        let lcomma2 = document.createElement("p");


    function commands(event) {

        if(event) {
        event.preventDefault();
        }
        
        inforCambia.textContent = "Commandos";

        polirica.remove();

        inforCambia2.remove();

        if(document.documentElement.clientWidth > 480) {
        window.scrollTo({
            top: 578,
            left: 0,
            behavior: "smooth"
        });
    }

    if(document.documentElement.clientWidth > 301) {
    if(document.documentElement.clientWidth < 480) {
        window.scrollTo({
            top: 1077,
            left: 0,
            behavior: "smooth"
        });
    }
    }


    if(document.documentElement.clientWidth < 301) {
        window.scrollTo({
            top: 785,
            left: 0,
            behavior: "smooth"
        });
    }

        cierra();
    




        // commandos


        blockes.id = "blockes";
        blockes.className = "blockes";

        popa.append(blockes);

        comma.textContent = "*help";
        comma.className = "comma";

        comma2.textContent = "Este command se muestra cuales commandos estan disponible";
        comma2.className = "commar";

        blocke1.append(comma)
        blocke1.append(comma2)

        

        blocke1.id = "block1";
        blocke1.className = "block";
        blockes.append(blocke1);

        blocke2.id = "block2";
        blocke2.className = "block";
        blockes.append(blocke2);

        rcomma.textContent = "*sayme";
        rcomma.className = "comma";

        rcomma2.textContent = "Este command para hacer test, a ver si bot se escriba en DM";
        rcomma2.className = "commar";

        blocke2.append(rcomma)
        blocke2.append(rcomma2)


        blocke3.id = "block3";
        blocke3.className = "block";
        blockes.append(blocke3);

        scomma.textContent = "*hi";
        scomma.className = "comma";

        scomma2.textContent = "Este command para hacer test, a ver si bot se saluda a usted";
        scomma2.className = "commar";

        blocke3.append(scomma)
        blocke3.append(scomma2)



        blocke4.id = "block4";
        blocke4.className = "block2";
        blockes.append(blocke4);

        dcomma.textContent = "*play";
        dcomma.className = "comma";

        dcomma2.textContent = "Este command para escuchar musica del bot";
        dcomma2.className = "commar";

        blocke4.append(dcomma)
        blocke4.append(dcomma2)




        blocke5.id = "block5";
        blocke5.className = "block";
        blockes.append(blocke5);

        fcomma.textContent = "*ban";
        fcomma.className = "comma";

        fcomma2.textContent = "Este command para banear a personas malas de discord server ( Admin )";
        fcomma2.className = "commar";

        blocke5.append(fcomma)
        blocke5.append(fcomma2)


        blocke6.id = "block6";
        blocke6.className = "block";
        blockes.append(blocke6);

        tcomma.textContent = "*mute";
        tcomma.className = "comma";

        tcomma2.textContent = "Este command para mutear a personas malas de discord server ( Admin )";
        tcomma2.className = "commar";

        blocke6.append(tcomma)
        blocke6.append(tcomma2)


        blocke7.id = "block7";
        blocke7.className = "block";
        blockes.append(blocke7);

        acomma.textContent = "*kick";
        acomma.className = "comma";

        acomma2.textContent = "Este command para sacar personas malas de discord server ( Admin )";
        acomma2.className = "commar";

        blocke7.append(acomma)
        blocke7.append(acomma2)

        blocke8.id = "block8";
        blocke8.className = "block";
        blockes.append(blocke8);

        ocomma.textContent = "*clear";
        ocomma.className = "comma";

        ocomma2.textContent = "Este command para limpiar chat ( Admin )";
        ocomma2.className = "commar";

        blocke8.append(ocomma)
        blocke8.append(ocomma2)


        blocke9.id = "block9";
        blocke9.className = "block2";
        blockes.append(blocke9);

        jcomma.textContent = "*rename";
        jcomma.className = "comma";
        jcomma.style.width = "9vw";

        jcomma2.textContent = "Este command para cambiar nombre de usario ( Admin )";
        jcomma2.className = "commar";

        blocke9.append(jcomma)
        blocke9.append(jcomma2)



        blocke10.id = "block10";
        blocke10.className = "block";
        blockes.append(blocke10);

        ccomma.textContent = "*send";
        ccomma.className = "comma";

        ccomma2.textContent = "Este command para mandar mensaje como bot ( Admin )";
        ccomma2.className = "commar";

        blocke10.append(ccomma)
        blocke10.append(ccomma2)




        blocke11.id = "block11";
        blocke11.className = "block2";
        blockes.append(blocke11);

        wcomma.textContent = "*xp";
        wcomma.className = "comma";

        wcomma2.textContent = "Este commandos para corregiur experiencia de usarios ( Admin )";
        wcomma2.className = "commar";

        blocke11.append(wcomma)
        blocke11.append(wcomma2)



        blocke12.id = "block12";
        blocke12.className = "block";
        blockes.append(blocke12);

        ecomma.textContent = "*top";
        ecomma.className = "comma";

        ecomma2.textContent = "Este command para recibir leaderboard de servidor ( Economia )";
        ecomma2.className = "commar";

        blocke12.append(ecomma)
        blocke12.append(ecomma2)



        blocke13.id = "block13";
        blocke13.className = "block";
        blockes.append(blocke13);

        zcomma.textContent = "*bal";
        zcomma.className = "comma";

        zcomma2.textContent = "Este command para recibir informacion sobre balance personal ( Economia )";
        zcomma2.className = "commar";

        blocke13.append(zcomma)
        blocke13.append(zcomma2)



        blocke14.id = "block14";
        blocke14.className = "block";
        blockes.append(blocke14);

        xcomma.textContent = "*work";
        xcomma.className = "comma";

        xcomma2.textContent = "Este command para trabajar y ganar dinero ( Economia )";
        xcomma2.className = "commar";

        blocke14.append(xcomma)
        blocke14.append(xcomma2)



        blocke15.id = "block15";
        blocke15.className = "block";
        blockes.append(blocke15);

        vcomma.textContent = "*shop";
        vcomma.className = "comma";

        vcomma2.textContent = "Este command para recibir lista de la tienda y comprar ( Economia )";
        vcomma2.className = "commar";

        blocke15.append(vcomma)
        blocke15.append(vcomma2)


        blocke16.id = "block16";
        blocke16.className = "block";
        blockes.append(blocke16);

        lcomma.textContent = "*inv";
        lcomma.className = "comma";

        lcomma2.textContent = "Este command para ver mochilla y usar cosas ( Economia )";
        lcomma2.className = "commar";

        blocke16.append(lcomma)
        blocke16.append(lcomma2)


        xblock1();
        xblock2();
        xblock3();
        xblock4();
        xblock5();
        xblock6();
        xblock7();
        xblock8();
        xblock9();
        xblock10();
        xblock11();
        xblock12();
        xblock13();
        xblock14();
        xblock15();
        xblock16();

    }







        // commandos


    commandsr.onclick = commands;
    

    let information = document.createElement("p");

    function block1() {
        blocke1.style.height = "30vh";
        comma.style.height = "7vh";

        information.textContent = "Ejemplo:  *help";
        information.className = "commar";
        information.style.width = "120vw";
        blocke1.append(information);

        blocke1.removeEventListener("click", block1)
        blocke1.addEventListener("click", xblock1)
    }

    function xblock1() {
        blocke1.style = "";
        comma.style = "";

        information.remove();

        blocke1.removeEventListener("click", xblock1)
        blocke1.addEventListener("click", block1)
    }

    blocke1.addEventListener("click", block1)







    let information2 = document.createElement("p");
    
    function block2() {
        blocke2.style.height = "30vh";
        rcomma.style.height = "7vh";

        information2.textContent = "Ejemplo:  *sayme";
        information2.className = "commar";
        information2.style.width = "120vw";
        blocke2.append(information2);

        blocke2.removeEventListener("click", block2);
        blocke2.addEventListener("click", xblock2);
    }

    function xblock2() {
        blocke2.style = "";
        rcomma.style = "";

        information2.remove();

        blocke2.removeEventListener("click", xblock2)
        blocke2.addEventListener("click", block2)
    }

    blocke2.addEventListener("click", block2)












    let information3 = document.createElement("p");
    
    function block3() {
        blocke3.style.height = "30vh";
        scomma.style.height = "7vh";

        information3.textContent = "Ejemplo:  *hi";
        information3.className = "commar";
        information3.style.width = "120vw";
        blocke3.append(information3);

        blocke3.removeEventListener("click", block3);
        blocke3.addEventListener("click", xblock3);
    }

    function xblock3() {
        blocke3.style = "";
        scomma.style = "";

        information3.remove();

        blocke3.removeEventListener("click", xblock3)
        blocke3.addEventListener("click", block3)
    }

    blocke3.addEventListener("click", block3)











    
    let information4 = document.createElement("p");
    
    function block4() {
        blocke4.style.height = "30vh";
        dcomma.style.height = "7vh";

        information4.textContent = "Ejemplo:  *play <url youtube>";
        information4.className = "commar";
        information4.style.width = "120vw";
        blocke4.append(information4);

        blocke4.removeEventListener("click", block4);
        blocke4.addEventListener("click", xblock4);
    }

    function xblock4() {
        blocke4.style = "";
        dcomma.style = "";

        information4.remove();

        blocke4.removeEventListener("click", xblock4)
        blocke4.addEventListener("click", block4)
    }

    blocke4.addEventListener("click", block4)













    let information5 = document.createElement("p");
    
    function block5() {
        blocke5.style.height = "30vh";
        fcomma.style.height = "7vh";

        information5.textContent = "Ejemplo:  *ban <@user> <time> <reason>";
        information5.className = "commar";
        information5.style.width = "120vw";
        blocke5.append(information5);

        blocke5.removeEventListener("click", block5);
        blocke5.addEventListener("click", xblock5);
    }

    function xblock5() {
        blocke5.style = "";
        fcomma.style = "";

        information5.remove();

        blocke5.removeEventListener("click", xblock5)
        blocke5.addEventListener("click", block5)
    }

    blocke5.addEventListener("click", block5)






    let information6 = document.createElement("p");
    
    function block6() {
        blocke6.style.height = "30vh";
        tcomma.style.height = "7vh";

        information6.textContent = "Ejemplo:  *mute <@user> <time> <reason>";
        information6.className = "commar";
        information6.style.width = "120vw";
        blocke6.append(information6);

        blocke6.removeEventListener("click", block6);
        blocke6.addEventListener("click", xblock6);
    }

    function xblock6() {
        blocke6.style = "";
        tcomma.style = "";

        information6.remove();

        blocke6.removeEventListener("click", xblock6)
        blocke6.addEventListener("click", block6)
    }

    blocke6.addEventListener("click", block6)









    let information7 = document.createElement("p");
    
    function block7() {
        blocke7.style.height = "30vh";
        acomma.style.height = "7vh";

        information7.textContent = "Ejemplo:  *kick <@user> <time> <reason>";
        information7.className = "commar";
        information7.style.width = "120vw";
        blocke7.append(information7);

        blocke7.removeEventListener("click", block7);
        blocke7.addEventListener("click", xblock7);
    }

    function xblock7() {
        blocke7.style = "";
        acomma.style = "";

        information7.remove();

        blocke7.removeEventListener("click", xblock7)
        blocke7.addEventListener("click", block7)
    }

    blocke7.addEventListener("click", block7)












    let information8 = document.createElement("p");
    
    function block8() {
        blocke8.style.height = "30vh";
        ocomma.style.height = "7vh";

        information8.textContent = "Ejemplo:  *clear <amount>";
        information8.className = "commar";
        information8.style.width = "120vw";
        blocke8.append(information8);

        blocke8.removeEventListener("click", block8);
        blocke8.addEventListener("click", xblock8);
    }

    function xblock8() {
        blocke8.style = "";
        ocomma.style = "";

        information8.remove();

        blocke8.removeEventListener("click", xblock8)
        blocke8.addEventListener("click", block8)
    }

    blocke8.addEventListener("click", block8)









    let information9 = document.createElement("p");
    
    function block9() {
        blocke9.style.height = "30vh";
        jcomma.style.height = "7vh";

        information9.textContent = "Ejemplo:  *rename <@user> <text>";
        information9.className = "commar";
        information9.style.width = "120vw";
        blocke9.append(information9);

        blocke9.removeEventListener("click", block9);
        blocke9.addEventListener("click", xblock9);
    }

    function xblock9() {
        blocke9.style.height = "";
        jcomma.style.height = "";

        information9.remove();

        blocke9.removeEventListener("click", xblock9)
        blocke9.addEventListener("click", block9)
    }

    blocke9.addEventListener("click", block9)








    let information10 = document.createElement("p");
    
    function block10() {
        blocke10.style.height = "30vh";
        ccomma.style.height = "7vh";

        information10.textContent = "Ejemplo:  *send <text>";
        information10.className = "commar";
        information10.style.width = "120vw";
        blocke10.append(information10);

        blocke10.removeEventListener("click", block10);
        blocke10.addEventListener("click", xblock10);
    }

    function xblock10() {
        blocke10.style = "";
        ccomma.style = "";

        information10.remove();

        blocke10.removeEventListener("click", xblock10)
        blocke10.addEventListener("click", block10)
    }

    blocke10.addEventListener("click", block10)









    let information11 = document.createElement("p");
    
    function block11() {
        blocke11.style.height = "40vh";
        wcomma.style.height = "7vh";

        information11.innerHTML = "Ejemplo:<br>*xp add <@user> <count>__ - dar experiencia de persona<br>*xp remove <@user> <count>__ - eliminar experiencia de persona<br>*xp reset <@user>__ - borar experiencia de persona";
        information11.className = "commar";
        information11.style.width = "120vw";
        blocke11.append(information11);

        blocke11.removeEventListener("click", block11);
        blocke11.addEventListener("click", xblock11);
    }

    function xblock11() {
        blocke11.style = "";
        wcomma.style = "";

        information11.remove();

        blocke11.removeEventListener("click", xblock11)
        blocke11.addEventListener("click", block11)
    }

    blocke11.addEventListener("click", block11)







    let information12 = document.createElement("p");
    
    function block12() {
        blocke12.style.height = "30vh";
        zcomma.style.height = "7vh";

        information12.textContent = "Ejemplo:  *top";
        information12.className = "commar";
        information12.style.width = "120vw";
        blocke12.append(information12);

        blocke12.removeEventListener("click", block12);
        blocke12.addEventListener("click", xblock12);
    }

    function xblock12() {
        blocke12.style = "";
        zcomma.style = "";

        information12.remove();

        blocke12.removeEventListener("click", xblock12)
        blocke12.addEventListener("click", block12)
    }

    blocke12.addEventListener("click", block12)




    let information13 = document.createElement("p");
    
    function block13() {
        blocke13.style.height = "30vh";
        xcomma.style.height = "7vh";

        information13.innerHTML = "Ejemplo:<br>*bal<br>*bal <@user>";
        information13.className = "commar";
        information13.style.width = "120vw";
        blocke13.append(information13);

        blocke13.removeEventListener("click", block13);
        blocke13.addEventListener("click", xblock13);
    }

    function xblock13() {
        blocke13.style = "";
        xcomma.style = "";

        information13.remove();

        blocke13.removeEventListener("click", xblock13)
        blocke13.addEventListener("click", block13)
    }

    blocke13.addEventListener("click", block13)








    let information14 = document.createElement("p");
    
    function block14() {
        blocke14.style.height = "30vh";
        xcomma.style.height = "7vh";

        information14.textContent = "Ejemplo: *work";
        information14.className = "commar";
        information14.style.width = "120vw";
        blocke14.append(information14);

        blocke14.removeEventListener("click", block14);
        blocke14.addEventListener("click", xblock14);
    }

    function xblock14() {
        blocke14.style = "";
        xcomma.style = "";

        information14.remove();

        blocke14.removeEventListener("click", xblock14)
        blocke14.addEventListener("click", block14)
    }

    blocke14.addEventListener("click", block14)









    let information15 = document.createElement("p");
    
    function block15() {
        blocke15.style.height = "30vh";
        vcomma.style.height = "7vh";

        information15.textContent = "Ejemplo: *shop";
        information15.className = "commar";
        information15.style.width = "120vw";
        blocke15.append(information15);

        blocke15.removeEventListener("click", block15);
        blocke15.addEventListener("click", xblock15);
    }

    function xblock15() {
        blocke15.style = "";
        vcomma.style = "";

        information15.remove();

        blocke15.removeEventListener("click", xblock15)
        blocke15.addEventListener("click", block15)
    }

    blocke15.addEventListener("click", block15)



    






    let information16 = document.createElement("p");
    
    function block16() {
        blocke16.style.height = "30vh";
        lcomma.style.height = "7vh";

        information16.innerHTML = "Ejemplo:<br>*inv<br>*inv <@user>";
        information16.className = "commar";
        information16.style.width = "120vw";
        blocke16.append(information16);

        blocke16.removeEventListener("click", block16);
        blocke16.addEventListener("click", xblock16);
    }

    function xblock16() {
        blocke16.style = "";
        lcomma.style = "";

        information16.remove();

        blocke16.removeEventListener("click", xblock16)
        blocke16.addEventListener("click", block16)
    }

    blocke16.addEventListener("click", block16)