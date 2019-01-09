/*$(function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";
    document.getElementsByTagName('head')[0].appendChild(script);

    var value = sessionStorage.getItem("language");
    document.onreadystatechange = function() {
        if (document.readyState == 'complete') {
            if (value === "English") {
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }

    function onProgress(value) {}

    function onError(error) {}

    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }

    function onRestoreOriginal() {}
});*/

var langArr = {
    search: ['搜索', 'search'],
    modify: ['修改', 'Modify'],
    save: ['保存', 'Save'],
    cancel: ['取消', 'Cancel'],
    company: ['公司', 'Company'],
    date: ['日期', 'Date'],
    time: ['时间', 'Time'],
    updated: ['更新', 'Updated']
};

var langText = {};
for (var key in langArr) {
    langText[key] = {};
    langText[key].Chinese = langArr[key][0];
    langText[key].English = langArr[key][1];
}

if (ark.language) {
    $('.language').find('select').val(ark.language);
}

$('.language').on('change', 'select', function() {
    sessionStorage.setItem('language', $(this).val());
    window.location.reload();
});