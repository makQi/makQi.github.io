(function(){
	var use = myCookies.getItem('admin');
	if(use!='true'||use==null){
		location.href = window.location.protocol + '//' + window.location.host;
	}
})();