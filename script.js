let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.browse');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');

}
let dropdown= document.querySelector('.dropdown');

document.querySelector('#arrow').onclick = () =>{
    dropdown.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    
}

let dropdowne= document.querySelector('.dropdowne');

document.querySelector('#arrow1').onclick = () =>{
    dropdowne.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}
let dropdownw= document.querySelector('.dropdownw');

document.querySelector('#arrow2').onclick = () =>{
    dropdownw.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

let dropdowng= document.querySelector('.dropdowng');

document.querySelector('#arrow3').onclick = () =>{
    dropdowng.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

let dropdownm= document.querySelector('.dropdownm');

document.querySelector('#arrow4').onclick = () =>{
    dropdownm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}
let browse = document.querySelector('.browse');

document.querySelector('#arrowleft').onclick = () =>{
   
    dropdown.classList.remove('active');
    

}
let browse1 = document.querySelector('.browse');

document.querySelector('#arrowleft1').onclick = () =>{
   
    dropdowne.classList.remove('active');
    

}
let browse2 = document.querySelector('.browse');

document.querySelector('#arrowleft2').onclick = () =>{
   
    dropdownw.classList.remove('active');

}
let browse3 = document.querySelector('.browse');

document.querySelector('#arrowleft3').onclick = () =>{
   
    dropdowng.classList.remove('active');

}
let browse4 = document.querySelector('.browse');

document.querySelector('#arrowleft4').onclick = () =>{
   
    dropdownm.classList.remove('active');

}






window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}