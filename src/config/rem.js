// 修改html字体大小，rem布局
(function () {
    function resize() {
        // 基础字体大小，设计稿100px相当于1rem，750px=>7.5rem=>各种屏幕100%宽度
        var baseFontSize = 100;
        // 设计稿宽度
        var designWidth = 750;
        // 屏幕宽度
        var width = window.innerWidth;
        // 适应字体大小
        var currentFontSize = (width / designWidth) * baseFontSize;
        document.querySelector('html').style.fontSize = currentFontSize + 'px';
    }

    // 屏幕尺寸改变
    window.onresize = function () {
        resize()
    }

    // 文档载入
    document.addEventListener('DOMContentLoaded', resize)
}())