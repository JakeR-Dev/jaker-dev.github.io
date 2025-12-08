import '../scss/main.scss';

function toggleMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");
  
  if (!menuToggle) return;
  menuToggle.addEventListener("click", function() {
    if (!navMenu) return;
    navMenu.classList.toggle("menu-open");
    
    var isExpanded = menuToggle.getAttribute("aria-expanded");
    if (isExpanded  === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
  toggleMenu()
});