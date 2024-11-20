document.addEventListener("DOMContentLoaded", () => {
  const robot = document.querySelector(".robot-icon");
  if (robot) {
    robot.style.transform = "scale(0.5)";
    setTimeout(() => {
      robot.style.transition = "transform 0.5s";
      robot.style.transform = "scale(1)";
    }, 500);
  }
});
