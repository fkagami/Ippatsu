chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null,
    {file: "jquery.js"}, function(){
      chrome.tabs.executeScript(null,
        {file: "sample1.js"}, function(){
        });
    });
});
