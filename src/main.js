import { siteContent } from "./content.js";

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
  list.innerHTML = siteContent.works.map((work, index) => `
    <article class="work-item reveal">
      <button class="work-button" type="button" data-work-index="${index}" aria-label="查看 ${work.title} 的项目详情">
        <span class="work-number mono">(${work.number})</span>
        <span class="work-title">${work.title}</span>
        <span class="work-category">${work.category}</span>
        <span class="work-arrow" aria-hidden="true">↗</span>
        <span class="work-image-wrap"><img src="${work.image}" alt="${work.imageAlt}" loading="lazy" /></span>
      </button>
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

function renderSocials() {
  $('[data-social-links]').innerHTML = siteContent.socials.map((social) => `
    <li><a href="${social.url}" ${social.url !== "#" ? 'target="_blank" rel="noreferrer"' : ''}>${social.label}<span aria-hidden="true">↗</span><span class="sr-only">${social.note}</span></a></li>
  `).join("");
}

function setDialog(work) {
  $('[data-dialog-number]').textContent = `PROJECT / ${work.number}`;
  $('[data-dialog-category]').textContent = work.category;
  $('[data-dialog-title]').textContent = work.title;
  $('[data-dialog-description]').textContent = work.description;
  $('[data-dialog-image]').src = work.image;
  $('[data-dialog-image]').alt = work.imageAlt;
  $('[data-dialog-details]').innerHTML = work.details.map((detail) => `<span>${detail}</span>`).join("");
  const link = $('[data-dialog-link]');
  if (work.url) {
    link.href = work.url;
    link.textContent = `${work.linkLabel || "查看作品"} ↗`;
    link.hidden = false;
  } else {
    link.hidden = true;
  }
  $('[data-dialog-placeholder]').hidden = Boolean(work.url);
}

function setupDialog() {
  const dialog = $('[data-dialog]');
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-work-index]");
    if (trigger) {
      const work = siteContent.works[Number(trigger.dataset.workIndex)];
      setDialog(work);
      dialog.showModal();
      $('[data-dialog-close]').focus();
    }
  });
  $('[data-dialog-close]').addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
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
renderSocials();
setupDialog();
setupMenu();
setupReveal();
