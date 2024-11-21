document.addEventListener("DOMContentLoaded", function () {
  const typingText = `Hi, I'm Ikram :) Welcome to my portfolio, where you'll find my recent works and learn a bit about me.`;
  const typingElement = document.querySelector(".typing-effect");
  let index = 0;

  function type() {
    if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(type, 100); 
    } else {
      typingElement.style.borderRight = "none"; 
    }
  }

  type();
});

