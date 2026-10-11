// =====================================================
//  agus.dev — interacciones
// =====================================================
const root = document.documentElement;

// ── Año dinámico ──────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Traducciones (el español sale del HTML; acá va el inglés) ──
const EN = {
  "skip": "Skip to projects",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.experience": "Experience",
  "nav.education": "Education",
  "nav.contact": "Contact",

  "hero.status": "Open to my first developer role",
  "hero.role": "Junior Full Stack Developer",
  "hero.pitch": "I build complete web applications, from the data model to deployment. I have an app in production with <strong>authentication, roles, real-time updates and PWA</strong>, plus 4+ years leading customer-facing teams.",
  "hero.seeProjects": "See projects",
  "hero.lastShip": "latest deploy →",

  "cv.download": "Download CV",
  "cv.altTitle": "Spanish version",
  "cv.es": "Resume in Spanish",
  "cv.en": "Resume in English",
  "cv.page": "page",

  "stats.app": "full stack app in production",
  "stats.years": "years leading teams",
  "stats.utn": "advanced student",
  "stats.lang": "bilingual resume & portfolio",

  "projects.title": "Projects",
  "projects.sub": "What I've built, and what I learned building it.",
  "projects.live": "Live",
  "projects.demo": "Live demo",
  "projects.wip": "In progress",
  "projects.thesis": "Final project",
  "projects.site": "Site",
  "projects.code": "Code",
  "projects.game": "Game",

  "p1.lead": "A complete ticketing system for a movie theater, built from a client's requirements that kept changing throughout the semester.",
  "p1.f1": "<strong>Supabase + PostgreSQL</strong> with Row Level Security, email and Google sign-in",
  "p1.f2": "<strong>Roles</strong> for customer, employee and admin with route guards",
  "p1.f3": "<strong>Real-time seat map</strong> with Supabase Realtime",
  "p1.f4": "<strong>PDF tickets with QR codes</strong>, validated by scanning with the camera",
  "p1.f5": "Concession stand, coupons, combos, <strong>loyalty points</strong> and cancellation with account credit",
  "p1.f6": "Admin dashboard with <strong>reports, charts</strong> and activity log · installable <strong>PWA</strong>",
  "seats.free": "free",
  "seats.taken": "taken",

  "p2.desc": "Cross-platform mobile app for restaurant management, with a Supabase backend and a branch-based workflow.",
  "p3.desc": "Business landing page with no frameworks: scroll animations, a 3D tilt effect and direct WhatsApp contact.",
  "p4.desc": "Online store with shopping cart, authentication, form validation and a MySQL database.",
  "p5.desc": "2D arcade game with collisions, player controls, scoring and start/game-over screens.",

  "skills.title": "Skills",
  "skills.sub": "What I use every day, and what I've worked with throughout my degree.",
  "skills.back": "Backend & data",
  "skills.rest": "REST APIs",
  "skills.tools": "Tools",
  "skills.other": "Other languages",

  "exp.title": "Experience",
  "exp.sub": "Before coding, I learned to lead teams and solve real problems every day.",
  "exp.d1": "2024 — Present",
  "exp.manager": "Store Manager",
  "exp.t1": "I coordinate staff, cash handling, inventory and supplier orders, and solve day-to-day operational issues.",
  "exp.t2": "Managed social media for several accounts: content creation, editorial calendars and metrics analysis to improve results.",
  "exp.t3": "Trained and coordinated the customer service team; managed purchasing, inventory and daily cash closing.",

  "edu.title": "Education",
  "edu.d1": "2022 — Present",
  "edu.utn": "Technical Degree in Programming Systems",
  "edu.utnSub": "UTN (National Technological University) · Advanced student, final project in progress",
  "edu.uba": "English as a Foreign Language — Level 6",
  "edu.ubaSub": "Language Laboratory · University of Buenos Aires",
  "edu.school": "High School Diploma in Economics and Business",

  "contact.title": "Looking for a junior dev <span class=\"grad\">who's eager to learn?</span>",
  "contact.text": "I reply fast. Reach me by email, LinkedIn or WhatsApp, or download my resume in the language you need.",
  "contact.mail": "Send me an email",

  "footer.made": "Handcrafted with HTML, CSS & JS",
  "footer.top": "Back to top",

  "aria.theme": "Toggle theme",
  "aria.menu": "Open menu",
};

