function create(){
    //Exibe ou esconde o modal
document
    .querySelectorAll("#modal")[1]//acha o modal via DOM
    .classList.toggle("hide");//muda a class do modal

//Bloquear o scroll do body qnd o modal estiver na tela
document
    .querySelector("body")//acha o body via DOM
    .classList.toggle("hideScroll");//muda a class do body

//Habilitar scroll pro modal, caso "estoure" o tamanho da tela
document
    .querySelectorAll("#modal")[1]//1 - achar o modal via DOM
    .classList.toggle("addScroll");//2 - habilitar scroll no modal
}

function update(){
    //Exibe ou esconde o modal
 document
     .querySelectorAll("#modal")[0]//acha o modal via DOM
     .classList.toggle("hide");//muda a class do modal

 //Bloquear o scroll do body qnd o modal estiver na tela
 document
     .querySelector("body")//acha o body via DOM
     .classList.toggle("hideScroll");//muda a class do body

 //Habilitar scroll pro modal, caso "estoure" o tamanho da tela
 document.querySelectorAll("#modal")[0]
     .classList.toggle("addScroll");//2 - habilitar scroll no modal
 
 
}

function del(){
    //Exibe ou esconde o modal
document
    .querySelectorAll("#modal")[2]//acha o modal via DOM
    .classList.toggle("hide");//muda a class do modal

//Bloquear o scroll do body qnd o modal estiver na tela
document
    .querySelector("body")//acha o body via DOM
    .classList.toggle("hideScroll");//muda a class do body

//Habilitar scroll pro modal, caso "estoure" o tamanho da tela
document
    .querySelectorAll("#modal")[2]//1 - achar o modal via DOM
    .classList.toggle("addScroll");//2 - habilitar scroll no modal


}
window.alert("O feitiço virou contra o feiticeiro")