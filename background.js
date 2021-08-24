const re = new RegExp('.*:\/\/shopee\..*\/search.*');

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  if(details.url.match(re)){
    chrome.scripting.executeScript({
      target: {tabId: details.tabId},
      files: ["shopee.js"]
    });
  }
});
