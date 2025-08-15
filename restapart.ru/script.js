document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let isFirstScroll = true; // Флаг первого появления

window.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-top');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 300) {
    scrollButton.classList.add('active');
    
    // Пульсация только при первом появлении
    if (isFirstScroll) {
      scrollButton.classList.add('pulse');
      isFirstScroll = false;
      
      // Удаляем класс пульсации после завершения анимации
      setTimeout(() => {
        scrollButton.classList.remove('pulse');
      }, 1500);
    }
    
  } else {
    scrollButton.classList.remove('active');
  }
});

// Оптимизация с помощью throttle
let isScrolling;
window.addEventListener('scroll', () => {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(checkScroll, 100);
});

function checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const scrollButton = document.querySelector('.scroll-top');
  scrollButton.classList.toggle('active', scrollPosition > 300);
}

// Cookie consent
function acceptCookies() {
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  if (localStorage.getItem('cookiesAccepted') && banner) {
    banner.style.display = 'none';
  }
});
