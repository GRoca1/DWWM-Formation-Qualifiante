

var res="";
function a(result){
    res=result;
    console.log(res);
    car();
}



function car(){
    lol="";

    res.data.forEach(element => {
        
        if (element.id==1) {
            lol+='<div class="item active">';
        }else{
            lol+='<div class="item">';
        }
        
        lol+='<img class="toto" src="'+element.img+'" alt="">'+
            '<div class="container">'+
                '<div class="carousel-caption">'+
                    '<h1 class="on">'+element.titre+'</h1>'+
                    '<p class="lead on">'+element.accroche+'</p>'+
                    '<a class="btn btn-large btn-primary" href="#">Sign up today</a>'+
                '</div>'+
            '</div>'+
        '</div>';
        // console.log(element.img);
    });

    document.getElementById( "car" ).innerHTML=lol;
}

// =======================

var valid=document.getElementById("form");
valid.addEventListener(
    "keyup",
    function () {
        verifySend();
    }
);


function verifySend(){
    nom=document.getElementById("nom").value;
    mail=document.getElementById("mail").value;
    phone=document.getElementById("phone").value;
    form = document.getElementById('form');
    bu = document.getElementById('bu');
    regex = /^([A-Za-z'-]*)$/;

    a=false;
    if (nom==""||mail==""||phone=="") {
        form.classList.remove('g');
        if (form.classList.contains("red")==false) {
            form.className += " red ";
        }
    }else{
        
        form.classList.remove('red');
        
        if(regex.test(nom)){
            if (form.classList.contains("g")==false) {
                form.className += " g ";
            }
            a=true;
        }else{
            form.classList.remove('g');
            form.className += " red ";
            a=false;
        }
    }

    if (a==true) {
        bu.classList.remove('no');
    }else{
        bu.className = " no ";
    }
    // console.log(regex.test(nom));

    return a;
}


function lancement22Arianne(){
    if(verifySend()) {
        nom=document.getElementById("nom").value;
        document.cookie = "expediteur="+nom+"; path=/; max-age=" + 60 * 60+";SameSite=Strict;"
        
        lol=document.cookie.split(";");
        lol2=lol[1].split("=");
        lol3=lol2[1];
        final();
        return true;
    }

    return false;
    
}

function final(){
    lol=document.cookie.split(";");
    lol2=lol[1].split("=");
    lol3=lol2[1];

    if(lol3!="undefined" ||lol3!=""){
        form.innerHTML="<h1>Bonjour mister "+lol3+" veuillez attendre.</h1>";
        form.innerHTML+='<button onClick="calmos()"></button>';
    }
    
}

function calmos(){
    document.cookie = "expediteur=orevoir; path=/; max-age=0;SameSite=Strict;"
    form.innerHTML="<h1>Bye</h1>";

    // location.reload();
}
// function recupCookie(_cleCoo){
//     console.log(document.cookie);
//     let chaineCookie=document.cookie;
//     let tabCookies=chaineCookie.split(";");
//     //alert("lol");
//     let result="non trouvé"
//     for (let i = 0; i < tabCookies.length; i++) {
//         let paireCleValeur=tabCookies[i];
//         let tabChaine=paireCleValeur.split("=");
//         if (tabChaine[0]==_cleCoo) {
//             result=tabChaine[1];
//         }
//     }
//     return result;
// }
// =========================

fetch("listing.json",{method:"GET"})
.then(response => response.json())
// .then(response => go(response,o))
.then(response => a(response))
// .then(response => {
//      return response;
//   })
// .then( data =>console.log(data))

.catch(error => alert("Erreur : " + error));