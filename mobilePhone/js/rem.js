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