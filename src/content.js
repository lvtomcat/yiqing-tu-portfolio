// ───────────────────────────────────────────────────────────────────────────
//  内容总控区：替换姓名、简介、邮箱、社交链接和下方 works 数组，就能更新整个网站。
//  图片：将 image 替换为你的图片路径，例如 "/images/project-01.jpg"。
// ───────────────────────────────────────────────────────────────────────────
export const siteContent = {
  name: "涂奕晴",
  intro: "海外网文编辑 / 内容策划，完成 200+ 部作品的签约、创作跟进与商业化推进，擅长作者挖掘培养与爆款内容拆解。",
  location: "上海",
  email: "yiqing22tu@126.com",
  about: "我把内容判断落在可被验证的结果上：从海外作者挖掘、签约培养，到作品从 0 到 1 的内容优化与商业化推进；始终围绕故事、读者与市场之间的关系，帮助内容更有效地抵达受众。",
  achievements: [
    { value: "200+", label: "作品签约、创作跟进与商业化推进" },
    { value: "10+", label: "S 级作者挖掘与签约" },
    { value: "US$1M+", label: "单本优质书净利润" },
    { value: "10M+", label: "优质书海外阅读量" }
  ],
  background: [
    {
      label: "[NOW]",
      title: "海外网文编辑",
      text: "2025.07—2026.07｜参与 200+ 部作品的签约、创作跟进与商业化推进；挖掘并签约 10+ 位 S 级作者，稳定产出投放书。"
    },
    {
      label: "[EDITORIAL SIGNAL]",
      title: "内容 × 市场",
      text: "从小说内容、封面、blurb、tag 到叙事节奏与投放素材；结合数据反馈优化作品从 0 到 1 的内容与推广表现。"
    },
    {
      label: "[FOUNDATION]",
      title: "文学 × 传播",
      text: "汉语言文学背景、新闻传播学硕士；中英文为工作语言，具备 Excel、SPSS 数据分析与内容可视化能力。"
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
      title: "长篇网文的全链路编辑",
      category: "编辑作品：签约、培养与商业化跟进",
      description: "从作品判断、签约与作者协作，到内容包装和商业化推进；《The CEO Above My Desk》是其中一部完整跟进的成果案例。",
      image: "./images/the-ceo-above-my-desk-ranking.jpg",
      imageAlt: "AnyStories 平台上 The CEO Above My Desk 的 660 万阅读展示截图",
      details: ["案例：《The CEO Above My Desk》", "6.6M 阅读量", "单本利润突破 US$2M", "234 章 · 已完结", "签约 · 内容跟进 · 商业化推进"],
      url: "https://www.anystories.app/book/the-ceo-above-my-desk/695cadd8aa733e88f9958e41",
      linkLabel: "查看作品页"
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
      description: "从故事卖点、人物关系到投放场景，撰写并迭代 blurb、tag 与广告文案；配合数据反馈优化点击与转化表现。",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "电脑屏幕上的文字编辑界面",
      details: ["故事卖点与读者钩子提炼", "blurb、tag 与投放文案迭代", "封面、内容与素材协同"]
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
      description: "覆盖电视栏目与个人账号运营：从热点判断、选题与脚本，到平台传播与活动运营，让内容获得更明确的传播反馈。",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "笔记本电脑与桌面上的写作工具",
      details: ["小红书账号：1,200+ 粉丝 · 20,000+ 获赞 · 单篇 70,000+ 阅读", "电视栏目：合作学校 70+ 所 · 覆盖师生近 100,000 人", "选题、脚本、视频制作与活动运营"]
}
  ],
  services: [
    { index: "01", title: "故事与市场判断", text: "追踪海外小说市场、题材趋势与爆款案例，结合读者预期和故事钩子，判断项目的签约与推进方向。" },
    { index: "02", title: "作者挖掘、签约与培养", text: "挖掘并签约优质、母语及头部作者；从沟通协作到创作周期管理，建立可持续的内容产出路径。" },
    { index: "03", title: "内容包装与投放文案", text: "统筹封面、blurb、tag、叙事节奏与投放素材，把故事的核心承诺转译为更清晰的点击与转化语言。" },
    { index: "04", title: "数据复盘与商业化推进", text: "使用数据反馈优化内容与推广动作，沉淀可复制的作者培养、内容生产与商业化推进方法。" }
  ]
};
