import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// ready to show
function showPage(firstLoad) {
  document.body.classList.add('show-me');
  // if first page load, init techTicker()
  if (firstLoad) {
    techTicker();
  }
}

// ready to hide
function hidePage() {
  document.body.classList.remove('show-me');
}

// work slider
function workSlider() {
  const workSlider = document.querySelector('.swiper.work-samples');
  if (!workSlider) return;

  Swiper.use([Pagination]);
  new Swiper (workSlider, {
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination.work-samples-pagination",
      clickable: true,
    },
  });
}

// click link logic
function clickLink() {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
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
        // if #hero, init tech ticker
        if (targetId === '#hero') {
          techTicker();
        // if #work, init work slider
        } else if (targetId === '#work') {
          workSlider();
        }
      }
      // hide the nav
      toggleNavAction(menuToggle, navMenu);
      // fade in the page
      setTimeout(showPage, 500);
    })
  }) 
}

function hideEmail() {
  const user = "jryan6492";
  const domain = "gmail.com";
  const email = user + "@" + domain;
  const subject = "?subject=Let's%20build%20something%20together!";
  const el = document.getElementById('email-me');
  if (!el) return;

  setTimeout(() => {
    el.setAttribute('href', 'mailto:' + email + subject);
  }, 800 + Math.random() * 1000);
};

document.addEventListener("DOMContentLoaded", function() {
  // show the page
  setTimeout(() => showPage(true), 500);
  // click link logic
  clickLink();
  // hide my email address from bots
  hideEmail();
});

