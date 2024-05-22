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
  title: 'Lookup "%s" on goo 辞書',
  contexts: ["selection"],
  onclick: function (info, tab) {
    const url = `https://dictionary.goo.ne.jp/freewordsearcher.html?MT=${encodeURIComponent(info.selectionText)}&mode=0&kind=all`
    chrome.tabs.create({ url: url, index: tab.index + 1 })
  },
})
