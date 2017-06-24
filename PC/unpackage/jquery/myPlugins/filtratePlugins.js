/*{
	listData: 筛选列表数据
	confirmBtnClick: 点击确定事件处理方法
}*/

;(function($){
	$.fn.extend({
		'filtrate':function(options){
			var defaluts = {
				listData:[{
					label:'筛选1',
					inputVal:'筛选1'
				},{
					label:'筛选2',
					inputVal:'筛选2'
				}]
			};
			var opts = $.extend({}, defaluts, options);
			return this.each(function(){
				var $this = $(this);
				var _html = '';
				$this.css({position:'relative'});
				$this.append('<div class="filtrateBox" style="display:none; position:absolute">'+
					'<button class="confirmBtn">确定</button></div>');
				for(var i=0; i<opts.listData.length; i++){
					_html += '<li>'+
								'<label>'+opts.listData[i].label+'</label>'+
								'<input type="checkbox" checked="checked" value="'+opts.listData[i].inputVal+'">'
							+'</li>';
				}
				$this.find('.filtrateBox').prepend('<ul>'+_html+'</ul>');

				$this.click(function(e){
					e.stopPropagation();
					$(this).find('.filtrateBox').toggle();
				});
				$this.find('label').click(function(e){
					e.stopPropagation();
					if($(this).next("input[type='checkbox']").is(':checked')){
						$(this).next('input')[0].checked=false;
					}else{
						$(this).next('input')[0].checked=true;
					}
				});
				$this.find('.confirmBtn').click(opts.confirmBtnClick);
				$this.find('.filtrateBox').click(function(e){
					e.stopPropagation();
				});
				$(window).click(function(){
					$this.find('.filtrateBox').hide();
				});
			});
		}
	});
})(jQuery);