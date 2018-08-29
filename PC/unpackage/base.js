var mak = new MakBaseFn();

/**
 * 例如：Number(123456.25687).formatMoney(3, '￥');
 * [formatMoney 数值转化成货币格式]
 * @param  {[Number]} places   [保留小数位数，默认保留2位]
 * @param  {[String]} symbol   [货币符号]
 * @param  {[String]} thousand [整数部分千位分隔符]
 * @param  {[String]} decimal  [小数分隔符]
 * @return {[type]}          [description]
 */
Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

/**
 * 例如：Number(123456.25687).monetaryUnit(3);
 * [monetaryUnit 数值转化成货币格式]
 * @param  {[Number]} num [保留小数位数，默认保留2位]
 * @return {[type]}     [description]
 */
Number.prototype.monetaryUnit = function(num) {
    var res;
    var s = this.toString().split(".")[0].length;
    var unit = s > 8 ? "亿元" : s > 4 ? "万元" : "元";
    num = num == undefined ? 2 : num;
    switch (unit) {
        case "亿元":
            res = this / 100000000;
            break;
        case "万元":
            res = this / 10000;
            break;
        case "元":
            res = this / 1;
            break;
        default:
            break;
    }
    return res.toFixed(num) + unit;
};

/**
 * 例如：arr.removeWeight('key') 以数组中对象去重
 *       arr.removeWeight() 数组去重
 * [removeWeight 数组去重]
 * @param  {[String]} key [数组中每一项为对象时，传入对象的某一项key值去重]
 * @return {[type]}     [description]
 */
Array.prototype.removeWeight = function(key) {
    var newArr = [];
    if (key) {
        var json = {};
        for (var i = 0; i < this.length; i++) {
            var k = this[i][key];
            if (!json[k]) {
                newArr.push(this[i]);
                json[k] = 1;
            }
        }
        return newArr;
    } else {
        for (var j = 0; j < this.length; j++) {
            if (newArr.indexOf(this[j]) == -1) {
                newArr.push(this[j]);
            }
        }
        return newArr;
    }
};

/**
 * 例如：arr.removeWeight(val)
 *       arr.removeWeight(val, key)
 * [removeByVal 删除数组中的一项]
 * @param  {[String]} val [description]
 * @param  {[String]} key [description]
 * @return {[type]}     [description]
 */
Array.prototype.removeByVal = function(val, key){
    if(key){
        for(var i=0; i<this.length; i++){
            if(this[i][key]==val){
                this.splice(i, 1);
                break;
            }
        }
    }else{
        for(var j=0; j<this.length; j++){
            if(this[j]==val){
                this.splice(j, 1);
                break;
            }
        }
    }
};

/**
 * 页面刷新与关闭浏览器时触发的事件
 */
$(window).bind('beforeunload', function(event) {
    if (event.clientX > document.body.clientWidth && event.clientY < 0 || event.altKey) {
        // alert('关闭浏览器时执行');
    } else {
        // alert('刷新页面时执行');
    }
});
/*window.onbeforeunload = function (){
    if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){
        alert('关闭浏览器时执行');
    }else{
        alert('刷新页面时执行');
    }
}*/

/**
 * Cookies 添加，删除，查询小框架。
 * 参数名sKey：对象key键值。
 * 参数名sValue：某一项的值。
 * 参数名daysNum：过期时间，以天为单位
 * 参数名vEnd：过期时间
 * 参数名sPath：路径
 */
function DocCookies() {

    // 获取cookie中某一项的值
    this.getItem = function(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    };

    // 增加某一项到cookie中
    this.setItem = function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    };

    // 在cookie中移除某一项
    this.removeItem = function(sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    };

    // 查看cookie里面有没有某一项
    this.hasItem = function(sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    };

    // 返回所有cookie
    this.keys = function() {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    };

    // cookie过期时间，参数以天为单位 , 不传参数默认为7天
    this.expiresItem = function(sKey, daysNum) {
        var sExpires;
        if (!Date.now) { // 兼容不支持该方法的引擎, 时间戳毫秒值
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        daysNum = (daysNum != undefined && daysNum != null && daysNum != '') ? daysNum : 7;
        sExpires = daysNum * 24 * 60 * 60 * 1000 + Date.now();
        this.setItem(sKey, this.getItem(sKey), new Date(sExpires));
    };
}


