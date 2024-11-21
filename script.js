document.addEventListener("DOMContentLoaded", function () {
  const typingText = `Hi, I'm Ikram :) Welcome to my portfolio, where you'll find my recent works and learn a bit about me.`;
  const typingElement = document.querySelector(".typing-effect");
  let index = 0;

  function type() {
    // Si no se ha terminado el texto, continúa escribiendo
    if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(type, 100); // Ajustar velocidad de tipeo (ms por letra)
    } else {
      // Eliminar el cursor después de que termine de escribir todo
      typingElement.style.borderRight = "none";
    }
  }

  // Iniciar el efecto de tipeo
  type();
});
