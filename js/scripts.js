// 为随机文章按钮添加点击事件
$('.random-posts-btn').click(function() {
    // 发送 Ajax 请求获取随机文章的 URL
    $.ajax({
        url: '/random',
        type: 'GET',
        success: function(data) {
            // 跳转到随机文章的 URL
            window.location.href = data.url;
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
});