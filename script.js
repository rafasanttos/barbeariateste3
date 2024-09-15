const botaoMenu= document.getElementById('botao-menu');
const menuMobile = document.querySelector('.lista-mob')
const traco2= document.getElementById('traco2');
const traco1= document.getElementById('traco1');
const traco3= document.getElementById('traco3');


botaoMenu.addEventListener('click',()=>{
    
    traco2.classList.toggle('remove');
    traco1.classList.toggle('virar');
    traco3.classList.toggle('virar');
    menuMobile.classList.toggle('ativa');

})