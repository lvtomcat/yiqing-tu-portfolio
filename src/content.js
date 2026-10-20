// ───────────────────────────────────────────────────────────────────────────
//  内容总控区：替换姓名、简介、邮箱、社交链接和下方 works 数组，就能更新整个网站。
//  图片：将 image 替换为你的图片路径，例如 "/images/project-01.jpg"。
// ───────────────────────────────────────────────────────────────────────────
// 使用全局对象，确保直接双击 index.html（file://）时也能正常加载内容。
window.siteContent = {
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
      slug: "project-01",
      page: "./projects/project-01.html",
      title: "长篇网文的全链路编辑",
      category: "编辑作品：签约、培养与商业化跟进",
      description: "从作品判断、签约与作者协作，到内容包装和商业化推进；《The CEO Above My Desk》是其中一部完整跟进的成果案例。",
      image: "./images/the-ceo-above-my-desk-ranking.jpg",
      imageAlt: "AnyStories 平台上 The CEO Above My Desk 的 660 万阅读展示截图",
      details: ["案例：《The CEO Above My Desk》", "6.6M 阅读量", "单本利润突破 US$2M", "234 章 · 已完结", "签约 · 内容跟进 · 商业化推进"],
      url: "https://www.anystories.app/book/the-ceo-above-my-desk/695cadd8aa733e88f9958e41",
      linkLabel: "查看作品页",
      detail: {
        background: "以办公室浪漫题材为核心，围绕故事判断、作者协作、内容包装与商业化推进持续跟进。",
        roles: ["作品判断与签约推进", "作者沟通、创作节奏与内容跟进", "封面、blurb、tag 与投放素材协同"],
        process: ["梳理题材承诺、人物关系与读者预期", "结合内容与数据反馈迭代叙事节奏和包装表达", "推进作品从创作、上线到商业化阶段的协作"],
        outcomes: ["6.6M 阅读量", "单本利润突破 US$2M", "234 章，已完结"],
        caseStudies: [
          {
            number: "01",
            title: "The CEO Above My Desk",
            summary: "从作品判断、签约与作者协作，到内容包装和商业化推进的完整跟进案例。",
            metrics: [
              { label: "阅读量", value: "6.6M" },
              { label: "单本利润", value: "突破 US$2M" },
              { label: "作品状态", value: "234 章 · 已完结" }
            ],
            url: "https://www.anystories.app/book/the-ceo-above-my-desk/695cadd8aa733e88f9958e41",
            linkLabel: "查看作品页",
            images: [
              { src: "../images/the-ceo-above-my-desk-ranking.jpg", alt: "AnyStories 平台上 The CEO Above My Desk 的 660 万阅读展示截图", caption: "作品在 AnyStories 平台的阅读量展示。" }
            ]
          },
          {
            number: "02",
            title: "Married to the Billionaire Who Betrayed Me",
            summary: "围绕都市情感与背叛反转题材进行内容跟进与商业化推进。",
            metrics: [
              { label: "阅读量", value: "313.6K" },
              { label: "单本利润", value: "超过 US$50K" },
              { label: "作品状态", value: "263 章 · 连载中" }
            ],
            url: "https://www.anystories.app/book/married-to-the-billionaire-who-betrayed-me/69723af9402ac1da5c43c40f",
            linkLabel: "查看作品页",
            images: [
              { src: "../images/married-to-the-billionaire-who-betrayed-me.png", alt: "AnyStories 平台上 Married to the Billionaire Who Betrayed Me 的作品页面截图", caption: "作品在 AnyStories 平台的阅读量展示。" }
            ]
          },
          {
            number: "03",
            title: "The Evil Alpha Marked Me",
            summary: "面向狼人奇幻题材的故事判断、作者协作与商业化跟进案例。",
            metrics: [
              { label: "阅读量", value: "195.6K" },
              { label: "单本利润", value: "超过 US$30K" },
              { label: "作品状态", value: "179 章 · 已完结" }
            ],
            url: "https://www.anystories.app/book/the-evil-alpha-marked-me/6863b47ee07e05a1778caf75",
            linkLabel: "查看作品页",
            images: [
              { src: "../images/the-evil-alpha-marked-me.png", alt: "AnyStories 平台上 The Evil Alpha Marked Me 的作品页面截图", caption: "作品在 AnyStories 平台的阅读量展示。" }
            ]
          }
        ]
      }
    },
    {
      number: "02",
      slug: "project-02",
      page: "./projects/project-02.html",
      title: "AI 封面方向实验室",
      category: "AI 辅助封面设计",
      description: "以人物关系、类型氛围与投放场景为线索，探索能在第一眼传递故事承诺的视觉方向。",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "抽象蓝紫色数字艺术画面",
      details: ["视觉关键词拆解", "封面提示词与方向迭代", "封面与 blurb 的叙事一致性"],
      detail: {
        background: "将故事关系、类型氛围与投放场景转译为清晰的封面方向，帮助读者在第一眼理解作品的叙事承诺。",
        roles: ["视觉关键词与人物关系拆解", "AI 辅助封面方向探索", "封面与 blurb 的叙事一致性校对"],
        process: ["提炼题材、人物与情绪关键词", "生成并比较不同视觉方向", "根据投放场景筛选与迭代"],
        galleryTitle: "自制封面展示",
        images: [
          { src: "../images/cover-the-bet.jpg", alt: "The Bet He Wasn't Supposed To Win 自制封面", caption: "自制封面 / The Bet He Wasn't Supposed To Win" },
          { src: "../images/cover-the-ceo-above-my-desk.jpg", alt: "The CEO Above My Desk 自制封面", caption: "自制封面 / The CEO Above My Desk" },
          { src: "../images/cover-the-vampires-obsession.png", alt: "The Vampire's Obsession 自制封面", caption: "自制封面 / The Vampire's Obsession" }
        ]
      }
    },
    {
      number: "03",
      slug: "project-03",
      page: "./projects/project-03.html",
      title: "让读者点开的第一句话",
      category: "Blurb 与投放文案",
      description: "从故事卖点、人物关系到投放场景，撰写并迭代 blurb、tag 与广告文案；配合数据反馈优化点击与转化表现。",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "电脑屏幕上的文字编辑界面",
      details: ["故事卖点与读者钩子提炼", "blurb、tag 与投放文案迭代", "封面、内容与素材协同"],
      detail: {
        background: "为不同题材找到更准确的故事入口，把人物关系、冲突与悬念转化为可被快速理解的文字表达。",
        roles: ["故事卖点与读者钩子提炼", "blurb、tag 与广告文案撰写", "封面、内容与投放素材协同"],
        process: ["拆解题材期待与核心冲突", "形成多版本文字方向", "结合数据与反馈持续优化"],
        images: [
          { src: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85", alt: "电脑屏幕上的文字编辑界面", caption: "可替换为 blurb、投放文案或素材迭代截图。" }
        ]
      }
    },
    {
      number: "04",
      slug: "project-04",
      page: "./projects/project-04.html",
      title: "在纸上建造另一个世界",
      category: "个人文学创作",
      description: "个人写作练习：在叙事的速度与停顿之间，持续寻找人物、情感与语言的精确位置。",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "打开的书籍与暖色书页",
      details: ["短篇与非虚构写作", "人物关系与叙述视角实验", "持续更新中"],
      detail: {
        background: "持续进行个人文学创作，在人物、情感与语言之间寻找更精确的叙事位置。",
        roles: ["短篇与非虚构写作", "人物关系与叙述视角实验", "文本修订与长期创作练习"],
        images: [
          { src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=85", alt: "打开的书籍与暖色书页", caption: "可替换为已公开的作品节选、书页或阅读活动素材。" }
        ]
      }
    },
    {
      number: "05",
      slug: "project-05",
      page: "./projects/project-05.html",
      title: "让内容找到它的读者",
      category: "新媒体内容与传播",
      description: "覆盖电视栏目与个人账号运营：从热点判断、选题与脚本，到平台传播与活动运营，让内容获得更明确的传播反馈。",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "笔记本电脑与桌面上的写作工具",
      details: ["小红书账号：1,200+ 粉丝 · 20,000+ 获赞 · 单篇 70,000+ 阅读", "电视栏目：合作学校 70+ 所 · 覆盖师生近 100,000 人", "选题、脚本、视频制作与活动运营"],
      detail: {
        background: "覆盖电视栏目与个人账号运营，以选题、脚本、内容生产和活动运营为路径，持续验证内容传播效果。",
        roles: ["热点与受众洞察", "选题、脚本与内容生产", "活动运营与平台传播节奏设计"],
        outcomes: ["小红书账号：1,200+ 粉丝、20,000+ 获赞、单篇 70,000+ 阅读", "电视栏目：合作学校 70+ 所，覆盖师生近 100,000 人"],
        images: [
          { src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85", alt: "笔记本电脑与桌面上的写作工具", caption: "可替换为账号后台、内容成片、活动现场或传播数据截图。" }
        ]
      }
    }
  ],
  services: [
    { index: "01", title: "故事与市场判断", text: "追踪海外小说市场、题材趋势与爆款案例，结合读者预期和故事钩子，判断项目的签约与推进方向。" },
    { index: "02", title: "作者挖掘、签约与培养", text: "挖掘并签约优质、母语及头部作者；从沟通协作到创作周期管理，建立可持续的内容产出路径。" },
    { index: "03", title: "内容包装与投放文案", text: "统筹封面、blurb、tag、叙事节奏与投放素材，把故事的核心承诺转译为更清晰的点击与转化语言。" },
    { index: "04", title: "数据复盘与商业化推进", text: "使用数据反馈优化内容与推广动作，沉淀可复制的作者培养、内容生产与商业化推进方法。" }
  ]
};
