'use strict';


let buca = document.getElementById("welcome");

let buca2 = document.getElementById("about2");

let buca3 = document.getElementById("poli");

let imoda = document.getElementById("idiomica");

let buca4 = document.getElementById("preg");

let opened5 = false;


    function openara() {
     window.open("https://discord.gg/EKXnMnT9uv");
    }

        buca4.onclick = openara;
       
        
let header = document.getElementById("hed");

let inforCambia = document.getElementById("politicar");
let inforCambia2 = document.getElementById("politicar2");

let messaje = document.getElementById("messaje")

// https://discord.gg/EKXnMnT9uv

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
            
            if(opened5) {
            imoda.className = "lang";
            }
        } else {
            header.className = "header1";
            
            if(opened5) {
            imoda.className = "lang3";
            }
        }

if(document.documentElement.scrollTop > 600) {
    document.body.className = "bk2";
} else {
    document.body.className = "bk1";
}


    }


    setInterval(cambia, 1)


const langer = document.getElementById("idioma");

function lang(event) {

    event.preventDefault();

opened5 = true;

langer.addEventListener("click", lang21)
langer.removeEventListener("click", lang)
}
function lang21(event) {

    event.preventDefault();


imoda.className = "lang2";
opened5 = false;

langer.addEventListener("click", lang)
langer.removeEventListener("click", lang21)
}

langer.addEventListener("click", lang)




    let burger = document.createElement("div");
    burger.id = "burger";
    burger.className = "Burgerhide";

    burger.innerHTML = `
    <a class="blancos" id="homa" href="#">Home</a>
    <a class="blancos" id="inv" href="https://discord.com/oauth2/authorize?client_id=1178478286184136825&permissions=8&integration_type=0&scope=bot
    ">Invite</a>
    <a class="blancos" id="inv" href="#!">Dashboard</a>
    <a class="blancos" id="poli" href="#politica">Politic Use</a>
    <a class="blancos" id="comm" href="#politica">Commands</a>
    <a class="blancos" id="about" href="#about">About</a>
    <a class="blancos" id="idioma" href="#lang">ES</a>`;