function MakBaseFn() {
    /**
     * [random 生成一个随机数]
     * @param  {[Number]} num [随机数倍数]
     * @return {[Number]}     [返回一个随机数]
     */
    this.random = function(num) {
        var multiple = num ? num : 100000;
        return Math.floor(Math.random() * multiple);
    };

    /**
     * [getFloat 四舍五入，保留n小数]
     * @param  {[Number]} number [须要处理的四舍五入数字]
     * @param  {[Number]} n      [保留多少位小数]
     * @return {[Number]}        [返回四舍五入后的数字]
     */
    this.getFloat = function(number, n) {
        n = n ? parseInt(n) : 0;
        if (n <= 0) return Math.round(number);
        number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n);
        return number;
    };
    
    /**
     * [searchNotes 数据搜索]
     * @param  {[Arr]} data [数据数组]
     * @param  {[String]} key  [数组中对象的key]
     * @param  {[type]} val  [要匹配的字符串]
     * @return {[Arr]}      [返回一个新数组]
     */
    this.searchNotes = function (data, key, val) {
        var aData = [],
            aSearch = val.split(' '),
            k = 0,
            regStr = '',
            reg;
        for (var r = 0, lenR = aSearch.length; r < lenR; r++) {
            regStr += '(' + aSearch[r] + ')([\\s\\S]*)';
        }
        reg = new RegExp(regStr);

        for (var i = 0, lenI = data.length; i < lenI; i++) {
            var title = data[i][key],
                regMatch = title.match(reg),
                searchData = {};
            k = 0;
            if (regMatch !== null) {
                var replaceReturn = "";
                for (var j = 1, lenJ = regMatch.length; j < lenJ; j++) {
                    if (regMatch[j] === aSearch[k]) {
                        // replaceReturn += '<span style="color:red;">$' + j + '</span>';
                        replaceReturn += '$' + j;
                        k++;
                    } else {
                        replaceReturn += '$' + j;
                    }
                }

                for (var obj in data[i]) {
                    if (data[i].hasOwnProperty(obj)) {
                        searchData[obj] = data[i][obj];
                    }
                }
                searchData[key] = searchData[key].replace(reg, replaceReturn);
                aData.push(searchData);
            }
        }
        return aData;
    }
    
    /**
     * [getScrollTop 获取窗口滚动条卷曲的高度]
     * @return {[Number]} [description]
     */
    this.getScrollTop = function() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    };
    
    /**
     * [getClientHeight 获取窗口可视范围的高度]
     * @return {[Number]} [description]
     */
    this.getClientHeight = function() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    };
    
    /**
     * [getScrollHeight 获取文档内容实际高度]
     * @return {[Number]} [description]
     */
    this.getScrollHeight = function() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    /**
     * [toUnicode 中文字符转unicode码]
     * @return {[String]} [description]
     */
    this.toUnicode = function() {
        if (str == '') {
            return '请输入汉字';
        }
        var str = '';
        for (var i = 0; i < str.length; i++) {
            str += "\\u" + parseInt(str[i].charCodeAt(0), 10).toString(16);
        }
        return str.replace('/', '\\');
    };

    /**
     * 例如：arr.sort(mak.dropCompare('key')) 以数组中对象排序
     *       arr.sort(mak.dropCompare()) 数组排序
     *       arr.reverse() 反转数组
     * [dropCompare 数组排序方法]
     * @param  {[String]} key [数组中每一项为对象时，传入对象的某一项key值排序]
     * @return {[type]}     [description]
     */
    this.dropCompare = function(key) { // 升序排列
        return function(a, b) {
            a = a[key] != 'undefined' ? a[key] : a;
            b = b[key] != 'undefined' ? b[key] : b;
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        };
    };

    /**
     * [charsLen 获取字符串的字节长度]
     * @param  {[String]} str [字符串]
     * @return {[Number]}     [description]
     */
    this.charsLen = function(str) {
        var realLength = 0,
            len = str.length,
            charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
            } else {
                realLength += 2;
            }
        }
        return realLength;
    };

    /**
     * [getCurrentTime 获取当前时间字符串]
     * @param  {[String]} linkSymbol [为时间链接符，不传参数返回时间属性对象]
     * @return {[type]}            [description]
     */
    this.getCurrentTime = function(linkSymbol) {
        var time = new Date();
        var timeObj = {
            'year': time.getFullYear().toString(), // 年
            'month': time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1).toString(), // 月
            'date': time.getDate() < 10 ? '0' + time.getDate() : time.getDate().toString(), // 日
            'day': time.getDay().toString(), // 星期中的第几天
            'hours': time.getHours().toString(), // 小时
            'minutes': time.getMinutes().toString(), // 分钟
            'seconds': time.getSeconds().toString(), // 秒
            'millisecond': time.getMilliseconds().toString() // 微秒
        };
        if (linkSymbol || linkSymbol == '') {
            return timeObj.year + linkSymbol + timeObj.month + linkSymbol + timeObj.date;
        } else {
            return timeObj;
        }
    };

    /**
     * 例如：mak.getLinkPath('templates');
     * [getLinkPath 获取相对路径返程方法]
     * @param  {[String]} str [文件夹名称]
     * @return {[type]}     [description]
     */
    this.getLinkPath = function(str) {
        var url = document.location.toString();
        var arrUrl = url.split(str);
        var start = arrUrl[1].indexOf("/");
        var relUrl = arrUrl[1].substring(start);
        if (relUrl.indexOf("?") != -1) {
            relUrl = relUrl.split("?")[0];
        }
        var l = relUrl.match(/\//g).length - 1;
        var s = "";
        var i = 0;
        while (i < l) {
            s += "../";
            i++;
        }
        return s;
    };

    /**
     * [getDateDiff 时间差方法，开始时间到当前时间]
     * @param  {[type]} startTime [开始时间]
     * @return {[type]}           [description]
     */
    this.getDateDiff = function(startTime) {
        if (typeof(startTime) == 'string' && startTime.indexOf('-') > -1) { // IE兼容处理
            startTime = startTime.replace(/-/g, '/');
        }
        var result;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var year = month * 12;
        var now = new Date().getTime();
        var diffValue = now - new Date(startTime).getTime();
        if (diffValue < 0) {
            return '本机时间有误';
        }
        var yearC = diffValue / year;
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (yearC >= 1) {
            result = parseInt(yearC) + "年前";
        } else if (monthC >= 1) {
            result = parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
            result = parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
            result = parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
            result = parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
            result = parseInt(minC) + "分钟前";
        } else {
            result = "刚刚";
        }
        return result;
    };

    // http://gosspublic.alicdn.com/aliyun-oss-sdk-4.4.4.min.js 引包
    /*var client = new OSS.Wrapper({    // 上传图片方法
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI5UVyE7lQndTX',
        accessKeySecret: 'R3FZMMrxfJbmE0IO87pc8cpc7aU4gO',
        bucket: 'thfundfile'
    });
    checkFileExt(input.value, ["ppt","docx","doc","xlsx","xls"], function(e){   // e是input事件对像
        var fileName = Date.now();
        var file = e.target.files[0];
        var storeAs = ''+fileName;
        client.multipartUpload(storeAs, file).then(function (result) {
            // console.log(result);
            console.log('http://thfundfile.oss-cn-beijing.aliyuncs.com/'+fileName);
        }).catch(function (err) {
            console.log(err);
        });
    });*/

    /**
     * [checkFileExt 判断上传文件格式]
     * @param  {[type]}   filename [上传按扭input.value值 ,event事件对像]
     * @param  {[Array]}   nameArr  [文件名后缀数组]
     * @param  {Function} callback [上传回调方法]
     * @return {[type]}            [description]
     */
    this.checkFileExt = function(filename, nameArr, callback) {
        var flag = false; //状态
        var index = filename.lastIndexOf(".");
        var ext = filename.substr(index + 1); // 取出上传文件的后缀扩展名
        if (nameArr instanceof Array && nameArr.length != 0) {
            for (var i = 0; i < nameArr.length; i++) { //循环比较
                if (ext == nameArr[i]) { //一旦找到合适的，立即退出循环
                    flag = true;
                    break;
                }
            }

            if (flag) { //  判断是否有文件名合法
                console.log("文件名合法");
                callback();
            } else {
                console.log("文件名不合法");
            }

        } else {
            console.log("所以文件名都合法");
            callback();
        }

    };


    /**
     * cookie过期时间
     * @param  {[Number]} daysNum [以天为单位 , 默认为：7]
     */
    this.cookieExpires = function(daysNum) {
        if (!Date.now) { // 兼容不支持该方法的引擎, 时间戳毫秒值
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var sExpires;
        daysNum = (daysNum != undefined && daysNum != null && daysNum != '') ? daysNum : 7;
        sExpires = daysNum * 24 * 60 * 60 * 1000 + Date.now();
        return new Date(sExpires);
    };

    /**
     * [getUrlSearch 获取URL地址全部数据]
     * @return {[obj]} [json数据对象]
     */
    this.getUrlSearch = function() {
        var arr = decodeURI(location.search).slice(1).split("&");
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split("=");
            obj[a[0]] = a[1];
        }
        return obj;
    };

    /**
     * [getUrlParam 获取URL地址单个数据]
     * @param  {[String]} name [url数据名称]
     * @return {[type]}      [description]
     */
    this.getUrlParam = function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    /**
     * [rootPath 自动获取当前服务器IP,端口,主目录入口]
     * @return {[type]} [description]
     */
    this.rootPath = function() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName
            .indexOf('/'));
        return window.location.protocol + '//' + window.location.host + '/' + webName;
    };

    /**
     * [recordIndex 算出对象数组中连续相同字段，的开始索引与结束索引]
     * @param  {[Array]} arr [对象数组]
     * @param  {[String]} key [字段名]
     * @param  {[Number]} num [连续num个相同字段才会被记录，默认值：1]
     * @return {[type]}     [description]
     */
    this.recordIndex = function(arr, key, num) {
        var str = arr[0][key];
        var len = arr.length - 1;
        var indexArr = [];
        var startIndex = 0;
        var n = num != undefined ? Math.abs(num) : 1;
        for (var i = 0; i < len; i++) {
            while (i < len) {
                if (arr[i][key] === str && arr[i + 1][key] !== str) {
                    if ((i + 1 - startIndex) >= n) {
                        indexArr.push((function() {
                            var obj = {};
                            obj[key] = str;
                            obj.startIndex = startIndex;
                            obj.endIndex = i + 1;
                            return obj;
                        })());
                    }
                    str = arr[i + 1][key];
                    startIndex = i + 1;
                    break;
                }
                i++;
            }
        }
        if (arr.length - 1 - startIndex >= n) {
            indexArr.push((function() {
                var obj = {};
                obj[key] = arr[startIndex][key];
                obj.startIndex = startIndex;
                obj.endIndex = arr.length - 1;
                return obj;
            })());
        }
        return indexArr;
    };

    /**
     * [dataDispose 给数组中对象补值]
     * @param  {[Array]} arr [对象数组]
     * @param  {[String]} key [字段名]
     * @return {[type]}     [description]
     */
    this.dataDispose = function(arr, key) {
        var newArr = arr;
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i][key] == null) {
                var pre = newArr[i - 1][key];
                var next = newArr[(i + 1) == newArr.length ? i : i + 1][key];
                if (pre !== null && next !== null) {
                    newArr[i][key] = Number(((pre + next) / 2).toFixed(1));
                }
            }
        }
        return newArr;
    };

    this.registerVerify = function(){
        var user = $.cookie('user');
        var pas = $.cookie('pas');
        if (user !== 'admin' && pas !== 'true') {
            // location.href = mak.rootPath() + '/PC/login.html';
            location.href = mak.rootPath() + '/login.html';
        }
    };

}


