
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
});
