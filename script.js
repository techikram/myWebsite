
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".animated-title");
  title.style.transform = "translateX(-100%)";
  title.style.transition = "transform 2s";
  setTimeout(() => {
    title.style.transform = "translateX(0)";
  }, 500);
});
