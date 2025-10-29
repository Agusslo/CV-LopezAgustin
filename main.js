// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
const open = navLinks.classList.toggle('open');
menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Tema claro/oscuro (persistente)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
themeToggle?.addEventListener('click', () => {
root.classList.toggle('light');
localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
themeToggle.textContent = root.classList.contains('light') ? '☀' : '☾';
});
themeToggle.textContent = root.classList.contains('light') ? '☀' : '☾';

// Scroll-reveal simple
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.classList.add('visible');
    observer.unobserve(e.target);
    }
});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
