// ───────────────────────────────────────────────────────────────────────────
//  内容总控区：替换姓名、简介、邮箱、社交链接和下方 works 数组，就能更新整个网站。
//  图片：将 image 替换为你的图片路径，例如 "/images/project-01.jpg"。
// ───────────────────────────────────────────────────────────────────────────
// 使用全局对象，确保直接双击 index.html（file://）时也能正常加载内容。
window.siteContent = {
  name: "涂奕晴",
  intro: "海外网文编辑 / 创作者运营，完成 200+ 部作品的签约、创作跟进与商业化推进，擅长作者挖掘培养与爆款内容拆解。",
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
  documents: {
    resume: {
      sourcePdf: "./assets/documents/Yiqing_Tu_Resume.pdf",
      // 将 PDF 每一页单独转成图片，按页码顺序添加；不要裁剪或拼接。
      pages: [
        { src: "./images/resume-page-01.webp", alt: "涂奕晴完整个人简历，第 1 页，共 1 页", width: 2481, height: 3508 }
      ]
    },
    performance: {
      // 每次构建从这个原始工作簿生成全部 Sheet 的静态表格。
      file: "./assets/documents/Yiqing_Tu_Performance.xlsx"
    }
  },
  works: [
    {
      number: "01",
      slug: "project-01",
      page: "./projects/project-01.html",
      title: "长篇网文的全链路编辑/运营",
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
        caseStudiesTitle: "文案案例",
        caseStudies: [
          {
            number: "01",
            title: "Scarred Hearts, Twisted Fate",
            summary: "围绕背叛、重逢与女性成长主线，完成 blurb 与三组投放文案方向。",
            metrics: [
              { label: "阅读量", value: "44.2K" },
              { label: "单本利润", value: "超过 US$10K" },
              { label: "文案内容", value: "Blurb + 3 组投放文案" }
            ],
            url: "https://www.anystories.app/book/scarred-hearts-twisted-fate/68647e33b108307b2378ca5d",
            linkLabel: "查看作品页",
            sections: [
              {
                title: "投放文案 01",
                paragraphs: [
                  "\"I don't need you,\" I whispered, and for the first time, I meant it.",
                  "Rex stood before me, offering me the world. Money. Power. His name. He wanted to fix it. He wanted to be a father. He wanted me back in his bed. But he looked at a woman who had walked through fire and come out made of gold. \"You broke me, Rex,\" I said calmly. \"But I rebuilt myself.\" I looked at my mansion, my company, my happy children. \"I have everything I ever wanted. And none of it came from you.\" I closed the door in his face, leaving him in the cold, finally realizing that the best revenge isn't hate. It's indifference."
                ]
              },
              {
                title: "投放文案 02",
                paragraphs: [
                  "She opened the door, and her world shattered.",
                  "Ann stood frozen. The bass of the party thumped downstairs, but in this room, the only sounds were moans and skin slapping against skin. There they were. Rex, the boy who promised to love her forever just days ago. Judith, her best friend, the sister she never had. They were naked. Tangled together. Judith was riding him, head thrown back in ecstasy.",
                  "Rex opened his eyes. He saw Ann. \"Shit! Ann!\" He shoved Judith off, scrambling to cover himself. \"I can explain!\" he begged, chasing her down the street. \"I just wanted a reaction! I wanted to make you jealous!\"",
                  "Ann stopped running. She turned, tears streaming down her face, looking at the man she gave her firsts to. \"You broke me because you wanted a reaction?\" she whispered. \"Congratulations, Rex. You win.\" She walked away into the darkness, leaving him with his lies. He didn't know it was the last time he would see her for six years. And he certainly didn't know she was carrying his twins."
                ]
              },
              {
                title: "投放文案 03",
                paragraphs: [
                  "He stared at the magazine cover, and the air left his lungs—because the little boy staring back had his exact storm-grey eyes.",
                  "Rex Radford hadn’t felt fear in years. Not until this moment. The headline screamed: \"Annie Yin: All About Her Life And Her Twins.\" But it wasn’t the woman that froze his blood; it was the boy. The boy looked like a carbon copy of Rex at age six. The same jawline. The same intense stare. And the girl beside him… she was the spitting image of the woman he had destroyed six years ago.",
                  "\"It can't be,\" he whispered, his hands trembling as they gripped the glossy paper. He had been married to Judith for six years—a cold, barren marriage built on lies and a stillbirth. He thought he had buried the past. He thought Ann McBrown was gone forever, erased from the world after he broke her heart.",
                  "But she wasn’t gone. She was back. She was Annie Yin now—a global fashion mogul, untouchable and radiant. And she had kept a secret that was about to bring the entire Radford empire to its knees.",
                  "\"Did you know?\" Rex’s voice was a low growl as he turned to Judith. \"Did you know she was pregnant when she left?!\" Judith’s face went pale, her glass of wine shaking in her hand. \"Rex, don't be ridiculous. Those children could belong to anyone...\"",
                  "\"Anyone?!\" he roared, slamming the magazine down. \"That boy has my face, Judith! He has my face!\" Rex grabbed his coat. He didn't care about the scandal. He didn't care about his reputation. He was going to find Annie Yin. He was going to find out why she hid his children for six years—and he was going to take back what was his."
                ]
              }
            ],
            images: [
              { src: "../images/scarred-hearts-twisted-fate-overview.png", alt: "Scarred Hearts, Twisted Fate 的 AnyStories 平台页面截图", caption: "平台页面 / Scarred Hearts, Twisted Fate" },
              { src: "../images/scarred-hearts-twisted-fate-blurb.png", alt: "Scarred Hearts, Twisted Fate 的编辑撰写 blurb 截图", caption: "编辑撰写的 Blurb / Scarred Hearts, Twisted Fate" }
            ]
          },
          {
            number: "02",
            title: "The Volkov Legacy",
            summary: "围绕黑手党、秘密孩子与危险重逢的题材承诺，完成 blurb 与三组投放文案方向。",
            metrics: [
              { label: "阅读量", value: "104.4K" },
              { label: "单本利润", value: "超过 US$10K" },
              { label: "文案内容", value: "Blurb + 3 组投放文案" }
            ],
            url: "https://www.anystories.app/book/the-volkov-legacy/68b098388c7d08441837fcaf",
            linkLabel: "查看作品页",
            sections: [
              {
                title: "投放文案 01",
                paragraphs: [
                  "“You can’t go, Maggie. Jamie is a Volkov—and so are you now.”",
                  "The words hit harder than a bullet. I clutched my son as Dominic Volkov closed in. He wasn’t just the man who bent me over a Vegas balcony and fucked me senseless—he was the Bratva boss.",
                  "“This is kidnapping,” I snapped.",
                  "“Call it survival.” His hard body pressed into mine, his erection unmistakable. Whiskey, blood, sex—him. “A war is coming. Leave, you die. Stay…” His fingers grazed my breast, then Jamie’s cheek. “You live by my rules. In my bed.”",
                  "I hated him. But my body remembered exactly who owned it."
                ]
              },
              {
                title: "投放文案 02",
                paragraphs: [
                  "\"I'm not just a member of the mafia, Maggie. I am the Boss.\"",
                  "The words hit her harder than the freezing Russian wind outside. Maggie stared at the man standing in front of her—Dominic Volkov. The man she had spent a passionate weekend with in Las Vegas two years ago, the man she thought was just a charming waiter, was actually the most dangerous man in Moscow.",
                  "She had raised their son, Jamie, in secret, hiding him from the world, until the Italian mafia snatched him from her arms just to get to Dominic. Now, standing in his heavily guarded mansion, surrounded by men with guns who bowed to his every command, she realized the terrifying truth. Her son wasn't just a baby; he was the heir to a criminal empire.",
                  "\"You lied to me,\" she whispered, her voice trembling not with fear, but with fury. \"You let me believe you were no one.\" Dominic took a step closer, his dark eyes burning with a possessiveness that made her knees weak. He wiped a smudge of blood from his cheek—blood that wasn't his. \"I didn't lie. I just didn't tell you that I own this city. And now that I know Jamie exists, you are never leaving my sight again.\"",
                  "He thought he could keep her in a gilded cage? He thought he could claim them just because he killed the men who took Jamie? Maggie looked at the blood on his hands and felt a shiver of horror... and attraction. She had to escape, but how do you run from a man who controls everything?"
                ]
              },
              {
                title: "投放文案 03",
                paragraphs: [
                  "\"I don't care about the rules. I make them.\"",
                  "Dominic Volkov walked into the room, his shirt stained with the blood of his enemies, his eyes dark with a murderous lust. He saw Maggie trying to hide, terrified of the violence he represented.",
                  "\"Come here,\" he commanded, unbuckling his belt. The sound of leather snapping echoed in the silent room.",
                  "\"Dominic, you're bleeding...\" she stammered. \"It's not my blood.\" He grabbed her by the hair, pulling her head back to expose her throat. He licked the pulse point, tasting her fear. \"Killing makes me hard, Maggie. And I need to bury myself inside you to forget what I just did.\"",
                  "He didn't wait for her to agree. He bent her over the table, hiking up her skirt. \"You think I'm a monster? Let me show you what a monster does to what he owns.\" He entered her in one thrust, rough and demanding. Maggie screamed, her nails digging into the wood, as the most powerful man in Russia used her body to cleanse his soul."
                ]
              }
            ],
            images: [
              { src: "../images/the-volkov-legacy-overview.png", alt: "The Volkov Legacy 的 AnyStories 平台页面截图", caption: "平台页面 / The Volkov Legacy" },
              { src: "../images/the-volkov-legacy-blurb.png", alt: "The Volkov Legacy 的编辑撰写 blurb 截图", caption: "编辑撰写的 Blurb / The Volkov Legacy" }
            ]
          }
        ]
      }
    },
    {
      number: "04",
      slug: "project-04",
      page: "./projects/project-04.html",
      title: "让内容成为平台与作者之间的桥梁",
      englishTitle: "Platform Content Operations & Author Engagement",
      category: "平台内容运营 · 英文 FAQ · 征文活动文案",
      description: "围绕海外网络文学平台的作者服务与内容供给需求，参与英文 FAQ 知识内容建设及专题征文活动文案撰写。通过信息结构化、规则说明和创作主题包装，支持平台与作者之间的沟通及内容运营。",
      platform: "NovelSnack",
      details: ["作者服务与英文知识内容", "平台规则说明与信息结构化", "征文活动英文文案"],
      detail: {
        background: "围绕海外网络文学平台的作者服务与内容供给需求，参与英文 FAQ 知识内容建设及专题征文活动文案撰写。",
        roles: ["英文 FAQ 内容撰写与整理", "平台规则与作者服务信息表达", "征文活动英文文案撰写"],
        outcomes: ["支持作者便捷查找规则说明与操作参考", "支持平台与作者之间的日常沟通", "支持主题征文活动的信息传达与作者参与引导"],
        caseStudiesTitle: "EDITORIAL CASE STUDIES",
        caseStudies: [
          {
            number: "01",
            title: "Author FAQ & Knowledge Base",
            summary: "英文 FAQ 与作者知识内容建设",
            sectionsBeforeMedia: true,
            sections: [
              {
                title: "项目背景",
                paragraphs: ["面向海外网络文学作者，平台需要提供清晰的英文信息，帮助作者理解签约流程、作品管理、支付相关规则和常见操作问题。"]
              },
              {
                title: "我的工作",
                items: ["负责英文 FAQ 内容撰写与整理", "围绕创作者常见问题组织知识内容", "将平台规则转化为容易理解的英文说明", "优化内容表达的清晰度与可读性"]
              },
              {
                title: "项目价值",
                paragraphs: ["通过结构化的 FAQ 内容，为创作者提供便于查找的规则说明与操作指引，支持平台作者服务与日常沟通。"]
              }
            ],
            images: [],
            url: "https://www.novelsnack.com/faq",
            linkLabel: "VIEW FAQ"
          },
          {
            number: "02",
            title: "Suspense Customize Story Contest",
            summary: "悬疑题材定制征文活动 · NovelSnack · 2025.10.15–2026.01.31",
            sectionsBeforeMedia: true,
            sections: [
              {
                title: "项目背景",
                paragraphs: ["面向英文网络文学作者的悬疑题材征文活动，需要通过清晰、有吸引力的英文宣传内容传达征文主题和参与信息。"]
              },
              {
                title: "我的工作",
                items: ["参与征文活动英文文案撰写", "梳理并表达活动主题与参与信息", "结合悬疑题材特点组织宣传内容", "支持平台的作者招募与活动传播"]
              },
              {
                title: "项目价值",
                paragraphs: ["将题材策划与运营需求转化为面向作者的活动传播内容，支持平台主题征文活动的信息传达与作者参与引导。"]
              }
            ],
            images: [],
            url: "https://www.novelsnack.com/viewsworkspace/68ef85ae7c4752d6b97eff45",
            linkLabel: "VIEW CAMPAIGN"
          }
        ]
      }
    }
  ],
  services: [
    { index: "01", title: "故事与市场判断", text: "追踪海外小说市场、题材趋势与爆款案例，结合读者预期和故事钩子，判断项目的签约与推进方向。" },
    { index: "02", title: "作者挖掘、签约与培养", text: "挖掘并签约优质、英语母语及头部创作者；从沟通协作到创作周期管理，建立可持续的内容产出路径。" },
    { index: "03", title: "内容包装与投放文案", text: "统筹封面、blurb、tag、叙事节奏与投放素材，把故事的核心承诺转译为更清晰的点击与转化语言。" },
    { index: "04", title: "数据复盘与商业化推进", text: "使用数据反馈优化内容与推广动作，沉淀可复制的创作者培养、内容生产与商业化推进方法。" }
  ]
};
