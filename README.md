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
- `works`：五个作品的标题、类别、说明、详情标签和图片

## 替换作品图片

1. 在项目根目录创建 `images` 文件夹。
2. 将你的封面、投放素材或过程截图放入其中，例如 `images/project-01.jpg`。
3. 打开 `src/content.js`，把对应项目的 `image` 改成 `./images/project-01.jpg`，并更新 `imageAlt`。

第一个项目已使用本地作品截图；其余作品当前使用高质量占位图。作品详情弹窗会自动沿用同一张项目图。
