// script.js
document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.querySelector('.titulodesc');

  // Añadir una pequeña demora para asegurar que el navegador cargue los estilos antes de la animación
  setTimeout(() => {
      textElement.style.opacity = '1';
      textElement.style.transform = 'translateX(0)';
  }, 100); // Ajusta el tiempo de retraso si es necesario
});

// Función para verificar si el elemento es visible en la ventana de visualización
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Aplicar el efecto cuando el contenido está en la vista
function applyScrollEffects() {
  const h2Element = document.querySelector('h2.text-slide-in');
  const spanElement = document.querySelector('span.titulodesc');
  const descElements = document.querySelectorAll('.desc');

  // Mostrar el h2 cuando está en vista
  if (isElementInView(h2Element)) {
    h2Element.classList.add('visible');
  }


  // Mostrar los párrafos cuando están en vista
  descElements.forEach(function (p) {
    if (isElementInView(p)) {
      p.classList.add('visible');
    }
  });
}

// Ejecutar al cargar la página y al hacer scroll
window.addEventListener('load', applyScrollEffects);
window.addEventListener('scroll', applyScrollEffects);

// Script para la funcionalidad del botón hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Asegúrate de que el botón hamburguesa tenga un manejador de eventos
  hamburger.addEventListener('click', function() {
      // Alterna la clase activa para el botón hamburguesa
      hamburger.classList.toggle('active');
      // Alterna la clase activa para el menú de navegación
      navMenu.classList.toggle('active');
  });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});




