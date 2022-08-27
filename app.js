/* eslint-disable no-unused-vars */
chrome.contextMenus.create({
  title: 'Lookup "%s" on dictionary.com',
  contexts: ["selection"],
  onclick: function (info, tab) {
    var url = `https://www.dictionary.com/browse/${encodeURIComponent(
      info.selectionText
    )}`
    chrome.tabs.create({ url: url })
  },
})
