//alert("ok");

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var header = document.querySelector('.header');

//console.log(btnMenu);
//console.log(menu);

//Evento de clique
btnMenu.addEventListener('click', function () {
    //alert('clicou');
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
})

menu.addEventListener('click', function(){
    this.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})

//Evento de SCROLL 
window.addEventListener('scroll', function () {
    //console.log("rolou");
    //console.log(window.scrollY);

    if (window.scrollY > 100) {
        header.classList.add('header-scroll');
    }
    else {
        header.classList.remove('header-scroll');
    }

})
