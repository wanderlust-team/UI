
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(navLink) {
    navLink.addEventListener('mousedown', function(event) {

        event.target.style.transform = 'translateX(4px)'
    })
    navLink.addEventListener('mouseup', function(event) {
        event.target.style.transform = 'translateX(4px)'

    })
    
    navLink.addEventListener('mouseover', function(event){
    event.target.style.color = 'green'
    event.target.style.textDecoration = 'underline'
    })
    navLink.addEventListener('mouseleave', function(event){
    event.target.style.color = 'black'
    event.target.style.textDecoration = 'none'
    })
})

const button = document.querySelector ('.button');
button.addEventListener(mouse)



