const moment = require('moment');

moment.locale('zh-cn');

module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
        },
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        ga: 'UA-166845140-1',
    },
    '@vuepress/medium-zoom': {
        selector: '.content__default img',
    },
    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).format('LLLL'),
    },
    // 'vuepress-plugin-auto-sidebar': {
    //     // nav: true,
    //     // sort: 'desc',
    //     titleMode: 'titlecase',
    // },
    '@vuepress/active-header-links': true,
    'vuepress-plugin-smooth-scroll': true,
    'vuepress-plugin-typescript': true,
    'vuepress-types': true,
    'vuepress-plugin-clean-urls': {
        normalSuffix: '',
        indexSuffix: '/',
        notFoundPath: '/404.html',
    },
};
