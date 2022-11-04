console.info("[Tab Recycler] Automatically closing this tab in 5 seconds");
chrome.runtime.sendMessage({action: "close"}, function(response) {});