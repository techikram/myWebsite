
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hi, I'm Ikram :)";
  const typingEffectElement = document.querySelector(".typing-effect");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingEffectElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 150); 
    }
  }
 
  typeText();

  setInterval(() => {
    typingEffectElement.classList.toggle('cursor');
  }, 500);
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
});

document.getElementById('show-more').addEventListener('click', function () {
  const modal = document.getElementById('technologies-modal');
  const button = this;
  
  // Abre el modal
  modal.style.display = "block";
  
  // Cambiar texto del botón
  button.textContent = 'Show Less';
  
  // Cerrar modal
  document.querySelector('.close-btn').addEventListener('click', () => {
    modal.style.display = "none";
    button.textContent = 'Show More';
  });
  
  // Cerrar modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      button.textContent = 'Show More';
    }
  });
});

