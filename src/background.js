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
    return true;
  }
);