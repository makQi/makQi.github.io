
/**
 * tabCustomData: 自定义数据传入
 * minWidth: 输入页码input初使宽度，是一个数字所占的宽度	默认值:11.38
 * pagingBtnBottom: 翻页是否始终在底部	默认值:true 
 * lineNum: 行数	默认值:8行
 * listNum: 列数	默认值:1列
 * autoHeight: 自动高度   默认值:true,lineNum会不起做用
 * trHeight: tr标签高度	默认值:32
 * data: 数据
 * template: 模版
 * titleName: [{name:表头th名称,datakey:对应数据key}]  template启用时titleName属性不起作用
 */

;(function($){
	$.fn.extend({
		'tablesPaging':function(options){
			var defaluts = {
				tabCustomData:null,
				minWidth:11.38,
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
									'<div class="paging_box">'+
										'<div class="paging">'+
											'<button class="previous_page">上一页</button>'+
											'<span class="page_number">'+
												'<input class="min" type="number" title="点击可输入页码，然后请按Enter回车" value="1"></input>'+
												'/'+
												'<span class="max">1</span>'+
											'</span>'+
											'<button class="next_page">下一页</button>'+
										'</div>'+
										'<div class="record">共<span class="record_num">0</span>条记录</div>'+
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
				var pagingBoxH = $this.find('.paging_box').outerHeight();
				if(opts.autoHeight){lineNum = Math.floor((bodyH-pagingBoxH-topH)/opts.trHeight-1);}

				$this.find('.tables').height((lineNum+1)*opts.trHeight+pagingBoxH);
				$this.find('.min').width(opts.minWidth);
				$this.find('.max').text(Math.ceil(opts.data.length/(lineNum*listNum)));
				$this.find('.record_num').text(opts.data.length);
				dataTreating(1);

				$this.find('.previous_page').click(function(){	// 上一页
					var $box = $(this).parents('.tables').parent();
					var pageNum = Number($box.find('.min').val());
					if(pageNum <= 1) {return;}
					$box.find('.min').val(--pageNum).width(opts.minWidth*pageNum.toString().length);
					dataTreating(pageNum);
				});
				$this.find('.next_page').click(function(){	// 下一页
					var $box = $(this).parents('.tables').parent();
					var pageNum = Number($box.find('.min').val());
					if(pageNum >= Number($box.find('.max').text())) {return;}
					$box.find('.min').val(++pageNum).width(opts.minWidth*pageNum.toString().length);
					dataTreating(pageNum);
				});
				$this.find('.min').on('input', function(){	// 输入页码翻页
					var $this = $(this);
					var max = Number($this.parent().children('.max').text());
					var val = Number($this.val());
					if(val<1){
						$this.val('');
						return;
					}else if(val>max){
						$this.val(max);
					}
					$this.width(opts.minWidth*$this.val().length);
				}).on('keydown', function(e){
					var $this = $(this);
					var page = $this.val();
					if(e.keyCode==13){
						if(page==''){
							$(this).val(1);
							dataTreating(1);
						}else{
							dataTreating(page);
						}
					}
				}).on('click', function(){
					$(this).val('').width(opts.minWidth);
				});

				function dataTreating(pageNum){	// 数据处理
					var data = opts.data.slice((pageNum-1)*lineNum*listNum, (pageNum-1)*lineNum*listNum+lineNum*listNum);
					if(opts.template){
						$this.find('li').each(function(index, el) {
							$(el).html(baidu.template(opts.template, {
								data:data.slice(index*lineNum, (index+1)*lineNum),
								tabCustomData:opts.tabCustomData
							}));
						});
					}else{
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
					}
					$this.find('th').outerHeight(opts.trHeight);
					$this.find('td').outerHeight(opts.trHeight);
				}
			});
		}
	});
})(jQuery);