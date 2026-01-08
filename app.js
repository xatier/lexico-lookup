/* eslint-disable no-unused-vars */
chrome.contextMenus.create({
  id: `dictionary-lookup`,
  title: 'Lookup "%s" on dictionary.com',
  contexts: ["selection"],
})

/* eslint-disable no-unused-vars */
chrome.contextMenus.create({
  id: `weblio-lookup`,
  title: 'Lookup "%s" on weblio 辞書',
  contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "dictionary-lookup") {
    const url = `https://www.dictionary.com/browse/${encodeURIComponent(
      info.selectionText
    )}`
    chrome.tabs.create({ url: url, index: tab.index + 1 })
  } else if (info.menuItemId === "weblio-lookup") {
    const url = `https://www.weblio.jp/content_find?query=${encodeURIComponent(
      info.selectionText
    )}&searchType=exact`
    chrome.tabs.create({ url: url, index: tab.index + 1 })
  } else {
    // pass
  }
})
