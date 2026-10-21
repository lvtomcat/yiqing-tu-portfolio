# 涂奕晴个人作品集

这是一个无框架依赖的静态网站，可直接打开 `index.html`，也可在项目目录启动本地服务器：

```bash
python3 -m http.server 4174
```

然后访问 `http://localhost:4174`。

## 修改作品集内容

所有可编辑的文字、作品、邮箱、社交链接都集中在 [`src/content.js`](./src/content.js)：

- `name`、`intro`、`about`、`location`：个人介绍文字
- `background`：About 区域的三张经历／能力信息卡
- `email`：会同步更新首屏和联系区的邮件链接
- `socials`：将每项的 `url: "#"` 换成你的真实主页链接
- `works`：四个作品的标题、类别、首页卡片和详情页内容

每个作品都包含：

- `page`：独立详情页地址
- `detail.background`：项目背景（没有内容可删掉）
- `detail.roles`、`detail.process`、`detail.outcomes`：职责、过程、成果列表（没有内容可删掉）
- `detail.sections`：可选的自定义内容区块；可填写 `title`、`paragraphs`（多段文字）和 `items`（列表）
- `detail.caseStudies`：同一 Project 内的多个成果案例；每个案例可填写 `title`、`summary`、`metrics`、`sections`、`images` 和可选的 `url`
- `caseStudies[].sections`：案例内的文字模块；每项填写 `title` 与 `paragraphs`，适合展示多组 blurb 或投放文案
- `detail.galleryTitle`：可选的图片展示区标题，例如「自制封面展示」
- `detail.images`：完整展示图片的数组；每项填写 `src`、`alt` 和可选的 `caption`

详情页文件位于 `projects/project-01.html` 至 `projects/project-04.html`。它们共用 `src/project-detail.js`，因此通常只需要修改 `src/content.js`，无需改页面结构。

## 更新简历

- 简历直接显示在首页 Hero 后的第二个区块，导航 `[RESUME]` 滚动到 `index.html#resume`。
- 原始简历保留在 `assets/documents/Yiqing_Tu_Resume.pdf`。更换 PDF 后，将每一页按 300 DPI 转成独立、完整的 WebP 图片，依页码保存为 `images/resume-page-01.webp`、`images/resume-page-02.webp` 等，不裁剪、不拼接。
- 在 `src/content.js` 的 `documents.resume.pages` 按页码顺序填写 `src`、`alt`、原图 `width` 和 `height`。网页自动纵向排列，保持原始比例；没有独立简历页面或 PDF 下载按钮。
- 原始 PDF 始终保留；转换只生成图片，不重排简历内容。

## 更新 Performance 表格

Performance 位于首页 SERVICES 之后、CONTACT 之前。所有 Sheet 按原顺序直接显示为 HTML 表格，包含完整行列、原始文字和链接。手机端可在表格内左右滑动，也可用键盘聚焦表格区域后按左右方向键。

以后只需在 GitHub 替换 **`assets/documents/Yiqing_Tu_Performance.xlsx`** 并提交到 `main`。仓库的 **Update Performance table** 自动流程会重新生成首页表格、同步 `dist`，再把生成结果保存回仓库。流程完成后可从 Actions 页面查看结果及 `static-website` 发布文件包；现有托管仍需按原方式发布，不会修改域名或公开范围。

- `src/content.js` 的 `documents.performance.file` 管理原始文件路径。若修改名称，也更新这里的路径；自动流程监听 `assets/documents` 中的 XLSX。
- Excel 只在构建时读取，访客浏览器不加载 Excel 解析库。首页中的表格已经是静态 HTML，直接双击首页也能看到。
- 生成脚本保留全部 Sheet、行、列、空白分隔行、合并单元格、字体、配色、边框和列宽，并根据原格式显示数字、百分比和日期；浏览器缺少原字体时使用系统替代字体。为保证文字完整，网页会在需要时自然换行、增高行高。
- 含公式的新文件请先在 Excel 中重新计算并保存；生成器读取 Excel 保存的计算结果。没有保存结果时会停止生成并指出对应单元格，不会编造数值或静默丢失公式内容。它不会修改原始工作簿。

本地重新生成：首次安装 `pnpm install` 和 `python3 -m pip install -r requirements.txt`，之后运行 `pnpm run build`（也可用 `npm run build`）。如果 Python 不在默认路径，设置 `PORTFOLIO_PYTHON` 为 Python 3 的完整路径。

构建失败时保留上一版网页；在 Actions 修复错误并重新运行即可。若仓库禁止 Actions 写入，请在仓库设置中允许该工作流的读写权限，然后重新运行，不需要把访问令牌写进代码。

## 同步发布目录

当前本地托管配置指向 `dist`。`npm run build` 会先根据 Excel 重新生成首页 Performance 表格，再将页面、项目图片和原始文档同步到 `dist`。源文件与 `dist` 一起提交；构建不会更改域名或部署设置。

## 替换作品图片

1. 在项目根目录创建 `images` 文件夹。
2. 将你的封面、投放素材或过程截图放入其中，例如 `images/project-01.jpg`。
3. 打开 `src/content.js`，把对应项目的首页 `image` 改成 `./images/project-01.jpg`，并更新 `imageAlt`。
4. 同一项目的 `detail.images` 中添加详情页图片，例如：

```js
images: [
  { src: "../images/project-01-cover.jpg", alt: "封面设计", caption: "封面方向 A" },
  { src: "../images/project-01-process.jpg", alt: "过程截图", caption: "内容迭代记录" }
]
```

每张图会单独按原始比例展示；不会裁切或拼接。图片路径在详情页中从 `projects/` 文件夹开始计算，所以使用 `../images/`。

第一个项目已使用本地作品截图；其余作品当前使用高质量占位图。首页点击项目会进入对应的独立详情页。
