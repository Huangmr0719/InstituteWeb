// 加载页眉
async function loadHeader() {
    const response = await fetch('/components/header.html');
    const html = await response.text();
    document.getElementById('header-placeholder').innerHTML = html;
    initializeHeader();
}

// 加载页脚
async function loadFooter() {
    const response = await fetch('/components/footer.html');
    const html = await response.text();
    document.getElementById('footer-placeholder').innerHTML = html;
}

// 初始化页眉的事件监听器
function initializeHeader() {
    document.getElementById("menuButton").addEventListener("click", function () {
        var content = document.getElementById("menu_list");
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    window.addEventListener('resize', function () {
        var menuList = document.getElementById('menu_list');
        if (window.innerWidth > 700) {
            menuList.style.display = 'none';
            menuList.style.maxHeight = null;
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});