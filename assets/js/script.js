'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verificăm dacă cookie-ul de utilizator există deja
  var existingUser = getCookie("username");

  // Dacă cookie-ul există, informăm utilizatorul că este deja autentificat
  if (existingUser) {
      document.getElementById('userStatus').textContent = 'Deja autentificat ca ' + existingUser;
      window.location.href = 'index.html'; // Opțional, redirecționăm utilizatorul
  } else if (username === 'ionut' && password === 'test') {
      document.getElementById('userStatus').textContent = 'Welcome, Ionut';
      document.cookie = "username=Ionut; path=/";
      window.location.href = 'index.html';
  } else {
      document.getElementById('userStatus').textContent = 'Neautentificat';
  }
}

// Funcție auxiliară pentru a obține un cookie după nume
function getCookie(name) {
  let cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
      let cookiePair = cookieArray[i].split('=');
      if (name === cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}

// Preluăm numele utilizatorului din cookie și actualizăm interfața
window.onload = function() {
  let username = getCookie("username");
  if (username) {
    document.getElementsByClassName("off")[0].style.display = "none";
      document.getElementById("usernameDisplay").textContent = " Welcome, " + username;
  } else {
      document.getElementById("usernameDisplay").textContent = " Neautentificat";
  }
}