import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../scss/main.scss';

// ready to show
function showPage() {
  document.body.classList.add('show-me');
  // tech ticker
  techTicker();
}

// ready to hide
function hidePage() {
  document.body.classList.remove('show-me');
}

// nav toggle click
function toggleNavClick() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");
  
  if (!menuToggle) return;
  menuToggle.addEventListener("click", function() {
    toggleNavAction(menuToggle, navMenu);
  });
}

// nav toggle action
function toggleNavAction(menuToggle, navMenu) {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.toggle("menu-open");

  var isExpanded = menuToggle.getAttribute("aria-expanded");
  if (isExpanded  === "true") {
    menuToggle.setAttribute("aria-expanded", "false");
  } else {
    menuToggle.setAttribute("aria-expanded", "true");
  }
}

// tech ticker
function techTicker() {
  const techSwiper = document.querySelector('.swiper.technologies');
  if (!techSwiper) return;

  Swiper.use([Autoplay]);
  new Swiper(techSwiper, {
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
}

// click link logic
function clickLink() {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const menuToggle = document.getElementById("menu-toggle");
      const navMenu = document.getElementById("menu");
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // fade out the page
      hidePage();
      // hide all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('flex');
      });
      // show the target section
      if (targetElement) {
        targetElement.classList.add('flex');
        targetElement.classList.remove('hidden');
      }
      // hide the nav
      toggleNavAction(menuToggle, navMenu);
      // fade in the page
      setTimeout(showPage, 500);
    })
  }) 
}

document.addEventListener("DOMContentLoaded", function() {
  // show the page
  setTimeout(showPage, 500);
  // nav toggle logic
  toggleNavClick();
  // click link logic
  clickLink();
});

