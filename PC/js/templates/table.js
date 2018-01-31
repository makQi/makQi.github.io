
var tabData = [];
for(var i=0; i<800; i++){
	tabData.push({
		a:2017+i,
		b:i+1
	});
}
$('#tab').tablesPaging({
	/*titleName:[
		{
			name:'时间',
			dataKey:'a'
		},{
			name:'指数',
			dataKey:'b'
		}
	],*/
	template:'tab_tpl',
	listNum:5,
	lineNum:10,
	autoHeight:false,
	data:tabData
});

