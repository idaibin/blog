export const languages = {
  zh: '中文',
  en: 'English',
};

export const ui = {
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.rustzen': 'Rustzen Admin',
    'site.title': 'idaibin.dev',
    'site.description':
      '专注于 Rust、React 和现代全栈开发的技术博客，分享 Rustzen Admin 开源项目的构建经验',
    'blog.title': '📝 技术博客',
    'blog.description': '分享关于 Rust、React 和现代全栈开发的技术文章',
    'blog.stats.articles': '篇文章',
    'blog.stats.updating': '持续更新中',
    'rustzen.title': 'Rustzen Admin',
    'rustzen.description': 'Rust + React 管理后台模板项目',
    'rustzen.intro.title': 'Rustzen Admin 项目介绍',
    'rustzen.intro.description':
      '这是一个用 Rust 构建的现代化后台系统模板，具备高性能、模块化、权限完备等特点。',
    'rustzen.github': 'GitHub 项目地址',
    'rustzen.tech.title': '技术栈',
    'rustzen.tech.backend': '后端：Rust + Axum + sqlx + JWT + RBAC',
    'rustzen.tech.frontend': '前端：Vite + React + Zustand + Tailwind',
    'rustzen.tech.deploy': '部署：Rust 二进制，前后端可分离部署',
    'rustzen.articles.title': '📚 相关文章',
    'hero.greeting': '你好, 👋',
    'hero.description':
      '欢迎来到我的博客，这里记录了我关于 {rust}、{react}、全栈开发以及 {rustzen} 项目的构建与思考。',
    'hero.stats.articles': '篇文章',
    'hero.stats.projects': '个项目',
    'hero.stats.possibilities': '种可能',
    'section.rustzen.title': '🚀 Rustzen Admin 文章',
    'section.blog.title': '💡 技术博客',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.rustzen': 'Rustzen Admin',
    'site.title': 'idaibin.dev',
    'site.description':
      'Tech blog focused on Rust, React and modern full-stack development, sharing Rustzen Admin open source project construction experience',
    'blog.title': '📝 Tech Blog',
    'blog.description':
      'Sharing articles about Rust, React and modern full-stack development',
    'blog.stats.articles': 'articles',
    'blog.stats.updating': 'continuously updating',
    'rustzen.title': 'Rustzen Admin',
    'rustzen.description': 'Rust + React admin template project',
    'rustzen.intro.title': 'Rustzen Admin Project Introduction',
    'rustzen.intro.description':
      'This is a modern admin system template built with Rust, featuring high performance, modularity, and comprehensive permissions.',
    'rustzen.github': 'GitHub Repository',
    'rustzen.tech.title': 'Tech Stack',
    'rustzen.tech.backend': 'Backend: Rust + Axum + sqlx + JWT + RBAC',
    'rustzen.tech.frontend': 'Frontend: Vite + React + Zustand + Tailwind',
    'rustzen.tech.deploy':
      'Deploy: Rust binary, frontend and backend can be deployed separately',
    'rustzen.articles.title': '📚 Related Articles',
    'hero.greeting': 'Hello, 👋',
    'hero.description':
      'Welcome to my blog, where I document my thoughts on {rust}, {react}, full-stack development, and the construction of {rustzen} project.',
    'hero.stats.articles': 'articles',
    'hero.stats.projects': 'projects',
    'hero.stats.possibilities': 'possibilities',
    'section.rustzen.title': '🚀 Rustzen Admin Articles',
    'section.blog.title': '💡 Tech Blog',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return ui[lang][key] || ui['zh'][key];
  };
}
