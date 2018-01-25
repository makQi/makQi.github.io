(function(){
	var use = myCookies.getItem('admin');
	if(use!='true'||use==null){
		location.href = mak.rootPath();
	}
})();