$(function() {

    (function() {
        var user = $.cookie('user');
        var pas = $.cookie('pas');
        if (user === 'admin' && pas === 'true') {
            // location.href = mak.rootPath() + '/PC/indexHome.html';
            location.href = mak.rootPath() + '/indexHome.html';
        }
    })();

    $('#switch_qlogin').click(function() {
        $('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_bottom').animate({ left: '0px', width: '70px' });
        $('#qlogin').css('display', 'none');
        $('#web_qr_login').css('display', 'block');
    });

    $('#switch_login').click(function() {
        $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
        $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
        $('#switch_bottom').animate({ left: '154px', width: '70px' });
        $('#qlogin').css('display', 'block');
        $('#web_qr_login').css('display', 'none');
        $('#user').val('');
        $('#passwd').val('');
        $('#passwd2').val('');
        $('#qq').val('');
        $('#userCue').hide();
    });

    $('#subin').on('click', register);
    $('#p').on('keyup', function(e) {
        if (e.keyCode === 13) {
            register();
        }
    });

    $('#reg').click(function() { //修改密码
        var newpword = $('#passwd2').val();
        if (newpword.length < 6 || newpword.length > 20) {
            $('#userCue').show().text('新密码不能为空，大于等6位，小于等20位。');
            return;
        }
        if (newpword === $('#qq').val()) {
            /*$.ajax({
                url: 'http://10.139.57.176/soa_research/data/index?type=user_login',
                type: 'get',
                dataType: 'json',
                data: {
                    uname: $('#user').val(),
                    pword: $('#passwd').val(),
                    login_type: 0,
                    newpword: newpword
                },
                success: function(data) {
                    if (data.data[0].count !== 1) {
                        $('#userCue').show().text('用户名或密码有误，请重新输入。');
                    } else {
                        $('#userCue').show().text('修改密码成功，请用新密码登录。');
                        $('#switch_bottom').animate({ left: '0px', width: '70px' });
                        $('#qlogin').hide();
                        $('#web_qr_login').show();
                        $('#u').focus();
                    }
                }
            });*/
        } else {
            $('#userCue').show().text('新密码不相同，请重新输入。');
        }
    });

});

function register() {
    if ($('#u').val() === 'admin' && $('#p').val() === 'admin') {
        $.cookie('user', 'admin', { expires: 7, path: '/' });
        $.cookie('pas', 'true', { expires: 7, path: '/' });
        // location.href = mak.rootPath() + '/PC/indexHome.html';
        location.href = mak.rootPath() + '/indexHome.html';
    } else {
        $('#web_qr_login').children('p').text('用户名或密码有误，请重新输入。').show();
    }
}