var linkPath = mak.getLinkPath('templates');
$.ajax({
	url: linkPath + 'models/navHtml.html',
	type: 'GET',
	// async:false,
	dataType: 'html',
	success:function(data){
		$('body').prepend(data);
	}
});