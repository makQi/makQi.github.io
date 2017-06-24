
$('.filter').filtrate({
	listData:[{
		label:'发审委通过',
		inputVal:'发审委通过'
	},{
		label:'证监会批准',
		inputVal:'证监会批准'
	},{
		label:'银监会批准',
		inputVal:'银监会批准'
	}],
	confirmBtnClick:function(){
		var newData=[];
		$(this).prev('ul').find('input').each(function(index, el) {
			if(el.checked){
				newData.push($(this).val());
			}
		});
		console.log(newData);
	}
});

