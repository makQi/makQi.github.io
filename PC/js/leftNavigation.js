$('.mainLeftBox li').click(function(e) { // 替换页面
    e.stopPropagation();
    var $this = $(this);
    $('.mainLeftBox li').removeClass('bgs');
    $this.addClass('bgs');
    var src = $this.attr('data-html') + "?random=" + Math.floor(Math.random() * 100000); // 对IE不刷新页面的处理
    $('#myiframe').attr('src', src);
});

$('.list h3').click(function(e) { // 左侧导航
    var $this = $(this);
    var $list = $this.parent();
    if ($list.attr('data-flag') == 'on') {
        $list.attr('data-flag', 'off');
        $this.removeClass('unfold').addClass('withdraw');
    } else {
        $list.attr('data-flag', 'on');
        $this.removeClass('withdraw').addClass('unfold');
    }
    $list.find('ul').slideToggle();
});