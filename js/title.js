//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '常回家看看~';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = 'Rycanの手记簿';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});