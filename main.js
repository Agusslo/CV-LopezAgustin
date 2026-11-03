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
  "hero.pitch": "I build complete web applications, from the data model to deployment. I have published apps with <strong>authentication, roles, real-time updates and my own APIs</strong>, plus 4+ years leading customer-facing teams.",
  "hero.seeProjects": "See projects",
  "hero.lastShip": "latest deploys →",

  "cv.download": "Download CV",
  "cv.altTitle": "Spanish version",
  "cv.es": "Resume in Spanish",
  "cv.en": "Resume in English",
  "cv.page": "page",

  "stats.app": "full stack apps published",
  "stats.years": "years in customer-facing roles",
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

  "p0.lead": "Social network for anime, manga, illustration and gaming communities. Angular frontend and my own REST API built from scratch with NestJS and MongoDB.",
  "p0.f1": "<strong>Custom NestJS API</strong> on MongoDB Atlas with proper HTTP status codes",
  "p0.f2": "<strong>JWT authentication</strong> with expiry and session refresh, user and admin roles",
  "p0.f3": "Posts with images, <strong>likes, paginated comments</strong> and followers",
  "p0.f4": "Image uploads with <strong>Cloudinary</strong> and loading skeletons",
  "p0.f5": "<strong>Admin dashboard</strong> with user management and statistics",
  "p6.title": "Online menu with WhatsApp ordering",
  "p6.desc": "Catalog for local businesses: customers build their order on their phone and it arrives ready on the store's WhatsApp. The owner updates prices and stock from a dashboard.",
  "p7.desc": "File converter that runs 100% in the browser: images, PDF, DOCX and Markdown, without uploading anything to a server.",
  "p2.desc": "Restaurant management mobile app built in a team of 4 with per-member branches. I built the management screens, ID-card QR sign-up and the survey.",
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
  "exp.d1": "Seasons 2024 — 2026",
  "exp.d2": "2024 — Present",
  "exp.manager": "Store Manager",
  "exp.t1": "I coordinate staff, cash, inventory and suppliers during the Las Toninas summer season. I built my own web app to track the store's stock.",
  "exp.t2": "Managed social media for several accounts: content creation, editorial calendars and metrics analysis to improve results.",
  "exp.t3": "Trained and coordinated the customer service team; managed purchasing, inventory and daily cash closing.",

  "edu.title": "Education",
  "edu.d1": "2022 — Present",
  "edu.utn": "Technical Degree in Programming Systems",
  "edu.utnSub": "UTN (National Technological University) · Advanced student, final project in progress",
  "edu.uba": "English as a Foreign Language — Level 6",
  "edu.ubaSub": "Language Laboratory · University of Buenos Aires",
  "edu.oracleSub": "Official Oracle certification",
  "edu.school": "High School Diploma in Economics and Business",

  "contact.title": "Looking for a junior dev <span class=\"grad\">who's eager to learn?</span>",
  "contact.text": "I reply fast. Reach me by email, LinkedIn or WhatsApp, or download my resume in the language you need.",
  "contact.mail": "Send me an email",

  "footer.made": "Handcrafted with HTML, CSS, JS & GSAP",
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
  const dark = root.classList.toggle("dark");
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  document.querySelector('meta[name="theme-color"]').setAttribute("content", dark ? "#0f1117" : "#faf7f2");
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


// =====================================================
//  Animaciones con GSAP + ScrollTrigger
// =====================================================
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

// Líneas de velocidad del hero (estilo manga)
const linesG = document.getElementById("lines");
if (linesG) {
  const NS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    const r1 = 120 + Math.random() * 60, r2 = 260 + Math.random() * 40;
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", 300 + Math.cos(a) * r1); l.setAttribute("y1", 300 + Math.sin(a) * r1);
    l.setAttribute("x2", 300 + Math.cos(a) * r2); l.setAttribute("y2", 300 + Math.sin(a) * r2);
    linesG.appendChild(l);
  }
}

// Like de la tarjeta de TONARI
const tLike = document.getElementById("tLike");
const tLikes = document.getElementById("tLikes");
if (tLike) {
  tLike.addEventListener("click", () => {
    const on = tLike.classList.toggle("on");
    tLikes.textContent = String(Number(tLikes.textContent) + (on ? 1 : -1));
    if (hasGsap) gsap.fromTo(tLike, { scale: 1.5 }, { scale: 1, duration: .5, ease: "back.out(3)" });
  });
}

