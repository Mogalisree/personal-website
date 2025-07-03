// Smooth scrolling for nav links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Theme toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Theme";
toggleBtn.classList.add("toggle-theme");
document.body.appendChild(toggleBtn);

// Toggle light/dark mode
toggleBtn.onclick = () => {
  document.body.classList.toggle("light-mode");
};
