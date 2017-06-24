var linkPath = getLinkPath('templates');

$.ajax({
	url:linkPath+'models/nav.html',
	type:'GET',
	// async:false,
	dataType:'html',
	success:function(data){
		$('body').prepend(data);
	}
});

function getLinkPath(str){
	var url = document.location.toString();
	var arrUrl = url.split(str);
	if(!arrUrl[1]) return str+'/';
	var start = arrUrl[1].indexOf("/");
	var relUrl = arrUrl[1].substring(start);
	if(relUrl.indexOf("?") != -1){
		relUrl = relUrl.split("?")[0];
	}
	var l = relUrl.match(/\//g).length-1;
	var s="";
	var i=0;
	while(i<l){
		s+="../";
		i++;
	}
	return s;
}