// Con "menos movimiento" activado se mantienen las entradas (son cortas y de una sola vez),
// pero se apagan los movimientos continuos: líneas girando, posts flotando y cursor.
if (hasGsap) {
  gsap.registerPlugin(ScrollTrigger);
  root.classList.add("anim");

  // ── Intro del hero ──
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.set(".hero__title .word, .hero__jp, [data-anim]", { visibility: "visible" })
    .from(".hero__title .word", { yPercent: 115, duration: 1.1, stagger: .12 })
    .fromTo(".hero__title .mark", { "--mark": 0 }, { "--mark": 1, duration: .7, ease: "power2.inOut" }, "-=.45")
    .from(".bubble", { scale: 0, rotate: -12, transformOrigin: "left bottom", duration: .7, ease: "back.out(2.2)" }, "-=.8")
    .from(".hero__jp", { opacity: 0, x: -20, duration: .6 }, "-=.5")
    .from(".hero [data-anim='up']", { y: 26, opacity: 0, duration: .7, stagger: .08 }, "-=.4")
    .from(".hero__panel", { y: 80, rotate: 8, scale: .9, opacity: 0, duration: 1.1, ease: "elastic.out(1, .7)" }, "-=1")
    .from(".panel__sfx", { scale: 0, rotate: -40, duration: .6, ease: "back.out(3)" }, "-=.4")
    .from(".speedlines line", { opacity: 0, duration: .8, stagger: { each: .01, from: "random" } }, 0)
    .from(".hero__kanji", { opacity: 0, y: 40, duration: 1.4 }, 0);

  if (!reduceMotion) {
    gsap.to(".speedlines", { rotate: 360, duration: 120, repeat: -1, ease: "none" });
    gsap.to(".panel__sfx", { y: -6, rotate: 16, duration: 1.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }

  // Kanji del hero con parallax
  gsap.to(".hero__kanji", { yPercent: 35, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // ── Paneles grandes: entran como viñetas de manga ──
  gsap.utils.toArray("main [data-anim='panel']:not(.hero__panel)").forEach(el => {
    gsap.from(el, {
      y: 70, rotate: -2, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onStart: () => gsap.set(el, { visibility: "visible" }),
    });
  });

  // ── Tarjetas en tanda ──
  gsap.set("[data-anim='card'], [data-anim='tl']", { visibility: "visible" });
  ScrollTrigger.batch("[data-anim='card']", {
    start: "top 88%",
    onEnter: b => gsap.from(b, { y: 50, opacity: 0, rotate: () => gsap.utils.random(-3, 3), duration: .8, stagger: .1, ease: "back.out(1.4)" }),
    once: true,
  });

  // Títulos de sección
  gsap.utils.toArray(".section__head").forEach(h => {
    gsap.from(h.children, { y: 30, opacity: 0, duration: .8, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: h, start: "top 85%" } });
  });

  // Timeline: la línea se dibuja con el scroll
  gsap.fromTo(".timeline", { "--tl": 0 }, { "--tl": 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 75%", end: "bottom 60%", scrub: true } });
  gsap.utils.toArray("[data-anim='tl']").forEach(el => {
    gsap.from(el, { x: -40, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
  });

  // Contadores de los stats
  gsap.utils.toArray("[data-count]").forEach(el => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, { v: end, duration: 1.4, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" }, onUpdate: () => (el.textContent = Math.round(obj.v)) });
  });
  gsap.from(".stat", { y: 30, opacity: 0, duration: .7, stagger: .08, ease: "back.out(1.6)", scrollTrigger: { trigger: ".stats", start: "top 90%" } });

  // Posts de TONARI flotando
  if (!reduceMotion) gsap.to(".tonari .post", { y: -8, duration: 2.4, stagger: .6, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.from(".tonari .post", { x: 60, opacity: 0, duration: .9, stagger: .2, ease: "power3.out", scrollTrigger: { trigger: ".tonari", start: "top 80%" } });
  gsap.fromTo(".contact__sfx", { scale: 0, rotate: -30 }, { scale: 1, rotate: 10, duration: .7, ease: "back.out(3)", scrollTrigger: { trigger: ".contact", start: "top 75%" } });

  // ── Botones magnéticos ──
  if (window.matchMedia("(hover: hover)").matches && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach(btn => {
      const xTo = gsap.quickTo(btn, "x", { duration: .4, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: .4, ease: "power3" });
      btn.addEventListener("mousemove", e => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * .25);
        yTo((e.clientY - r.top - r.height / 2) * .35);
      });
      btn.addEventListener("mouseleave", () => { xTo(0); yTo(0); });
    });

    // Punto que sigue al cursor
    const dot = document.querySelector(".cursor-dot");
    const dx = gsap.quickTo(dot, "x", { duration: .25, ease: "power3" });
    const dy = gsap.quickTo(dot, "y", { duration: .25, ease: "power3" });
    window.addEventListener("mousemove", e => { dx(e.clientX); dy(e.clientY); dot.style.opacity = ".9"; });
    document.addEventListener("mouseleave", () => (dot.style.opacity = "0"));
    document.querySelectorAll("a, button, .like").forEach(el => {
      el.addEventListener("mouseenter", () => dot.classList.add("big"));
      el.addEventListener("mouseleave", () => dot.classList.remove("big"));
    });
  }

  // Si cambia el idioma, los textos cambian de alto: recalculamos los disparadores
  document.querySelectorAll("[data-set-lang]").forEach(b => b.addEventListener("click", () => setTimeout(() => ScrollTrigger.refresh(), 300)));
}
