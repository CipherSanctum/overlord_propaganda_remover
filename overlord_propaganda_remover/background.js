// This file is step 1, loads first. It's the extension's event handlers. Stays dormant until an event is fired.
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({flushes: 0});
  //declaritiveContent is required for programmatic injection of content_script. Whereas declarative (auto injection) requires more work.
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher(
        {pageUrl: {urlContains: '.youtube.com/watch'},}
      )],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


// Can use this for auto deleting as long as content loads right away, such as if a playlist goes to a new song (otherwise you get problems)
// add "webNavigation" permission in manifest if you do this

// chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
//     chrome.tabs.executeScript(null, {file:"content_script.js"});
// });
