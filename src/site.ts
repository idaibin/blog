export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const sections = ['signals', 'prompts', 'skills', 'notes'] as const;
export type SectionKey = (typeof sections)[number];

export const navigationSections: SectionKey[] = ['signals', 'prompts', 'skills', 'notes'];

export const audienceKeys = ['beginner', 'developer', 'ai-practitioner'] as const;
export type AudienceKey = (typeof audienceKeys)[number];

export const collectionMap = {
  en: {
    signals: 'signals',
    prompts: 'prompts',
    skills: 'skills',
    notes: 'notes',
  },
  zh: {
    signals: 'signalsZh',
    prompts: 'promptsZh',
    skills: 'skillsZh',
    notes: 'notesZh',
  },
} as const;

export const sectionMeta = {
  en: {
    signals: {
      title: 'Signals',
      description:
        'High-signal AI updates, signal notes, tool changes, and trend judgments.',
      intro:
        'Signals filters the AI noise into actionable updates for curious readers, engineers, and practitioners.',
      summary:
        'What changed, why it matters, who should care, and whether it is worth trying.',
      action: 'Read signals',
    },
    prompts: {
      title: 'Prompts',
      description:
        'Reusable prompt templates organized by task, output format, and audience.',
      intro:
        'Prompts stores copy-ready templates that can be edited, reused, and expanded.',
      summary:
        'Short, structured, and practical prompt assets.',
      action: 'Copy prompt',
    },
    skills: {
      title: 'Skills',
      description:
        'Agent-style skills, system instructions, and multi-step capability modules.',
      intro:
        'Skills captures the larger operating blocks behind prompts and workflows.',
      summary:
        'Tool-aware, constraint-aware, and designed for repeatable execution.',
      action: 'Inspect skill',
    },
    notes: {
      title: 'Notes',
      description:
        'Long-form notes for Rustzen, architecture, engineering experience, and personal records.',
      intro:
        'Notes holds the evergreen technical writing that still matters outside the AI stream.',
      summary:
        'A stable home for project memory and deep technical notes.',
      action: 'Read notes',
    },
    audiences: {
      beginner: 'For beginners',
      developer: 'For developers',
      'ai-practitioner': 'For AI practitioners',
    },
    home: {
      title: 'Technical notes for builders',
      description:
        'Rustzen notes, developer workflows, prompts, skills, and long-term engineering writing.',
      lead:
        'I write about developer tools, Rustzen products, AI-assisted workflows, and practical engineering notes.',
      ctaPrimary: 'Browse Notes',
      ctaSecondary: 'Explore Prompts',
    },
  },
  zh: {
    signals: {
      title: 'Signals',
      description: 'AI 更新、信号笔记、工具变化与趋势判断。',
      intro: 'Signals 负责把 AI 噪音过滤成可执行的高价值信号。',
      summary: '发生了什么、为什么重要、谁应该关注、是否值得试。',
      action: '查看信号',
    },
    prompts: {
      title: 'Prompts',
      description: '按任务组织、可复制、可修改的 Prompt 模板。',
      intro: 'Prompts 存放可以直接拿来用的提示词资产。',
      summary: '短、结构化、可复用的 Prompt 模板库。',
      action: '复制 Prompt',
    },
    skills: {
      title: 'Skills',
      description: 'Agent 风格技能、系统提示与多步骤能力模块。',
      intro: 'Skills 记录比 Prompt 更完整的能力封装。',
      summary: '懂工具、懂约束、适合反复执行。',
      action: '查看 Skill',
    },
    notes: {
      title: 'Notes',
      description: '承载 Rustzen、架构设计、工程经验与长期记录。',
      intro: 'Notes 放的是那些不属于 AI 流，但依然长期有价值的内容。',
      summary: '项目记忆与深度技术笔记的稳定容器。',
      action: '阅读笔记',
    },
    audiences: {
      beginner: '给小白',
      developer: '给研发',
      'ai-practitioner': '给 AI 从业者',
    },
    home: {
      title: '面向建设者的技术笔记',
      description:
        '围绕 Rustzen、开发者工作流、Prompt、Skills 和长期工程笔记的内容系统。',
      lead: '我会持续记录开发工具、Rustzen 产品、AI 辅助工作流和工程实践。',
      ctaPrimary: '阅读 Notes',
      ctaSecondary: '浏览 Prompts',
    },
  },
} as const;

export const homeSections: SectionKey[] = [
  'signals',
  'prompts',
  'skills',
  'notes',
];

export const feedPageSize = 20;

export const homeMeta = {
  en: sectionMeta.en.home,
  zh: sectionMeta.zh.home,
} as const;

export function getCollectionName(section: SectionKey, locale: Locale) {
  return collectionMap[locale][section];
}

export function getSectionPath(section: SectionKey, locale: Locale) {
  return locale === 'zh' ? `/zh/${section}` : `/${section}`;
}

export function getFeedPagePath(
  locale: Locale,
  page: number,
  section?: SectionKey,
) {
  if (page <= 1) {
    return section ? getSectionPath(section, locale) : locale === 'zh' ? '/zh' : '/';
  }

  const base = section ? getSectionPath(section, locale) : locale === 'zh' ? '/zh' : '';
  return `${base}/page/${page}`;
}

export function getAudienceLabel(locale: Locale, audience: AudienceKey) {
  return sectionMeta[locale].audiences[audience];
}
