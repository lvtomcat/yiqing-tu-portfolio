const { siteContent } = window;

if (!siteContent) {
  throw new Error("作品集内容未加载：请确认 content.js 在 main.js 之前引入。");
}

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function fillContent() {
  $$('[data-content="name"]').forEach((el) => { el.textContent = siteContent.name; });
  $$('[data-content="intro"]').forEach((el) => { el.textContent = siteContent.intro; });
  $$('[data-content="location"]').forEach((el) => { el.textContent = siteContent.location; });
  $$('[data-content="email"]').forEach((el) => { el.textContent = siteContent.email; });
  $$('[data-content="about"]').forEach((el) => { el.textContent = siteContent.about; });
  $$('[data-email-link]').forEach((el) => { el.href = `mailto:${siteContent.email}`; });
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
}

function renderWorks() {
  const list = $('[data-works-list]');
  list.innerHTML = siteContent.works.map((work) => `
    <article class="work-item reveal">
      <a class="work-button" href="${work.page}" aria-label="查看 ${work.title} 的项目详情">
        <span class="work-number mono">(${work.number})</span>
        ${work.englishTitle ? `<span class="work-title-group"><span class="work-title">${work.title}</span><span class="work-english-title">${work.englishTitle}</span>${work.platform ? `<span class="work-platform mono">PLATFORM / ${work.platform}</span>` : ""}</span>` : `<span class="work-title">${work.title}</span>`}
        ${work.homeDescription ? `<span class="work-category-group"><span class="work-category">${work.category}</span><span class="work-description">${work.homeDescription}</span></span>` : `<span class="work-category">${work.category}</span>`}
        <span class="work-arrow" aria-hidden="true">↗</span>
        ${work.image ? `<span class="work-image-wrap"><img src="${work.image}" alt="${work.imageAlt}" loading="lazy" /></span>` : ""}
      </a>
    </article>
  `).join("");
}

function renderServices() {
  $('[data-services-list]').innerHTML = siteContent.services.map((service) => `
    <article class="service-item">
      <span class="mono">/${service.index}</span>
      <div><h3>${service.title}</h3><p>${service.text}</p></div>
    </article>
  `).join("");
}

function renderBackground() {
  $('[data-background-list]').innerHTML = siteContent.background.map((item) => `
    <article>
      <span class="mono">${item.label}</span>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderAchievements() {
  $('[data-achievement-list]').innerHTML = siteContent.achievements.map((item) => `
    <div><dt>${item.value}</dt><dd>${item.label}</dd></div>
  `).join("");
}

function renderSocials() {
  $('[data-social-links]').innerHTML = siteContent.socials.map((social) => `
    <li><a href="${social.url}" ${social.url !== "#" ? 'target="_blank" rel="noreferrer"' : ''}>${social.label}<span aria-hidden="true">↗</span><span class="sr-only">${social.note}</span></a></li>
  `).join("");
}

function setupMenu() {
  const toggle = $(".menu-toggle");
  const nav = $(".site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    document.body.classList.toggle("nav-open", !open);
  });
  $$("a", nav).forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }));
}

function setupReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((el) => observer.observe(el));
}

fillContent();
renderWorks();
renderServices();
renderBackground();
renderAchievements();
renderSocials();
setupMenu();
setupReveal();
