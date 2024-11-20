
function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  const numberOfParticles = 30; 


  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`; 


    particlesContainer.appendChild(particle);
  }
}


createParticles();


document.addEventListener('scroll', () => {
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    const offset = window.scrollY / 5; 
    particle.style.transform = `translateY(${offset}px)`;
  });
});