// 加密与解密
function Base64() {

    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // 加密
    this.encode = function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    };

    // 解密
    this.decode = function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    };

    // utf - 8编码的方法
    _utf8_encode = function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    };

    // utf - 8编码解码方法
    _utf8_decode = function(utftext) {
        var string = "";
        var i = 0;
        // var c = c1 = c2 = 0;
        var c = 0;
        var c1 = 0;
        var c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    };
}



/*series: [{
    type: 'line',
    name: nameArr[1],
    data: data.data.map(function(item) {
        return item.industry_value == null ? '---' : item.industry_value;
    }),
    itemStyle: {
        normal: {
            color: colors[1]
        }
    },
    markPoint: {
        label: {
            normal: {
                show: false,
            }
        },
        data: getmarkPoint(data.data, 'industry_value', 'fundstatus', 'indexstatus')
    }
}]

function getmarkPoint(data, key, compare, compare2) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i][compare] == data[i][compare2]) {
            arr.push({
                xAxis: data[i].confirmmonth,
                yAxis: data[i][key],
                symbol: data[i][compare] == 1 ? 'triangle' : "pin",
                symbolSize: data[i][compare] == 1 ? 10 : 20,
                symbolOffset: data[i][compare] == 1 ? [0, 4] : [0, 0],
            });
        }
    }
    return arr;
}*/
