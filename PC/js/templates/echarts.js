var myCharts = echarts.init($('#chart')[0]);
window.onresize = function (){
	myCharts.resize();
};
var chartData = [];
for(var i=0; i<100; i++){
	chartData.push({
		date:'2010',
		val:Math.round(Math.random()*500)
	});
}
var option = {
	title:{
		text: '图表标题',
		left: 10,
		top:  10,
		textStyle: {
			color: '#C4C4C4',
			fontStyle: 'normal',
			fontWeight: '500',
			fontFamily: 'sans-serif',
			fontSize: 14,
		},
	},
	grid: {
		left:40,
		right:10,
		bottom:'15%',
		containLabel:false
	},
	tooltip:{
		trigger: 'axis'
	},
	legend: {
		top:10,
		right:10,
		icon:'circle',
		data:['出现次数'],
		textStyle: {
			color: "#C4C4C4",
			fontFamily: 'sans-serif',
			fontSize: 12
		}
	},
	xAxis:{
		type: 'category',
		boundaryGap:false,
		axisLine:{
			show:false
		},
		axisTick:{
			show:false
		},
		axisLabel: {
			interval:'auto',
			show: true,
			margin:10,
			formatter:null,
			textStyle: {
				color: '#C4C4C4'
			}
		},
		data: chartData.map(function (item) {
			return '  '+item["date"]+'   ';
		})
	},
	yAxis:{
		type: 'value',
		axisLine:{
			show:false
		},
		splitLine:{
			show:true,
			lineStyle:{
				color:'#3F3F3F'
			}
		},
		axisTick:{
			show:false
		},
		axisLabel: {
			formatter:'{value}',
			show: true,
			margin: 10,
			textStyle: {
				color: '#C4C4C4'
			}
		}
	},
	series: [
	{
		name:'出现次数',
		type:'line',
		// symbol:'none',
		smooth:true,
		showSymbol: false,
		areaStyle: {normal: {
			opacity:0.1
		}},
		itemStyle:{
			normal:{
				color: '#53A7E3'
			}
		},
		data: chartData.map(function (item) {
			return item['val'];
		})
	}
	]
};
myCharts.setOption(option);

var echartsInterval = function(len, num){
	var z = 0;
	if( len<num ){return 'auto';}
	while (true) {
		z++;
		if( Math.ceil(len/z) <= num ){break;}
	}
	return z;
};