const META = {
  es: {
    title: "Agustín Nicolás López — Full Stack Developer Jr",
    desc: "Portfolio de Agustín Nicolás López, desarrollador Full Stack junior con Angular, TypeScript y Supabase.",
    cvMain: "Agustin_Lopez_CV.pdf", cvAlt: "Agustin_Lopez_CV_EN.pdf", altLabel: "EN",
  },
  en: {
    title: "Agustín Nicolás López — Junior Full Stack Developer",
    desc: "Portfolio of Agustín Nicolás López, junior full stack developer working with Angular, TypeScript and Supabase.",
    cvMain: "Agustin_Lopez_CV_EN.pdf", cvAlt: "Agustin_Lopez_CV.pdf", altLabel: "ES",
  },
};

// Guardamos el español original de cada elemento
const ES = {};
document.querySelectorAll("[data-i18n]").forEach(el => { ES[el.dataset.i18n] ??= el.textContent; });
document.querySelectorAll("[data-i18n-html]").forEach(el => { ES[el.dataset.i18nHtml] ??= el.innerHTML; });
document.querySelectorAll("[data-i18n-aria]").forEach(el => { ES["aria." + el.dataset.i18nAria] ??= el.getAttribute("aria-label"); });
document.querySelectorAll("[data-i18n-title]").forEach(el => { ES[el.dataset.i18nTitle] ??= el.getAttribute("title"); });

function applyLang(lang) {
  const dict = lang === "en" ? EN : ES;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { const v = dict["aria." + el.dataset.i18nAria]; if (v) el.setAttribute("aria-label", v); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { const v = dict[el.dataset.i18nTitle]; if (v) el.setAttribute("title", v); });

  const m = META[lang];
  root.lang = lang;
  root.setAttribute("data-lang", lang);
  document.title = m.title;
  document.querySelector('meta[name="description"]').setAttribute("content", m.desc);

  // El botón principal descarga el CV del idioma activo; el chico, el otro
  const cvMain = document.getElementById("cvMain");
  const cvAlt = document.getElementById("cvAlt");
  cvMain.href = m.cvMain;
  cvAlt.href = m.cvAlt;
  cvAlt.textContent = m.altLabel;

  document.querySelectorAll("[data-set-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
}

function setLang(lang, animate) {
  try { localStorage.setItem("lang", lang); } catch (e) {}
  if (!animate) return applyLang(lang);
  root.classList.add("switching");
  setTimeout(() => { applyLang(lang); root.classList.remove("switching"); }, 180);
}

document.querySelectorAll("[data-set-lang]").forEach(b =>
  b.addEventListener("click", () => {
    if (b.getAttribute("aria-pressed") !== "true") setLang(b.dataset.setLang, true);
  })
);
setLang(root.getAttribute("data-lang") === "en" ? "en" : "es", false);

// ── Tema claro / oscuro ───────────────────────────────
document.getElementById("themeToggle").addEventListener("click", () => {
  const light = root.classList.toggle("light");
  try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
  document.querySelector('meta[name="theme-color"]').setAttribute("content", light ? "#f5f7fb" : "#070b13");
});

// ── Menú mobile ───────────────────────────────────────
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  nav.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  nav.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 820) closeMenu(); });

// ── Nav con fondo al scrollear + link activo ──────────
const sections = [...document.querySelectorAll("main section[id]")];
const anchors = [...navLinks.querySelectorAll("a")];

function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 10);
  let current = "";
  for (const sec of sections) {
    if (sec.getBoundingClientRect().top <= 140) current = sec.id;
  }
  anchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ── Aparición al hacer scroll ─────────────────────────
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("visible"));
}

// ── Mini mapa de butacas "en tiempo real" ─────────────
const seatsEl = document.getElementById("seats");
if (seatsEl) {
  const ROWS = 6, COLS = 10;
  const seats = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const s = document.createElement("span");
      s.className = "seat";
      if (r >= ROWS - 2) s.classList.add("seat--vip");
      if (Math.random() < 0.3) s.classList.add("seat--taken");
      seatsEl.appendChild(s);
      seats.push(s);
    }
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    // Simula que otra persona compra o libera una butaca
    setInterval(() => {
      if (document.hidden) return;
      const free = seats.filter(s => !s.classList.contains("seat--taken"));
      const taken = seats.filter(s => s.classList.contains("seat--taken"));
      const buy = taken.length < 14 ? true : taken.length > 26 ? false : Math.random() < 0.5;
      const pool = buy ? free : taken;
      const seat = pool[Math.floor(Math.random() * pool.length)];
      if (!seat) return;
      seat.classList.add("seat--flash");
      setTimeout(() => {
        seat.classList.remove("seat--flash");
        seat.classList.toggle("seat--taken", buy);
      }, 650);
    }, 1400);
  }
}
