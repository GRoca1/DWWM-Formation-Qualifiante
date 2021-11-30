function calculs ()
{
    
    document.querySelector("#ca1").value=(Number(document.querySelector("#qte1").value) *Number( document.querySelector("#prix1").value)).toFixed(2);
    document.querySelector("#ca2").value=(Number(document.querySelector("#qte2").value) *Number( document.querySelector("#prix2").value)).toFixed(2);
    document.querySelector("#ca").value=(Number(document.querySelector("#ca1").value)+ Number(document.querySelector("#ca2").value)).toFixed(2); 

}


var objetqte1=document.querySelector("#qte1");
objetqte1.addEventListener("blur",function(){calculs();});

var objetqte1=document.querySelector("#qte2");
objetqte1.addEventListener("blur",function(){calculs();});

var objetqte1=document.querySelector("#prix1");
objetqte1.addEventListener("blur",function(){calculs();});

var objetqte1=document.querySelector("#prix2");
objetqte1.addEventListener("blur",function(){calculs();});