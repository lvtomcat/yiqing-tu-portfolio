# 涂奕晴个人作品集

这是一个无构建依赖的静态网站，可直接打开 `index.html`，也可在项目目录启动本地服务器：

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
- `works`：五个作品的标题、类别、首页卡片和详情页内容

每个作品都包含：

- `page`：独立详情页地址
- `detail.background`：项目背景（没有内容可删掉）
- `detail.roles`、`detail.process`、`detail.outcomes`：职责、过程、成果列表（没有内容可删掉）
- `detail.sections`：可选的自定义内容区块；可填写 `title`、`paragraphs`（多段文字）和 `items`（列表）
- `detail.images`：完整展示图片的数组；每项填写 `src`、`alt` 和可选的 `caption`

详情页文件位于 `projects/project-01.html` 至 `projects/project-05.html`。它们共用 `src/project-detail.js`，因此通常只需要修改 `src/content.js`，无需改页面结构。

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
