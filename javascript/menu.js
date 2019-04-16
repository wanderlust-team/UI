class Menu {
  constructor(element) {
    this.element = element;
    this.menuButton = this.element.querySelector(".menu-button");
    this.menuContent = this.element.querySelector(".menu-content");
    this.menuButton.addEventListener("click", () => this.toggleContent());
  }

  toggleContent() {
    this.menuContent.classList.toggle("menu-hidden");
 
  }
}

// let menus = document.querySelectorAll(".menu").forEach(menu => new Menu(menu));
const menu = new Menu(document.querySelector(".menu"))
