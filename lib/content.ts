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
