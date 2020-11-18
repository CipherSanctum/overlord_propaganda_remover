// this has access to the DOM of the YT page I'm on (content_scripts["matches"]), so the edits here are always in context of browser html, not popup.html
var bullshit = document.getElementById('clarify-box');
bullshit.remove();
