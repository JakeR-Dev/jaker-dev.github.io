import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../scss/main.scss';

// nav toggle
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
  // menu toggle logic
  toggleMenu();

  // technologies ticker
  Swiper.use([Autoplay]);
  const swiper = new Swiper('.swiper.technologies', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    loopedSlides: 15,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 4000,
    observer: true,
    observeParents: true,
  });
});

