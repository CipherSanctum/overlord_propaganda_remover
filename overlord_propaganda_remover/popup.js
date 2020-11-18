document.addEventListener('DOMContentLoaded', function(){
  
  var flush_bs_button = document.getElementById('flush_bs_button');
  var pepe_msg = document.getElementById('pepe_msg');
  var total_flushes = document.getElementById('total_flushes');

  // Update tab's DOM with current total_flushes value
  chrome.storage.local.get(['flushes'], function(result) {
    total_flushes.textContent = result.flushes;
  });

  function flush_bs(){
    flush_bs_button.remove();
    chrome.tabs.executeScript(null, {file: 'content_script.js'});
    pepe_msg.style.display = 'block';

    // update total_flushes, and local storage value for it
    chrome.storage.local.get(['flushes'], function(result) {
      chrome.storage.local.set({flushes: 1 + result.flushes});
      total_flushes.textContent = parseInt(1 + result.flushes);
    });
  };
  flush_bs_button.onclick = flush_bs;

});
