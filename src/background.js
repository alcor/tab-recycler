// var whitelist = [
//   /https:\/\/.*zoom\.us\/j\/.+?status=success/
// ]

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
//   var url = tab.url;
//   for (var pattern of whitelist) {
//     if (pattern.test(url)) {
//       console.log(pattern, url)
//       // closeTab(tabId, 10000);
//       break;
//     }
//   }
// });

function closeTab(tabId, delay) {
  setTimeout(function() {
    chrome.tabs.remove(tabId)
    }, delay || 3000)
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "close") {
      closeTab(sender.tab.id, 3000);

    }
  });