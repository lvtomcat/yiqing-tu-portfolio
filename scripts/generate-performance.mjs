import { readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve, relative, isAbsolute } from "node:path";
import vm from "node:vm";
import SSF from "ssf";

const root = fileURLToPath(new URL("../", import.meta.url));
const escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");

export function formatCell(cell, date1904 = false) {
  if (cell.kind === "blank") return "";
  if (cell.kind === "boolean") return cell.value ? "TRUE" : "FALSE";
  if (cell.kind === "text") return String(cell.value);
  return SSF.format(cell.format || "General", cell.value, { date1904 });
}

export function renderWorkbook(book) {
  return book.sheets.map((sheet, index) => {
    const id = `performance-sheet-${index + 1}`;
    const rows = sheet.data.map((row) => `<tr style="height:${row.height}pt">${row.cells.map((cell) => {
      const text = formatCell(cell, book.date1904);
      const href = cell.link || (/^https?:\/\//i.test(text) ? text : "");
      const safeLink = /^(https?:\/\/|mailto:)/i.test(href);
      const contents = safeLink ? `<a href="${escape(href)}" target="_blank" rel="noopener noreferrer">${escape(text)}</a>` : escape(text);
      const style = Object.entries(cell.style).map(([key, value]) => `${key}:${value}`).join(";");
      const [rowspan, colspan] = cell.span;
      return `<td data-cell="${escape(cell.address)}" data-raw-value="${escape(JSON.stringify(cell.value))}" data-number-format="${escape(cell.format)}"${rowspan > 1 ? ` rowspan="${rowspan}"` : ""}${colspan > 1 ? ` colspan="${colspan}"` : ""} style="${escape(style)}"><div class="excel-cell">${contents || "&#160;"}</div></td>`;
    }).join("")}</tr>`).join("\n");
    return `<article class="performance-sheet" data-sheet-name="${escape(sheet.name)}" data-rows="${sheet.rows}" data-columns="${sheet.columns}">
  <h3 class="performance-sheet-title" id="${id}">${escape(sheet.name)}</h3>
  <div class="performance-table-scroll" role="region" aria-labelledby="${id}" tabindex="0">
    <table class="excel-table" aria-labelledby="${id}" style="width:${sheet.widths.reduce((a, b) => a + b, 0)}px">
      <colgroup>${sheet.widths.map((width) => `<col style="width:${width}px">`).join("")}</colgroup>
      <tbody>${rows}</tbody>
    </table>
  </div>
</article>`;
  }).join("\n");
}

export async function generatePerformance() {
  const context = { window: {} };
  vm.runInNewContext(await readFile(resolve(root, "src/content.js"), "utf8"), context);
  const source = resolve(root, context.window.siteContent.documents.performance.file);
  if (isAbsolute(relative(root, source)) || relative(root, source).startsWith("..")) throw new Error("The workbook must be inside this project.");
  const process = spawnSync(globalThis.process.env.PORTFOLIO_PYTHON || "python3", [resolve(root, "scripts/read-performance.py"), source], { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
  if (process.status !== 0) throw new Error(process.stderr || "Unable to read Excel. Install requirements.txt and ensure Python 3 is available.");
  const book = JSON.parse(process.stdout);
  const markup = renderWorkbook(book);
  const indexPath = resolve(root, "index.html");
  const html = await readFile(indexPath, "utf8");
  const start = "<!-- PERFORMANCE:START -->", end = "<!-- PERFORMANCE:END -->";
  const startIndex = html.indexOf(start), endIndex = html.indexOf(end);
  if (startIndex < 0 || endIndex < startIndex) throw new Error("Missing Performance generation markers in index.html.");
  const output = html.slice(0, startIndex + start.length) + "\n" + markup + "\n        " + html.slice(endIndex);
  await writeFile(indexPath, output);
  console.log(`Performance regenerated: ${book.sheets.map((s) => `${s.name} (${s.rows} rows × ${s.columns} columns)`).join(", ")}.`);
  return book;
}

if (globalThis.process.argv[1] && resolve(globalThis.process.argv[1]) === fileURLToPath(import.meta.url)) await generatePerformance();
