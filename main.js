//   for the nav bar
let menuBar = document.querySelector('.bars')
let sidenav = document.querySelector('ul')

menuBar.addEventListener('click', ()=>{
 if (sidenav.style.right == "-350px") {
    sidenav.style.right = "0"
    menuBar.src = "./images/icon-close.png"
 }
 else{
    sidenav.style.right = "-350px"
    menuBar.src = "./images/icon-hamburger.png"
 }
})