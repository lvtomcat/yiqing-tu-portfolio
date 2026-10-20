(function () {
  const { siteContent } = window;
  const root = document.querySelector("[data-project-root]");
  const projectId = document.body.dataset.projectId;

  if (!siteContent || !root) return;

  const projectIndex = siteContent.works.findIndex((work) => work.slug === projectId);
  const project = siteContent.works[projectIndex];

  if (!project) {
    root.innerHTML = `<p class="project-empty">未找到该项目。<a href="../index.html#works">返回作品集</a></p>`;
    return;
  }

  const previous = siteContent.works[(projectIndex - 1 + siteContent.works.length) % siteContent.works.length];
  const next = siteContent.works[(projectIndex + 1) % siteContent.works.length];
  const detail = project.detail || {};
  const list = (items) => items?.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
  const section = (title, content) => content ? `<section class="project-section"><p class="project-section-label mono">[${title}]</p>${content}</section>` : "";
  const customSections = detail.sections?.map((item) => {
    const paragraphs = item.paragraphs?.map((paragraph) => `<p>${paragraph}</p>`).join("") || "";
    return section(item.title, `${paragraphs}${list(item.items)}`);
  }).join("") || "";
  const imageGallery = detail.images?.length ? `
    <section class="project-section project-gallery">
      <p class="project-section-label mono">[完整图片展示]</p>
      <div class="project-media-list">
        ${detail.images.map((image, index) => `
          <figure class="project-media ${image.orientation ? `is-${image.orientation}` : ""}">
            <button class="project-image-button" type="button" data-lightbox-image="${index}" aria-label="查看 ${image.alt} 完整大图">
              <img src="${image.src}" alt="${image.alt}" loading="lazy" />
            </button>
            ${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}
          </figure>
        `).join("")}
      </div>
    </section>
  ` : "";

  document.title = `${project.title} — 涂奕晴`;
  root.innerHTML = `
    <header class="project-header section-shell">
      <a class="wordmark" href="../index.html#top" aria-label="返回作品集首页">YIQING<br />TU<span>®</span></a>
      <a class="project-back mono" href="../index.html#works">← 返回作品集</a>
    </header>
    <main class="project-main section-shell">
      <div class="project-meta mono"><span>PROJECT / ${project.number}</span><span>${project.category}</span></div>
      <h1 class="project-title">${project.title}</h1>
      <p class="project-summary">${project.description}</p>
      <div class="project-intro-grid">
        ${section("项目背景", detail.background ? `<p>${detail.background}</p>` : "")}
        ${section("我的职责", list(detail.roles))}
        ${section("工作过程", list(detail.process))}
        ${section("项目成果与关键数据", list(detail.outcomes || project.details))}
      </div>
      ${customSections}
      ${imageGallery}
      ${project.url ? `<a class="project-external mono" href="${project.url}" target="_blank" rel="noreferrer">${project.linkLabel || "查看外部作品"} ↗</a>` : ""}
      <nav class="project-pagination" aria-label="项目翻页">
        <a href="${previous.page.replace("./projects/", "")}"><span class="mono">← 上一个</span><strong>${previous.title}</strong></a>
        <a href="${next.page.replace("./projects/", "")}"><span class="mono">下一个 →</span><strong>${next.title}</strong></a>
      </nav>
    </main>
    <footer class="site-footer section-shell">
      <p class="mono">© ${new Date().getFullYear()} ${siteContent.name} / ALL RIGHTS RESERVED</p>
      <a class="mono" href="#top">BACK TO TOP [↑]</a>
    </footer>
    <dialog class="image-lightbox" data-image-lightbox aria-label="图片全屏查看">
      <button class="lightbox-close mono" type="button" data-lightbox-close aria-label="关闭大图">CLOSE [×]</button>
      <figure><img data-lightbox-target src="" alt="" /><figcaption data-lightbox-caption></figcaption></figure>
    </dialog>
  `;

  const lightbox = document.querySelector("[data-image-lightbox]");
  const images = detail.images || [];
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-image]");
    if (trigger) {
      const image = images[Number(trigger.dataset.lightboxImage)];
      const target = document.querySelector("[data-lightbox-target]");
      target.src = image.src;
      target.alt = image.alt;
      document.querySelector("[data-lightbox-caption]").textContent = image.caption || image.alt;
      lightbox.showModal();
    }
  });
  document.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}());
