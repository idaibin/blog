const headConfig = require('./config/head.js');
const navConfig = require('./config/nav.js');
const pluginConfig = require('./config/plugin.js');

module.exports = {
    title: '代斌',
    description: 'Just playing around',
    head: headConfig,
    plugins: pluginConfig,
    // base: '/blog/',
    // dest:"./dist",    // 设置打包路径
    // description: '编程、算法', // 描述
    // keywords: '代斌的博客', // 关键字
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'daibin91/blog',
        editLinks: true,
        editLinkText: '编辑文档！',
        // docsDir: 'docs',
        // displayAllHeaders: false,
        nav: navConfig,
        sidebar: {
            '/leetcode/': getLeetcodeSidebar(),
            '/tools/': getToolsSidebar(),
        },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: true,
        smoothScroll: true,
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
        toc: { includeLevel: [2, 3, 4, 5] },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@problems': '../../problems/',
            },
        },
    },
};

function getLeetcodeSidebar() {
    return [
        {
            title: '数据结构&算法',
            collapsable: true,
            children: [''],
        },
        {
            title: '栈',
            collapsable: true,
            children: ['stack/20-valid-parentheses', 'stack/155-min-stack'],
        },
        {
            title: 'leetcode',
            collapsable: true,
            children: [
                '24-swap-pairs',
                '42-trapping-rain-water',
                '136-single-number',
                '202-happy-number',
                '344-reverse-string',
                '914-x-of-a-kind-in-a-deck-of-cards',
            ],
        },
    ];
}

function getToolsSidebar() {
    return [
        {
            title: '工具效率',
            collapsable: true,
            children: ['', 'webs', 'mac-os', 'vs-code'],
        },
    ];
}
