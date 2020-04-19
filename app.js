/* eslint-disable no-unused-vars */
chrome.contextMenus.create({
    "title": "Lookup \"%s\" on lexico.com",
    "contexts": ['selection'],
    "onclick": function (info, tab) {
        var url = 'https://www.lexico.com/search?utf8=%E2%9C%93&filter=noad&dictionary=en&query='
            + encodeURIComponent(info.selectionText)
        chrome.tabs.create({ url : url });
    }
});
