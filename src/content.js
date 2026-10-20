// ───────────────────────────────────────────────────────────────────────────
//  内容总控区：替换姓名、简介、邮箱、社交链接和下方 works 数组，就能更新整个网站。
//  图片：将 image 替换为你的图片路径，例如 "/images/project-01.jpg"。
// ───────────────────────────────────────────────────────────────────────────
export const siteContent = {
  name: "涂奕晴",
  intro: "海外网文编辑 / 内容策划，擅长故事判断、作者培养与爆款内容拆解。",
  location: "上海",
  email: "yiqing22tu@126.com",
  about: "我相信好内容并非偶然发生。它来自对故事、读者与市场之间细微关系的持续观察，也来自愿意陪伴一个作者走过从灵感到作品的漫长过程。",
  background: [
    {
      label: "[NOW]",
      title: "海外网文编辑",
      text: "2025.07—2026.07｜签约、作者培养与商业化跟进；参与 200+ 部作品的创作与推进。"
    },
    {
      label: "[EDITORIAL SIGNAL]",
      title: "内容 × 市场",
      text: "从封面、blurb、tag 到叙事节奏与投放素材，以内容结构回应读者的第一眼判断。"
    },
    {
      label: "[FOUNDATION]",
      title: "文学 × 传播",
      text: "汉语言文学背景、新闻传播学硕士；中文与英文作为工作语言，兼具内容创作与新媒体经验。"
    }
  ],
  socials: [
    { label: "BEHANCE", url: "#", note: "待添加链接" },
    { label: "LINKEDIN", url: "#", note: "待添加链接" },
    { label: "小红书", url: "#", note: "待添加链接" },
    { label: "INSTAGRAM", url: "#", note: "待添加链接" }
  ],
  works: [
    {
      number: "01",
      title: "签约到商业化的内容陪跑",
      category: "编辑作品：签约、培养与商业化跟进",
      description: "从作者筛选、选题判断到创作节奏与商业化节点，为一部类型小说建立完整的成长路线。",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "写满笔记的纸张与钢笔",
      details: ["作者沟通与签约判断", "章节节奏与内容结构反馈", "投放前内容资产梳理"]
    },
    {
      number: "02",
      title: "AI 封面方向实验室",
      category: "AI 辅助封面设计",
      description: "以人物关系、类型氛围与投放场景为线索，探索能在第一眼传递故事承诺的视觉方向。",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "抽象蓝紫色数字艺术画面",
      details: ["视觉关键词拆解", "封面提示词与方向迭代", "封面与 blurb 的叙事一致性"]
    },
    {
      number: "03",
      title: "让读者点开的第一句话",
      category: "Blurb 与投放文案",
      description: "为不同题材提炼高张力的故事入口：明确关系、制造悬念，并留下值得继续读下去的空白。",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "电脑屏幕上的文字编辑界面",
      details: ["故事卖点提炼", "多版本 blurb 测试", "广告素材文案协同"]
    },
    {
      number: "04",
      title: "在纸上建造另一个世界",
      category: "个人文学创作",
      description: "个人写作练习：在叙事的速度与停顿之间，持续寻找人物、情感与语言的精确位置。",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "打开的书籍与暖色书页",
      details: ["短篇与非虚构写作", "人物关系与叙述视角实验", "持续更新中"]
    },
    {
      number: "05",
      title: "让内容找到它的读者",
      category: "新媒体内容与传播",
      description: "从选题、脚本到平台传播，用清晰的内容结构把有价值的信息变成愿意被分享的表达。",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "笔记本电脑与桌面上的写作工具",
      details: ["热点与受众洞察", "选题、脚本与内容生产", "多平台传播节奏设计"]
}
  ],
  services: [
    { index: "01", title: "故事与市场判断", text: "用类型趋势、读者预期与故事钩子，判断一个项目值得被推进的方向。" },
    { index: "02", title: "作者培养与内容编辑", text: "在尊重作者表达的前提下，共同打磨节奏、人物与可持续的创作路径。" },
    { index: "03", title: "包装与传播文案", text: "将故事转译成封面方向、blurb、tag 与投放语言，让它更容易被理解和选择。" },
    { index: "04", title: "内容复盘与策略", text: "回看内容数据与用户反馈，把个案经验沉淀为可复用的下一次判断。" }
  ]
};
