
$.ajax({
	url: 'templates/models/login.html',
	type: 'GET',
	dataType: 'html',
	success: function(data){
		$('body').prepend(data);
		if(!docCookies.getItem(currentUser)){
			$('#currentUser').text('登录实验室');
			$('#currentUser').parent().off();
		}else{
			$("#currentUser").text("我的实验室").attr('data-username', currentUser);
		}

		$('#currentUser').on('click', function(){
			if($(this).text()=='登录实验室'){
				$('.popup_loginBox').fadeIn();
			}
		});

		$('.closeed_login').click(function(){
			$('.popup_loginBox').fadeOut();
		});

		$('#remember').click(function(){
			if(this.checked){
				$('.radiobg').addClass('radiobg_bg')
			}else{
				$('.radiobg').removeClass('radiobg_bg');
			}
		});

		$('#password').keyup(function(e){
			if(e.keyCode==13){
				loginRequest();
			}
		});

		$('#loginButton').click(function(){
			loginRequest();
		});

		function loginRequest(){
			var userName = $.trim($('#username').val());
			var password = $.trim($('#password').val());
			var remember = $('#remember')[0].checked;
			var expires = cookieExpires(15);
			if((userName=='admin'&&password=='admin')||
				(userName=='th'&&password=='th')||
				(userName=='test'&&password=='test')||
				(userName=='test1'&&password=='test1')||
				(userName=='test2'&&password=='test2')||
				(userName=='test3'&&password=='test3')||
				(userName=='wq'&&password=='wq')){
				docCookies.setItem(userName, userName, expires, '/');
				if(remember){
					docCookies.setItem('49BAC005-7D5B-4231-8CEA-16939BEACD67', userName, expires, '/');
					docCookies.setItem('login', 'true', expires, '/');
				}else{
					docCookies.setItem('49BAC005-7D5B-4231-8CEA-16939BEACD67', userName);
					docCookies.setItem('login', 'true');
					docCookies.setItem('autoLogin', 'no');
				}
				$('.popup_loginBox').hide();
				location.reload();
			}else{
				$('.login-topbox p').show();
			}
			/*$.ajax({
				url: 'http://cia.thfund.com.cn/login',
				type: 'GET',
				dataType: 'json',
				data:{
					userName: userName,
					password: password
				},
				success: function(data){
					if(data===true){
						docCookies.setItem(userName, userName, expires, '/');
						if(remember){
							docCookies.setItem('49BAC005-7D5B-4231-8CEA-16939BEACD67', userName, expires, '/');
							docCookies.setItem('login', 'true', expires, '/');
						}else{
							docCookies.setItem('49BAC005-7D5B-4231-8CEA-16939BEACD67', userName);
							docCookies.setItem('login', 'true');
							docCookies.setItem('autoLogin', 'no');
						}
						$('.popup_loginBox').hide();
						location.reload();
					}else{
						$('.login-topbox p').show();
					}
				}
			});*/
		}

		function cookieExpires(daysNum){
			if (!Date.now) {
				Date.now = function now() {
					return new Date().getTime();
				};
			}
			var sExpires;
			daysNum = (daysNum!=undefined&&daysNum!=null&&daysNum!='')?daysNum:7;
			sExpires = daysNum*24*60*60*1000+Date.now();
			return new Date(sExpires);
		}

	}
});
