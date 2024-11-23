
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


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });
});

<script>
  document.getElementById('show-more').addEventListener('click', function () {
    const hiddenItems = document.querySelectorAll('.technologies-list .hidden');
    hiddenItems.forEach((item) => {
      item.style.display = item.style.display === 'none' || item.style.display === '' ? 'inline-block' : 'none';
    });

  
    this.textContent = this.textContent === 'Show More' ? 'Show Less' : 'Show More';
  });
</script>

