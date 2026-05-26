// ── Año dinámico ──────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Menú mobile ───────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const navLinks   = document.getElementById("navLinks");
const navItems   = document.querySelectorAll(".nav__links a");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ── Tema claro / oscuro ───────────────────────────
const root        = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const iconMoon    = themeToggle?.querySelector(".icon-moon");
const iconSun     = themeToggle?.querySelector(".icon-sun");

function applyTheme(theme) {
  if (theme === "light") {
    root.classList.add("light");
    if (iconMoon) iconMoon.style.display = "none";
    if (iconSun)  iconSun.style.display  = "block";
  } else {
    root.classList.remove("light");
    if (iconMoon) iconMoon.style.display = "block";
    if (iconSun)  iconSun.style.display  = "none";
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  applyTheme("light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

// ── Reveal on scroll ──────────────────────────────
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  revealEls.forEach(el => obs.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("visible"));
}

// ── Active nav link on scroll ─────────────────────
const sections    = document.querySelectorAll("section[id]");
const navAnchors  = document.querySelectorAll(".nav__links a[href^='#']");

const activateNav = () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 120) current = sec.getAttribute("id");
  });

  navAnchors.forEach(a => {
    a.style.color = "";
    if (a.getAttribute("href") === `#${current}`) {
      a.style.color = "var(--text)";
    }
  });
};

window.addEventListener("scroll", activateNav, { passive: true });
