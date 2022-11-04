
var xpath = "//div[contains(text(), 'in Figma app')]";

setTimeout(() => {
  var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (matchingElement) {
    console.info("[Tab Recycler] Automatically closing this tab in 5 seconds");
    chrome.runtime.sendMessage({action: "close"}, function(response) {});
  }
}, 5000);