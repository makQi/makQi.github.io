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
    ai: ['AI分析师', 'AI Analyst'],
    equity: ['权益研究员', 'Equity researcher'],
    risk: ['ESG风险排行', 'ESG Risk Ranking'],
    decline: ['ESG跌幅排行', 'ESG Decline Ranking'],
    industry: ['ESG行业平均分', 'ESG Industry Average Score'],
    puton: ['展开全部内容', 'Expand All Content'],
    totalSplit: ['总分拆分', 'Total Score Split'],
    industrySplit: ['行业拆分', 'Industry Split'],
    thirdParty: ['第三方点评', 'Third party reviews'],
    companyReviews: ['公司点评', 'Company reviews'],
    indicatorScore: ['指标得分', 'Indicator score'],
    regulatoryInfo: ['监管信息', 'Regulatory information'],
    newsAmp: ['新闻舆情', 'News & amp; public opinion'],
    modifying: ['修改中', 'Modifying'],
    modify: ['修改', 'Modify'],
    save: ['保存', 'Save'],
    cancel: ['取消', 'Cancel'],
    company: ['公司', 'Company'],
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