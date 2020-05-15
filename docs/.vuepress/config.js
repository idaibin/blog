module.exports = {
    base: '/blog/',
    title: 'Hello DaiBin',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: 'Last Updated',
        // displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Leetcode', link: '/leetcode/' },
        ],
        sidebar: {
            '/leetcode/': ['', '24', '42', '136', '202', '344'],
        },
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4'],
        toc: { includeLevel: [2, 3] },
    },
};
