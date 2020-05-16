module.exports = {
    base: '/blog/',
    // dest:"./dist",    // 设置打包路径
    description: '编程、算法', // 描述
    keywords: '代斌的博客', // 关键字
    title: '代斌',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: 'Last Updated',
        // displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Leetcode', link: '/leetcode/' },
            { text: 'Tools', link: '/tools/' },
        ],
        // sidebar: {
        //     '/leetcode/': ['', '24', '42', '136', '202', '344', '914'],
        // },
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
        toc: { includeLevel: [2, 3, 4, 5] },
    },
    plugins: [
        '@vuepress/plugin-google-analytics',
        '@vuepress/plugin-back-to-top',
        '@vuepress/active-header-links',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-typescript',
        'vuepress-types',
        ['vuepress-plugin-auto-sidebar', {}],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ],
};
