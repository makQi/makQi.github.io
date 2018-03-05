(function(){
	var use = myCookies.getItem('admin');
	if(use!='true'||use==null){
		location.href = window.location.protocol + '//' + window.location.host;
	}
})();

function newsfontColor() { // 新闻标题，字体颜色
    var keyword = keyStr.split(' ');
    $('.tableBox').find('.newsfont').each(function(index, el) {
        var $this = $(this).children('a');
        for (var i = 0; i < keyword.length; i++) {
            if (keyword[i] == '') {
                continue;
            }
            var re = new RegExp(keyword[i], 'g');
            var _text = $this.html();
            $this.html(_text.replace(re, '<span style="color: #53A7E3">' + keyword[i] + '</span>'));
        }
    });
}
