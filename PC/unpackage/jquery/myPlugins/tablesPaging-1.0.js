/*{
	pagingBtnBottom:翻页是否始终在底部	默认值:true 
	lineNum:行数	默认值:8行
	listNum:列数	默认值:1列
	autoHeight:自动高度   默认值:true,lineNum会不起做用
	trHeight: tr标签高度	默认值:32
	data:数据
	template:模版
	titleName: [{name:表头th名称,datakey:对应数据key}]  template启用时titleName属性不起作用
}*/
;(function($){
	$.fn.extend({
		'tablesPaging':function(options){
			var defaluts = {
				autoHeight:true,
				pagingBtnBottom:true,
				listNum:1,
				lineNum:8,
				trHeight:32
			};
			var opts = $.extend({}, defaluts, options);
			return this.each(function(){
				var $this = $(this);
				var lineNum = opts.lineNum;
				var listNum = Math.abs(opts.listNum);

				var _html = '<div class="tables">'+
								'<ul class="clearfix"></ul>'+
								'<div style="width:100%;position:absolute;">'+
									'<div class="pagingBox1">'+
										'<div class="paging">'+
											'<button class="previousPage1">上一页</button>'+
											'<span class="pageNumber1">'+
												'<span class="min">1</span>/<span class="max">1</span>'+
											'</span>'+
											'<button class="nextPage1">下一页</button>'+
										'</div>'+
										'<div class="record">共<span class="recordNum">0</span>条记录</div>'+
									'</div>'+
								'</div>'+
							'</div>';
				var ulHtml = '';
				for(var i=0; i<listNum; i++){
					ulHtml+='<li><table><thead></thead><tbody></tbody></table></li>';
				}	
				$this.html(_html);
				$this.find('ul').html(ulHtml);
				if(listNum!=1){
					$this.find('li').css({
						'float':'left',
						'width':100/listNum-1+'%',
						'margin-left':listNum/(listNum-1)+'%',
						'box-sizing':'border-box'
					});
					$this.find('li:first-child').css('margin-left', 0);
				}
				if(opts.pagingBtnBottom){$this.find('.tables>div').css('bottom', 0);}

				var bodyH = $('body').height();
				var topH = $this.find('.tables').offset().top;
				var pagingBoxH = $this.find('.pagingBox1').outerHeight();
				if(opts.autoHeight){lineNum = Math.floor((bodyH-pagingBoxH-topH)/opts.trHeight-1);}

				$this.find('.tables').height((lineNum+1)*opts.trHeight+pagingBoxH);
				$this.find('.max').text(Math.ceil(opts.data.length/(lineNum*listNum)));
				$this.find('.recordNum').text(opts.data.length);
				if(opts.template){
					dataTreatingTpl(1);
				}else{
					dataTreating(1);
				}

				$this.find('.previousPage1').click(function(){	// 上一页
					var $box = $(this).parents('.tables').parent();
					var pageNum = Number($box.find('.min').text());
					if(pageNum <= 1) {return;}
					$box.find('.min').text(--pageNum);
					if(opts.template){
						dataTreatingTpl(pageNum);
					}else{
						dataTreating(pageNum);
					}
				});
				$this.find('.nextPage1').click(function(){	// 下一页
					var $box = $(this).parents('.tables').parent();
					var pageNum = Number($box.find('.min').text());
					if(pageNum >= Number($box.find('.max').text())) {return;}
					$box.find('.min').text(++pageNum);
					if(opts.template){
						dataTreatingTpl(pageNum);
					}else{
						dataTreating(pageNum);
					}
				});

				function dataTreatingTpl(pageNum){
					var data = opts.data.slice((pageNum-1)*lineNum*listNum, (pageNum-1)*lineNum*listNum+lineNum*listNum);
					$this.find('li').each(function(index, el) {
						$(el).html(baidu.template(opts.template, {data:data.slice(index*lineNum, (index+1)*lineNum)}));
					});
					$this.find('th').outerHeight(opts.trHeight);
					$this.find('td').outerHeight(opts.trHeight);
				}

				function dataTreating(pageNum){
					var data = opts.data.slice((pageNum-1)*lineNum*listNum, (pageNum-1)*lineNum*listNum+lineNum*listNum);
					$this.find('li').each(function(index, el) {
						$(el).find('thead').html(function(){
							var theadHtml = '';
							for(var i=0; i<opts.titleName.length; i++){
								theadHtml += '<th>'+opts.titleName[i].name+'</th>';
							}
							return '<tr>'+theadHtml+'</tr>';
						});
						$(el).find('tbody').html(function(){
							var tbodyHtml = '';
							for(var i=index*lineNum; i<index*lineNum+lineNum; i++) {
								var trHtml = '';
								for (var j=0; j<opts.titleName.length; j++) {
									if(!data[i]){break;}
									trHtml += '<td>'+data[i][opts.titleName[j].dataKey]+'</td>'; 
								}
								tbodyHtml += '<tr>'+trHtml+'</tr>';
							}
							return tbodyHtml;
						});
					});
					$this.find('th').outerHeight(opts.trHeight);
					$this.find('td').outerHeight(opts.trHeight);
				}
			});
		}
	});
})(jQuery);