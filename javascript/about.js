class NavLink {
    constructor(element) {
        this.element = element
        this.element.addEventListener('mousedown', function(event) {
            event.target.style.transform = 'translateX(4px)'
        })
        this.element.addEventListener('mouseup', function(event) {
            event.target.style.transform = 'translateX(4px)'
    
        })
        
        this.element.addEventListener('mouseover', function(event){
            event.target.style.color = 'green'
            event.target.style.textDecoration = 'underline'
        })
        this.element.addEventListener('mouseleave', function(event){
            event.target.style.color = 'black'
            event.target.style.textDecoration = 'none'
        })
    }
}

const navLinks = document.querySelectorAll(".nav-link").forEach(function(navLinkElement) {
    new NavLink(navLinkElement)
})
