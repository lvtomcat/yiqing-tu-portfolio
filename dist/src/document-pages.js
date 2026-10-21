(() => {
  const { siteContent } = window;
  const root = document.querySelector("[data-document-root]");
  const pageKey = document.body.dataset.documentPage;
  const content = siteContent?.documents?.[pageKey];

  if (!root || !content) return;

  const backHome = `<a class="document-back mono" href="./index.html#top">← BACK HOME</a>`;
  const footer = `<footer class="site-footer section-shell"><p class="mono">© ${new Date().getFullYear()} ${siteContent.name} / ALL RIGHTS RESERVED</p><a class="mono" href="#top">BACK TO TOP [↑]</a></footer>`;

  const pageHeader = `
    <header class="document-header section-shell">
      <a class="wordmark" href="./index.html#top" aria-label="返回作品集首页">YIQING<br />TU<span>®</span></a>
      ${backHome}
    </header>
  `;

  const downloadLink = `<a class="document-download mono" href="${content.file}" download>${content.downloadLabel} <span aria-hidden="true">↗</span></a>`;

  const resumeMarkup = `
    <main class="document-main section-shell">
      <div class="document-meta mono">[PROFILE DOCUMENT] <span>01 / 02</span></div>
      <h1 class="document-title">${content.title}</h1>
      <p class="document-intro">${content.intro}</p>
      ${downloadLink}
      <section class="resume-viewer" aria-label="简历 PDF 预览">
        <object class="resume-pdf" data="${content.file}" type="application/pdf">
          <p>当前浏览器无法内嵌预览 PDF。<a href="${content.file}" target="_blank" rel="noopener noreferrer">打开原始 PDF ↗</a></p>
        </object>
      </section>
      <p class="document-fallback mono">若无法预览，请 <a href="${content.file}" target="_blank" rel="noopener noreferrer">打开原始 PDF ↗</a></p>
    </main>
  `;

  const performanceMarkup = pageKey === "performance" ? `
    <main class="document-main section-shell">
      <div class="document-meta mono">[SELECTED PERFORMANCE] <span>02 / 02</span></div>
      <h1 class="document-title">${content.title}</h1>
      <p class="document-intro">${content.intro}</p>
      ${downloadLink}
      <section class="performance-grid" aria-label="关键业绩指标">
        ${content.metrics.map((metric) => `<article><p class="performance-value">${metric.value}</p><h2>${metric.label}</h2><p>${metric.text}</p></article>`).join("")}
      </section>
      <p class="performance-note mono">${content.sourceNote}</p>
    </main>
  ` : "";

  document.title = `${content.title} — ${siteContent.name}`;
  root.innerHTML = `${pageHeader}${pageKey === "resume" ? resumeMarkup : performanceMarkup}${footer}`;
})();
