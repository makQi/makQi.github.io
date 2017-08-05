(function(doc, win){
	var currClientWidth,fontValue,originWidth;
    originWidth = 750;  //ui设计稿的宽度，一般750或640
    __resize();
    win.addEventListener('resize', __resize, false);
    function __resize() {
    	currClientWidth = doc.documentElement.clientWidth;
    	if (currClientWidth > 750){
    		currClientWidth = 750;
    	} 
    	if (currClientWidth < 320){
    		currClientWidth = 320;
    	} 
    	fontValue = ((625 * currClientWidth) / originWidth).toFixed(2);
    	doc.documentElement.style.fontSize = fontValue + '%';
    }
})(document, window);


/*(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=750){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/


/*new function (){
   var _self = this;
   console.log(this);
   _self.width = 750;//设置默认最大宽度
   _self.fontSize = 100;//默认字体大小
   _self.widthProportion = function(){var p = (document.body&&document.body.clientWidthdocument.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
   _self.changePage = function(){
       document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
   }
   _self.changePage();
   window.addEventListener("resize",function(){_self.changePage();},false);
};*/
