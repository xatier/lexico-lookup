/* eslint-disable no-unused-vars */
chrome.contextMenus.create({
  title: 'Lookup "%s" on dictionary.com',
  contexts: ["selection"],
  onclick: function (info, tab) {
    const url = `https://www.dictionary.com/browse/${encodeURIComponent(
      info.selectionText
    )}`
    chrome.tabs.create({ url: url, index: tab.index + 1 })
  },
})


chrome.contextMenus.create({
  title: 'Lookup "%s" on weblio 辞書',
  contexts: ["selection"],
  onclick: function (info, tab) {
    const url = `https://www.weblio.jp/content_find?query=${encodeURIComponent(info.selectionText)}&searchType=exact`
    chrome.tabs.create({ url: url, index: tab.index + 1 })
  },
})
