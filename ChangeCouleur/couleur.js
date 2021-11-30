function couleur()
{
    let chainecouleur="#"+document.querySelector("#txtrouge").value+document.querySelector("#txtvert").value+document.querySelector("#txtbleu").value;
    return chainecouleur;
}
// function controleHexa(chainehexa)
// {
//     chainehexa=chainehexa.toUpperCase();
//     var maregex=/^[A-F0-9]{2}$/;
//     let boolres=maregex.test(chainehexa);
//   //  alert(boolres);
//     console.log(boolres);
//     return boolres;
// }

function couleurRouge()
{
  document.querySelector("#txtrouge").value='FF';
  document.querySelector("#txtvert").value='00';
  document.querySelector("#txtbleu").value='00';
  document.body.style.background=couleur();
}

function couleurVert()
{
    document.querySelector("#txtrouge").value="00";
    document.querySelector("#txtvert").value="FF";
    document.querySelector("#txtbleu").value="00";
    document.body.style.background=couleur();
}

function couleurBleu()
{
    document.querySelector("#txtrouge").value="00";
    document.querySelector("#txtvert").value="00";
    document.querySelector("#txtbleu").value="FF";
    document.body.style.background=couleur();
}
// testbtn=document.querySelectorAll('input[type=button]');
// for (var item of testbtn){
// item.addEventListener("click", function(){
//     switch(this.value){
//         case "Rouge":
// document.querySelector("#txtrouge").value='FF';
//  document.querySelector("#txtvert").value='00';
//  document.querySelector("#txtbleu").value='00';
//  document.body.style.background=couleur();
//             break;

//         case "Vert":
// document.querySelector("#txtrouge").value='00';
// document.querySelector("#txtvert").value='FF';
// document.querySelector("#txtbleu").value='00';
// document.body.style.background=couleur();
//             break;

//         case "Bleu":
// document.querySelector("#txtrouge").value='00';
// document.querySelector("#txtvert").value='00';
// document.querySelector("#txtbleu").value='FF';
// document.body.style.background=couleur();
//             break;}
// ;});
// }