var whitelist = [
  // /https:\/\/.*zoom\.us\/j\/.+?status=success/
]

var enabled;
chrome.storage.sync.get({ enabled: true }, function(items) {
  enabled = items.enabled
});

// chrome.browserAction.onClicked.addListener(function () {
//   enabled = !enabled;
//   chrome.storage.sync.set({ enabled: enabled }, function() {})
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  var url = changeInfo.url;
  if (!url) return;
  for (var pattern of whitelist) {
    if (pattern.test(url)) {
      console.log(pattern, url)
      closeTab(tabId, 10000);
      break;
    }
  }
});

function closeTab(tabId, delay) {
  setTimeout(function() {
    chrome.tabs.remove(tabId)
    }, delay || 5000)
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "close") {
      closeTab(sender.tab.id, 5000);

    }
  });