let burgerButton = document.createElement("div");
burgerButton.id = "button";
burgerButton.className = "Button";
burgerButton.innerHTML = "=";

    function cierra() {
        burger.className = "Burgerhide";

        burgerButton.addEventListener("click", openi)
        burgerButton.removeEventListener("click", cierra)
    }

    function openi() {
        burger.className = "BurgerShow";

        burgerButton.addEventListener("click", cierra)
        burgerButton.removeEventListener("click", openi)
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

function bur1() {

burger.className = "BurgerShow";

burgerButton.addEventListener("click", bur2);
burgerButton.removeEventListener("click", bur1);
}
function bur2() {

burger.className = "Burgerhide";

burgerButton.addEventListener("click", bur1);
burgerButton.removeEventListener("click", bur2);
}





        burgerButton.addEventListener("click", bur1);

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
            top: 778,
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

            //block41


        let blocke4 = document.createElement("div");

        let dcomma = document.createElement("h1");
    
    
    // block inter
    
    
        let dcomma2 = document.createElement("h1");
    
        let divah =  document.createElement("div");  
        let gh1ur = document.createElement("div");  
        
        
        let ugh1ft = document.createElement("div");
        let uj4as = document.createElement("h1");
        let uj4as2 = document.createElement("p");    
        
        
        let cgh1ft = document.createElement("div");
        let cj4as = document.createElement("h1");
        let cj4as2 = document.createElement("p");        
        
     


        let ogh1ft = document.createElement("div");
        let oj4as = document.createElement("h1");
        let oj4as2 = document.createElement("p");   
             
     
          
        
        let gomma2 = document.createElement("h1");
        
        
        // block inter end
        
    
        //block4 end


        let ugh2ft = document.createElement("div");
        let uj3as = document.createElement("h1");
        let uj3as2 = document.createElement("p");   
        
        
        

        let blocke5 = document.createElement("div");

        let fcomma = document.createElement("h1");
    
        let fcomma2 = document.createElement("h1");

        let blocke6 = document.createElement("div");

    


    function commands(event) {

        if(event) {
        event.preventDefault();
        }
        
        inforCambia.textContent = "Commandos";

        polirica.remove();

        inforCambia2.remove();

        if(document.documentElement.clientWidth > 480) {
        window.scrollTo({
            top: 778,
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
            top: 775,
            left: 0,
            behavior: "smooth"
        });
    }

        cierra();
    




        // commandos

        blockes.innerHTML = "";
        
        blockes.id = "blockes";
        blockes.className = "blockes";

        popa.append(blockes);

        comma.textContent = "Moderation Commands";
        comma.className = "comma";



        blocke1.append(comma);

        

        blocke1.id = "block1";
        blocke1.className = "block";
        blockes.append(blocke1);

        blocke2.id = "block2";
        blocke2.className = "block";
        blockes.append(blocke2);

        rcomma.textContent = "User Commands";
        rcomma.className = "comma";


        blocke2.append(rcomma);


        blocke3.id = "block3";
        blocke3.className = "block";
        blockes.append(blocke3);

        scomma.textContent = "MiniGames Commands";
        scomma.className = "comma";


        blocke3.append(scomma)



        blocke4.id = "block4";
        blocke4.className = "block";
        blockes.append(blocke4);

        dcomma.textContent = "Developer Commands";
        dcomma.className = "comma";


        blocke4.append(dcomma)






    }







        // commandos


    commandsr.onclick = commands;
    

    let information = document.createElement("p");

    function block1() {
        blockes.innerHTML = "";
        blockes.className = "blockes2";

        dcomma2.className = "arrows";
        dcomma2.textContent = "<";  
        dcomma2.onclick = commands;
        blockes.append(dcomma2);
        
        divah.className = "divah";
        blockes.append(divah);
        
        gomma2.className = "title";
        gomma2.textContent = "Moderation Commands";
        divah.append(gomma2); 


       gh1ur.className = "gh1ur";
       gh1ur.innerHTML = "";
       divah.append(gh1ur)
       
       
       // blockes
       
       ugh1ft.className = "uga";
       
       gh1ur.append(ugh1ft)
       
       uj4as.className = "subtirle";
       uj4as.textContent = "*mute";
       
       ugh1ft.append(uj4as);
       
       uj4as2.className = "rou";
       uj4as2.textContent = "Para que se caye gente";
       
       ugh1ft.append(uj4as2);
       
       
       
       
       
       
       
       
       
       cgh1ft.className = "uga";
       
       gh1ur.append(cgh1ft)
       
       cj4as.className = "subtirle";
       cj4as.textContent = "*ban";
       
       cgh1ft.append(cj4as);
       
       cj4as2.className = "rou";
       cj4as2.textContent = "Para hacer ban";
       
       cgh1ft.append(cj4as2);
       
       
       
       
       ogh1ft.className = "uga";
       
       gh1ur.append(ogh1ft)
       
       oj4as.className = "subtirle";
       oj4as.textContent = "*kick";
       
       ogh1ft.append(oj4as);
       
       oj4as2.className = "rou";
       oj4as2.textContent = "Para sacar gente";
       
       ogh1ft.append(oj4as2); 

    }


    blocke1.addEventListener("click", block1)







    let information2 = document.createElement("p");
    
    function block2() {
        blockes.innerHTML = "";
        blockes.className = "blockes2";

        dcomma2.className = "arrows";
        dcomma2.textContent = "<"; 
        dcomma2.onclick = commands; 
        blockes.append(dcomma2);
        
        
        divah.className = "divah";
        blockes.append(divah);
        

        gomma2.className = "title";
        gomma2.textContent = "User Commands";
        divah.append(gomma2); 


       gh1ur.className = "gh1ur";
       gh1ur.innerHTML = "";
       divah.append(gh1ur)
       
       
       // blockes
       
       ugh1ft.className = "uga";
       
       gh1ur.append(ugh1ft)
       
       uj4as.className = "subtirle";
       uj4as.textContent = "*help";
       
       ugh1ft.append(uj4as);
       
       uj4as2.className = "rou";
       uj4as2.textContent = "Para ver que commandos hay";
       
       ugh1ft.append(uj4as2);
       
       
       
       
       
       
       
       
       
       cgh1ft.className = "uga";
       
       gh1ur.append(cgh1ft)
       
       cj4as.className = "subtirle";
       cj4as.textContent = "/translate";
       
       cgh1ft.append(cj4as);
       
       cj4as2.className = "rou";
       cj4as2.textContent = "Para tranducir texto";
       
       cgh1ft.append(cj4as2);
       
       
       
       
       ogh1ft.className = "uga";
       
       gh1ur.append(ogh1ft)
       
       oj4as.className = "subtirle";
       oj4as.textContent = "/validate";
       
       ogh1ft.append(oj4as);
       
       oj4as2.className = "rou";
       oj4as2.textContent = "Para checkar el code";
       
       ogh1ft.append(oj4as2); 
    }


    blocke2.addEventListener("click", block2)












    let information3 = document.createElement("p");
    
    function block3() {
                blockes.innerHTML = "";
        blockes.className = "blockes2";

        dcomma2.className = "arrows";
        dcomma2.textContent = "<"; 
        dcomma2.onclick = commands; 
        blockes.append(dcomma2);
        
        
        divah.className = "divah";
        blockes.append(divah);
        
        gomma2.className = "title";
        gomma2.textContent = "Mini Games";
        divah.append(gomma2); 


       gh1ur.className = "gh1ur";
       gh1ur.innerHTML = "";
       divah.append(gh1ur)
       
       
       // blockes
       
       ugh1ft.className = "uga";
       
       gh1ur.append(ugh1ft)
       
       uj4as.className = "subtirle";
       uj4as.textContent = "*bal";
       
       ugh1ft.append(uj4as);
       
       uj4as2.className = "rou";
       uj4as2.textContent = "Para ver balance de economia";
       
       ugh1ft.append(uj4as2);
       
       
       
       
       
       
       
       
       
       cgh1ft.className = "uga";
       
       gh1ur.append(cgh1ft)
       
       cj4as.className = "subtirle";
       cj4as.textContent = "/bottle";
       
       cgh1ft.append(cj4as);
       
       cj4as2.className = "rou";
       cj4as2.textContent = "Para jugar en botella";
       
       cgh1ft.append(cj4as2);
       
       
       
       
       ogh1ft.className = "uga";
       
       gh1ur.append(ogh1ft)
       
       oj4as.className = "subtirle";
       oj4as.textContent = "*work";
       
       ogh1ft.append(oj4as);
       
       oj4as2.className = "rou";
       oj4as2.textContent = "Para trabajar en economia";
       
       ogh1ft.append(oj4as2); 
       
       
      ugh2ft.className = "uga";
       
       gh1ur.append(ugh2ft)
       
       uj3as.className = "subtirle";

       uj3as.textContent = "*top";
       
       ugh2ft.append(uj3as);
       
       uj3as2.className = "rou";
       uj3as2.textContent = "Para ver leaderboard de economia";

       
       ugh2ft.append(uj3as2); 
       
       

    }
    blocke3.addEventListener("click", block3)


    
    let information4 = document.createElement("p");
    
    function block4() {
                blockes.innerHTML = "";
        blockes.className = "blockes2";

        dcomma2.className = "arrows";
        dcomma2.textContent = "<"; 
        dcomma2.onclick = commands; 
        blockes.append(dcomma2);
        
        
        divah.className = "divah";
        blockes.append(divah);
        
        gomma2.className = "title";
        gomma2.textContent = "Developer commands";
        divah.append(gomma2); 


       gh1ur.className = "gh1ur";
       gh1ur.innerHTML = "";
       divah.append(gh1ur)
       
       
       // blockes
       
       ugh1ft.className = "uga";
       
       gh1ur.append(ugh1ft)
       
       uj4as.className = "subtirle";
       uj4as.textContent = "*hi";
       
       ugh1ft.append(uj4as);
       
       uj4as2.className = "rou";
       uj4as2.textContent = "Para ver console";
       

       ugh1ft.append(uj4as2);
       
       
       
       
       
       
       
       
       
       cgh1ft.className = "uga";
       
       gh1ur.append(cgh1ft)
       

       cj4as.className = "subtirle";

       cj4as.textContent = "*test";
       
       cgh1ft.append(cj4as);
       
       cj4as2.className = "rou";
       cj4as2.textContent = "Para hacer test";
       
       cgh1ft.append(cj4as2);
       
       
       
       
       ogh1ft.className = "uga";
       
       gh1ur.append(ogh1ft)
       
       oj4as.className = "subtirle";

       oj4as.textContent = "*console";
       
       ogh1ft.append(oj4as);
       
       oj4as2.className = "rou";
       oj4as2.textContent = "console";

       
       ogh1ft.append(oj4as2); 

    }


    blocke4.addEventListener("click", block4)







