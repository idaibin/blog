const headConfig = require('./config/head.js');
const navConfig = require('./config/nav.js');
const pluginConfig = require('./config/plugin.js');
const getConfig = require('vuepress-bar');
const barConfig = getConfig(`${__dirname}/..`, {
    // addReadMeToFirstGroup: false,
    // stripNumbers: false,
});

function convertPath(array, replaceStr) {
    const paths = [];
    array
        .filter((child) => child !== '')
        .forEach((child) => {
            if (child.children) {
                paths.push(...convertPath(child.children, replaceStr));
            } else {
                paths.push(child.replace(replaceStr, ''));
            }
        });
    return paths;
}
const sidebar = {};
barConfig.sidebar.forEach((item) => {
    const title = item.title.toLowerCase();
    sidebar[`/${title}/`] = convertPath(item.children, `${title}/`);
});

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
        docsDir: 'docs',
        displayAllHeaders: true,
        nav: navConfig,
        sidebar,
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
        toc: { includeLevel: [2, 3, 4, 5] },
    },
};
