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
const sideBar = {};
barConfig.sidebar.forEach((item) => {
    const title = item.title.toLowerCase();
    sideBar[`/${title}/`] = convertPath(item.children, `${title}/`);
});

module.exports = function name(params) {};
