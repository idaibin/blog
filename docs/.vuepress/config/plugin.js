const moment = require('moment');

moment.locale('zh-cn');

module.exports = {
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/active-header-links': true,
    'vuepress-plugin-mathjax': {
        target: 'svg',
        // macros: {
        //   '*': '\\times',
        // },
    },
    // '@vuepress/pwa': {
    // serviceWorker: true,
    // updatePopup: true,
    // updatePopup: {
    //     message: '发现新内容可用.',
    //     buttonText: '刷新',
    // },
    // },
    '@vuepress/google-analytics': {
        ga: 'UA-166845140-1',
    },
    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format('LLLL'),
    },
    'vuepress-plugin-typescript': true,
    'vuepress-types': true,
    'vuepress-plugin-clean-urls': {
        normalSuffix: '',
        indexSuffix: '/',
        notFoundPath: '/404.html',
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        locale: 'zh', // 语言设置

        // 其他的 Vssue 配置
        owner: 'daibin91', // 你的github账户名称
        repo: 'blog', // 你的Github博客仓库 我填的是soyomo
        clientId: '0b99341c54e8d972541b', // 你在github上面申请的clientId
        clientSecret: 'de8a8009e1138a81e443dc6c17f42a3c4b76c7dc', // 在github上面申请的clientSecret
    },
    container: [
        {
            type: 'tip',
            defaultTitle: {
                '/': '提示',
            },
        },
        {
            type: 'warning',
            defaultTitle: {
                '/': '注意',
            },
        },
        {
            type: 'danger',
            defaultTitle: {
                '/': '警告',
            },
        },
        {
            type: 'details',
            before: (info) =>
                `<details class="custom-block details">${
                    info ? `<summary>${info}</summary>` : ''
                }\n`,
            after: () => '</details>\n',
        },
    ],
};
