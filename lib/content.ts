export type Locale = "zh" | "en";

export const locales: Locale[] = ["zh", "en"];

export const contactEmail = "hello@fdeopc.xyz";

export const content = {
  zh: {
    lang: "zh-CN",
    meta: {
      title: "FDE OPC | AI 工作流与业务 Demo 工作室",
      description:
        "FDE OPC 为全球中小企业搭建可运行的 AI 工具、业务 Demo 和自动化工作流，帮助制造业、跨境电商和服务团队落地 AI 应用。",
      keywords: [
        "AI FDE",
        "AI 工作流",
        "AI Agent",
        "中小企业 AI 转型",
        "业务 Demo",
        "自动化工作流",
        "企业 AI 应用",
      ],
    },
    nav: {
      scenarios: "场景",
      cases: "案例",
      services: "流程",
      team: "团队",
      audiences: "目标用户",
      contact: "联系",
      switch: "EN",
      switchHref: "/en",
    },
    hero: {
      eyebrow: "AI FDE Studio for SMBs",
      title: "FDE OPC：为全球中小企业打造可运行的 AI 工作流",
      subtitle:
        "我们帮助中小企业找到真实业务中的高频痛点，用大模型、AI Agent 和自动化工具，快速搭建内部工具、业务 Demo 和自动化流程。",
      primaryCta: "预约一次 AI 场景诊断",
      secondaryCta: "查看可落地场景",
      statOne: "1-3 个",
      statOneLabel: "优先切入场景",
      statTwo: "短周期",
      statTwoLabel: "Demo 共创验证",
      statThree: "全球",
      statThreeLabel: "中小企业服务",
    },
    intro: {
      title: "不是泛泛的 AI 培训，而是一起做出能跑的业务工具",
      body:
        "我们和团队一起梳理真实业务流程，找到高频痛点，用大模型、AI Agent 和自动化工具快速做出可落地的解决方案。",
    },
    scenariosTitle: "可落地场景",
    scenariosSubtitle:
      "从数据分析、客户运营到内部知识库，把重复工作沉淀成可以持续运行的流程。",
    scenarios: [
      "制造业库存分析",
      "跨境电商评论分析与选品辅助",
      "销售线索整理与客户分层",
      "报价、订单和采购辅助",
      "客户资料分析与 CRM 自动化",
      "内部知识库问答",
      "会议纪要、日报、周报自动生成",
      "内容营销选题、生成和发布流程",
      "多语言客服与邮件自动回复",
      "运营数据看板",
      "SOP、招聘和培训流程自动化",
      "小型业务系统 / 内部工具快速开发",
    ],
    casesTitle: "典型案例",
    casesSubtitle:
      "从私有化商业智能、多智能体协作到农业控制系统，把复杂业务落成可运行的 AI 产品。",
    casesEyebrow: "Selected Work",
    casesPage: {
      title: "代表案例",
      subtitle: "看看我们如何把混乱流程，重组为真正能跑的业务系统。",
      home: "首页",
      back: "返回案例",
      viewAll: "查看全部案例",
      viewCase: "查看案例",
      moreCases: "更多案例",
      overview: "项目概览",
      process: "交付路径",
      outcome: "结果",
      contactTitle: "也想把一个流程做成可运行系统？",
      contactBody:
        "带着一个真实业务问题来，我们会一起判断它是否适合做成 AI 工具、业务 Demo 或自动化工作流。",
      contactCta: "预约 AI 场景诊断",
    },
    casesFlow: {
      input: "业务数据",
      model: "AI 模型与 Agent",
      workflow: "自动化工作流",
      output: "可运行系统",
    },
    casesLabels: {
      challenge: "挑战",
      solution: "方案",
      effect: "效果",
    },
    cases: [
      {
        slug: "abos-business-intelligence",
        image: "/images/cases/abos-bi.png",
        imageAlt: "私有化商业智能 AI 系统的抽象数据工作台",
        tag: "Private BI",
        title: "埃博司商业模型智能系统",
        summary:
          "帮助企业用文字快速创建、使用私有化商业智能 AI 模型，接入内部工具，并通过自动关注更新保持模型能力领先。",
        challenge:
          "企业希望获得私有化、业务友好、无需编码的 AI 模型创建体验。",
        solution:
          "用提示驱动方法简化模型创建流程，把业务知识、模型调用和内部工具访问整合到一个可操作系统中。",
        effect: "5 分钟建立私有化商业智能 AI",
        metrics: ["完全私有化", "无需编码", "自动更新"],
        process: ["梳理企业商业模型与内部知识", "设计提示驱动的模型创建流程", "接入内部工具与自动更新机制"],
        outcome:
          "企业可以用自然语言创建和调用私有 AI 模型，把原本依赖技术人员的模型配置流程，压缩为业务团队可直接操作的系统。",
      },
      {
        slug: "ai-companyos",
        image: "/images/cases/companyos.png",
        imageAlt: "多智能体协作平台的抽象工作流界面",
        tag: "Multi-Agent OS",
        title: "AI CompanyOS",
        summary:
          "一人公司启动器，让用户一键构建多智能体协作平台，帮助个人和中小企业在大模型时代完成 AI 转型。",
        challenge:
          "个人和小团队缺少可以直接启动的 AI 协作底座。",
        solution:
          "把任务拆解、角色分工、资料整理和执行流程组织成多智能体协作平台。",
        effect: "一键启动多智能体协作平台",
        metrics: ["一人公司", "Agent 协作", "AI 转型"],
        process: ["抽象一人公司的高频工作流", "设计多 Agent 角色与协作规则", "沉淀可复用的任务启动器与系统模板"],
        outcome:
          "个人和小团队可以快速启动资料整理、项目管理、内容生产和执行协作，让 AI 成为可持续运转的公司操作系统。",
      },
      {
        slug: "nexthuman-longevity",
        image: "/images/cases/nexthuman.png",
        imageAlt: "AI 长寿研究平台分析健康报告和论文的抽象场景",
        tag: "Longevity AI",
        title: "NextHuman 人类长寿研究院",
        summary:
          "整合前沿长寿方案和顶尖论文，通过 AI 深度分析检测报告中的身体数据，生成个性化健康生活方式建议。",
        challenge:
          "长寿研究、检测数据和个体执行建议之间存在理解和转化成本。",
        solution:
          "用 AI 汇总研究资料、解析检测报告，并把身体数据转化为个性化生活方式方案。",
        effect: "从报告数据到个性化健康建议",
        metrics: ["论文整合", "报告分析", "个性化方案"],
        process: ["整合前沿长寿论文与方案", "解析检测报告中的关键身体数据", "生成个性化生活方式建议"],
        outcome:
          "用户可以从复杂检测数据和研究材料中获得更清晰的健康行动建议，让专业知识转化为可执行的日常方案。",
      },
      {
        slug: "ai-agriculture-planting",
        image: "/images/cases/agriculture-ai.png",
        imageAlt: "人工智能农业种植系统监测植物生长状态的抽象场景",
        tag: "AgriTech AI",
        title: "人工智能农业种植系统",
        summary:
          "采集植物生长数据，自动评测生长状态，提供种植参数调整建议，并通过自反馈迭代持续改进。",
        challenge:
          "种植参数调整依赖经验，难以持续吸收实时生长数据。",
        solution:
          "建立数据采集、状态评测、参数推荐和反馈迭代闭环，让系统持续优化种植策略。",
        effect: "植物生长状态自动评测与参数优化",
        metrics: ["数据采集", "参数推荐", "自反馈迭代"],
        process: ["采集植物生长与环境数据", "评测生长状态并识别异常", "推荐种植参数并通过反馈迭代优化"],
        outcome:
          "系统把经验驱动的种植调整变成数据驱动的闭环，让种植参数可以持续根据植物状态进行优化。",
      },
    ],
    servicesTitle: "合作方式",
    servicesSubtitle: "不做大而全的转型方案，只从一个真实流程开始。",
    services: [
      {
        title: "AI 场景诊断",
        body:
          "适合还不知道从哪里开始的中小企业。我们帮助梳理业务流程，找出最适合 AI 介入的 1-3 个高频场景。",
      },
      {
        title: "业务 Demo 共创",
        body:
          "围绕一个具体业务问题，在短周期内做出可运行 Demo，用结果判断是否继续投入。",
      },
      {
        title: "AI 工作流搭建",
        body:
          "把企业日常重复工作接入大模型、AI Agent 和自动化工具，形成可持续运行的内部流程。",
      },
      {
        title: "长期 AI FDE 合作",
        body:
          "以远程或阶段性驻场方式，持续参与企业 AI 应用建设、工具选型、流程改造和内部团队培训。",
      },
    ],
    teamTitle: "专家团队",
    teamSubtitle:
      "你将直接与真正做过生产系统、企业交付和 AI 工具创业的实践者一起工作。",
    teamImageAlt: "两位 AI FDE 实践者协作搭建数据、Agent 和自动化工作流的抽象插画",
    team: [
      {
        specialty: "Production AI Systems",
        name: "0xShadowfly",
        role: "数据工程师 · AI 系统落地专家",
        summary:
          "自 2018 年起从事人工智能在生产环境中的部署与应用，长期参与农业、政务和企业 AI 系统建设。",
        points: [
          "参与苏州、上海浦东人工智能农业实验室建设，构建数据中台与气雾栽培控制系统。",
          "参与通辽智慧牧草种植工厂种植系统搭建，并申请多项人工智能相关专利。",
          "服务超过 50 家中小企业和一人企业，交付 AI 客服、数字人、营销系统和私有模型训练部署。",
        ],
      },
      {
        specialty: "AI FDE & Product Prototyping",
        name: "Tao",
        role: "连续创业者 · 独立开发者 · AI FDE 实践者",
        summary:
          "长期参与互联网产品、跨境电商、Web3 与 AI 工具创业实践，擅长把真实业务需求转化为产品原型和自动化流程。",
        points: [
          "专注企业端 AI 应用落地，连接大模型、AI Agent 与中小企业高频业务场景。",
          "深度使用多 Agent 工作流完成信息整理、项目管理、内容生产、数据分析和代码开发。",
          "持续探索一人公司、远程协作和 AI 驱动的新型生产方式，推动 FDE OPC 的方法沉淀。",
        ],
      },
    ],
    audiencesTitle: "目标用户",
    audiences: [
      "全球中小企业主",
      "制造业企业 / 工厂 / 供应链公司",
      "跨境电商团队",
      "本地服务业团队",
      "咨询、教育、培训、营销服务公司",
      "内容营销和增长团队",
      "想用 AI 提升效率的小型软件团队",
      "园区、孵化器、产业服务机构",
    ],
    contact: {
      title: "带着一个真实流程，开始一次 AI 场景诊断",
      body:
        "告诉我们一个反复消耗时间的业务环节，我们会一起判断它是否适合用 AI 工具、Agent 或自动化流程解决。",
      cta: "发送邮件预约",
    },
  },
  en: {
    lang: "en",
    meta: {
      title: "FDE OPC | AI Workflow Studio for Global SMBs",
      description:
        "FDE OPC builds working AI tools, business demos, and automation workflows for global SMBs across manufacturing, ecommerce, services, and software teams.",
      keywords: [
        "AI FDE",
        "AI workflow studio",
        "AI agents for SMBs",
        "business demo development",
        "workflow automation",
        "enterprise AI implementation",
        "SMB AI transformation",
      ],
    },
    nav: {
      scenarios: "Scenarios",
      cases: "Cases",
      services: "Process",
      team: "Team",
      audiences: "Who We Help",
      contact: "Contact",
      switch: "中文",
      switchHref: "/zh",
    },
    hero: {
      eyebrow: "AI FDE Studio for SMBs",
      title: "FDE OPC builds working AI workflows for global SMBs",
      subtitle:
        "We help small and midsize teams find frequent pain points in real operations, then use LLMs, AI agents, and automation tools to build internal tools, business demos, and repeatable workflows fast.",
      primaryCta: "Book an AI Scenario Diagnosis",
      secondaryCta: "Explore Practical Scenarios",
      statOne: "1-3",
      statOneLabel: "priority scenarios",
      statTwo: "Fast",
      statTwoLabel: "demo validation",
      statThree: "Global",
      statThreeLabel: "SMB focused",
    },
    intro: {
      title: "We do not stop at AI training. We build tools that run.",
      body:
        "FDE OPC works with teams to map real business processes, locate recurring pain points, and ship practical solutions with LLMs, AI agents, and automation tools.",
    },
    scenariosTitle: "Practical Scenarios",
    scenariosSubtitle:
      "From operations data to customer workflows, repetitive work becomes a process your team can keep running.",
    scenarios: [
      "Manufacturing inventory analysis",
      "Cross-border ecommerce review analysis and product research",
      "Sales lead cleanup and customer segmentation",
      "Quotation, order, and purchasing assistance",
      "Customer data analysis and CRM automation",
      "Internal knowledge base Q&A",
      "Meeting notes, daily reports, and weekly reports",
      "Content marketing ideation, generation, and publishing",
      "Multilingual support and email auto-replies",
      "Operations dashboards",
      "SOP, hiring, and training workflow automation",
      "Small business systems and internal tools",
    ],
    casesTitle: "Case Studies",
    casesSubtitle:
      "From private business intelligence and multi-agent collaboration to smart agriculture control systems, complex operations become working AI products.",
    casesEyebrow: "Selected Work",
    casesPage: {
      title: "Representative Cases",
      subtitle: "See how messy workflows become business systems that actually run.",
      home: "Home",
      back: "Back to Cases",
      viewAll: "View All Cases",
      viewCase: "View Case",
      moreCases: "More Case Studies",
      overview: "Overview",
      process: "Delivery Path",
      outcome: "Outcome",
      contactTitle: "Want to turn one workflow into a working system?",
      contactBody:
        "Bring one real business problem. We will assess whether it should become an AI tool, business demo, or automation workflow.",
      contactCta: "Book an AI Scenario Diagnosis",
    },
    casesFlow: {
      input: "Business Data",
      model: "AI Models & Agents",
      workflow: "Automation Workflow",
      output: "Working System",
    },
    casesLabels: {
      challenge: "Challenge",
      solution: "Solution",
      effect: "Effect",
    },
    cases: [
      {
        slug: "abos-business-intelligence",
        image: "/images/cases/abos-bi.png",
        imageAlt: "Abstract data workstation for a private business intelligence AI system",
        tag: "Private BI",
        title: "ABOS Business Model Intelligence System",
        summary:
          "Helps companies create and use private business intelligence AI models through plain-language prompts, connect internal tools, and stay current through automatic updates.",
        challenge:
          "Businesses need a private, business-friendly AI model workflow that does not require coding expertise.",
        solution:
          "A prompt-driven model creation flow connects business knowledge, model execution, and internal AI tool access in one usable system.",
        effect: "Build a private business intelligence AI in 5 minutes",
        metrics: ["Private deployment", "No-code model creation", "Automatic updates"],
        process: ["Map business models and internal knowledge", "Design a prompt-driven model creation flow", "Connect internal tools and automatic update loops"],
        outcome:
          "Business teams can create and operate private AI models with natural language, turning a technical configuration workflow into a usable internal system.",
      },
      {
        slug: "ai-companyos",
        image: "/images/cases/companyos.png",
        imageAlt: "Abstract multi-agent collaboration platform workflow interface",
        tag: "Multi-Agent OS",
        title: "AI CompanyOS",
        summary:
          "A solo-company launcher that lets users create a multi-agent collaboration platform in one step, helping individuals and SMBs complete AI transformation.",
        challenge:
          "Solo operators and small teams need an AI-native operating base they can start using immediately.",
        solution:
          "Task decomposition, agent roles, knowledge organization, and execution workflows are bundled into a multi-agent collaboration platform.",
        effect: "Launch a multi-agent collaboration platform in one step",
        metrics: ["Solo company", "Agent collaboration", "AI transformation"],
        process: ["Abstract high-frequency solo-company workflows", "Design agent roles and collaboration rules", "Package reusable launchers and system templates"],
        outcome:
          "Individuals and small teams can start research, project management, content production, and execution workflows with AI as an operating system.",
      },
      {
        slug: "nexthuman-longevity",
        image: "/images/cases/nexthuman.png",
        imageAlt: "Abstract AI longevity research platform analyzing health reports and papers",
        tag: "Longevity AI",
        title: "NextHuman Longevity Research Institute",
        summary:
          "Integrates frontier longevity protocols and top research papers, then uses AI to analyze health report data and create personalized lifestyle plans.",
        challenge:
          "Research papers, health data, and practical personal recommendations are hard to connect.",
        solution:
          "AI summarizes research, interprets health reports, and converts body data into individualized lifestyle guidance.",
        effect: "From health reports to personalized longevity plans",
        metrics: ["Research synthesis", "Report analysis", "Personalized plans"],
        process: ["Integrate frontier longevity research and protocols", "Parse key body data from health reports", "Generate personalized lifestyle recommendations"],
        outcome:
          "Users receive clearer health action plans from complex reports and research materials, turning expert knowledge into practical daily guidance.",
      },
      {
        slug: "ai-agriculture-planting",
        image: "/images/cases/agriculture-ai.png",
        imageAlt: "Abstract AI agriculture planting system monitoring plant growth status",
        tag: "AgriTech AI",
        title: "AI Agriculture Planting System",
        summary:
          "Collects plant growth data, evaluates growth status automatically, recommends optimal planting parameter adjustments, and improves through feedback loops.",
        challenge:
          "Planting parameter tuning depends on experience and struggles to absorb real-time growth data continuously.",
        solution:
          "A closed loop of data collection, growth evaluation, parameter recommendation, and feedback iteration continuously improves planting strategy.",
        effect: "Automatic growth evaluation and parameter optimization",
        metrics: ["Data collection", "Parameter recommendation", "Feedback loop"],
        process: ["Collect plant growth and environmental data", "Evaluate growth status and detect anomalies", "Recommend planting parameters and improve through feedback"],
        outcome:
          "The system turns experience-led planting adjustments into a data-driven loop that continuously optimizes parameters based on plant status.",
      },
    ],
    servicesTitle: "How we work",
    servicesSubtitle:
      "No broad transformation deck. Start with one real workflow.",
    services: [
      {
        title: "AI Scenario Diagnosis",
        body:
          "For SMBs that are unsure where to begin. We map business processes and identify 1-3 high-frequency scenarios where AI can create practical leverage.",
      },
      {
        title: "Business Demo Co-Creation",
        body:
          "We focus on one concrete business problem and build a working demo in a short cycle, so the team can judge the value before scaling investment.",
      },
      {
        title: "AI Workflow Buildout",
        body:
          "We connect repetitive daily work to LLMs, AI agents, and automation tools, creating internal processes that can run consistently.",
      },
      {
        title: "Long-Term AI FDE Partnership",
        body:
          "Through remote collaboration or staged on-site work, we support AI application delivery, tool selection, process redesign, and internal team training.",
      },
    ],
    teamTitle: "Expert Team",
    teamSubtitle:
      "You work directly with practitioners who have shipped production systems, SMB AI delivery, and AI-native product workflows.",
    teamImageAlt: "Abstract illustration of two AI FDE practitioners building data, agent, and automation workflows",
    team: [
      {
        specialty: "Production AI Systems",
        name: "0xShadowfly",
        role: "Data Engineer · AI Systems Delivery Expert",
        summary:
          "Since 2018, 0xShadowfly has deployed and applied AI in production environments across agriculture, government, and SMB systems.",
        points: [
          "Helped build AI agriculture labs in Suzhou and Shanghai Pudong, including data platforms and aeroponic cultivation control systems.",
          "Contributed to the Tongliao smart forage planting factory system and filed multiple AI-related patents.",
          "Supported 50+ SMBs and solo companies with AI support systems, digital humans, marketing systems, and private model training and deployment.",
        ],
      },
      {
        specialty: "AI FDE & Product Prototyping",
        name: "Tao",
        role: "Serial Founder · Indie Developer · AI FDE Practitioner",
        summary:
          "Tao works across internet products, cross-border ecommerce, Web3, and AI tooling, turning real business needs into prototypes and automation workflows.",
        points: [
          "Focuses on enterprise AI adoption by connecting LLMs and AI agents to concrete SMB workflows.",
          "Uses multi-agent workflows for research, project management, content production, data analysis, and software development.",
          "Explores solo-company systems, remote collaboration, and AI-driven production methods through FDE OPC.",
        ],
      },
    ],
    audiencesTitle: "Who We Help",
    audiences: [
      "Global SMB owners",
      "Manufacturers, factories, and supply chain companies",
      "Cross-border ecommerce teams",
      "Local service businesses",
      "Consulting, education, training, and marketing firms",
      "Content marketing and growth teams",
      "Small software teams improving efficiency with AI",
      "Industrial parks, incubators, and business service organizations",
    ],
    contact: {
      title: "Bring one real workflow to an AI scenario diagnosis",
      body:
        "Tell us one workflow that repeatedly consumes time. We will assess whether it can be improved with AI tools, agents, or automation.",
      cta: "Email us to book",
    },
  },
} satisfies Record<Locale, {
  lang: string;
  meta: { title: string; description: string; keywords: string[] };
  nav: {
    scenarios: string;
    services: string;
    team: string;
    audiences: string;
    contact: string;
    switch: string;
    switchHref: string;
    cases: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    statOne: string;
    statOneLabel: string;
    statTwo: string;
    statTwoLabel: string;
    statThree: string;
    statThreeLabel: string;
  };
  intro: { title: string; body: string };
  scenariosTitle: string;
  scenariosSubtitle: string;
  scenarios: string[];
  casesTitle: string;
  casesSubtitle: string;
  casesEyebrow: string;
  casesPage: {
    title: string;
    subtitle: string;
    home: string;
    back: string;
    viewAll: string;
    viewCase: string;
    moreCases: string;
    overview: string;
    process: string;
    outcome: string;
    contactTitle: string;
    contactBody: string;
    contactCta: string;
  };
  casesFlow: {
    input: string;
    model: string;
    workflow: string;
    output: string;
  };
  casesLabels: {
    challenge: string;
    solution: string;
    effect: string;
  };
  cases: {
    slug: string;
    image: string;
    imageAlt: string;
    tag: string;
    title: string;
    summary: string;
    challenge: string;
    solution: string;
    effect: string;
    metrics: string[];
    process: string[];
    outcome: string;
  }[];
  servicesTitle: string;
  servicesSubtitle: string;
  services: { title: string; body: string }[];
  teamTitle: string;
  teamSubtitle: string;
  teamImageAlt: string;
  team: {
    specialty: string;
    name: string;
    role: string;
    summary: string;
    points: string[];
  }[];
  audiencesTitle: string;
  audiences: string[];
  contact: { title: string; body: string; cta: string };
}>;
