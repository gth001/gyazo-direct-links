// ==UserScript==
// @name gyazo direct links
// @version 1.0
// @description gyazo direct links
// @grant GM_setClipboard
// @grant window.close
// @match https://*.gyazo.com/*
// ==/UserScript==

// A userscript for Tampermonkey which improves Gyazo. All gyazo image tabs will auto-close and the direct image link will be copied to the clipboard. Inspired by https://gist.github.com/paulirish/1470003

if (/\/\/gyazo\.com\/[0-9a-zA-Z]{15}/.test(location.href)) {
    var newLink = location.protocol + '//i.' + location.host + location.pathname + '.png';
    GM_setClipboard(newLink);
    window.close();
    //location.href = newLink;
} else if (document.body.classList.contains('error') || document.body.innerText.includes('Gyazo image is not found')) {
    var newLink2 = window.location.href.replace(/\.png$/, '.jpg');
    GM_setClipboard(newLink2);
    window.close();
    //location.href = newLink2;
}
