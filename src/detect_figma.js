
var xpath = "//div[text()='Open here instead']";
var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (matchingElement) {
  chrome.runtime.sendMessage({action: "close"}, function(response) {
    console.log(response);
  });
}