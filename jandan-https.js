// ==UserScript==
// @name         jandan-https
// @namespace    https://github.com/OpportunityLiu/Monkeys
// @version      0.1
// @match        https://jandan.net/*
// @match        http://jandan.net/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    "use strict";
    if (window.top != window.self) return;
    if (window.location.protocol === 'http:')
        window.location.protocol = 'https:';

    replaceAll();
    document.addEventListener('DOMContentLoaded', replaceAll);

    var observer = new MutationObserver(() => setTimeout(0, replaceAll));
    observer.observe(document, { attributes: true, childList: true, subtree: true });

    function replaceAll()
    {
        document.querySelectorAll("*").forEach(node =>{
            httpsit(node, 'href');
            httpsit(node, 'data-original');
            httpsit(node, 'src');
        });
    }
    function httpsit(node, prop)
    {
          let attr = node.getAttribute(prop);
          if (attr)
              node.setAttribute(prop, attr.replace(/^http[s]?:/, ''));
    }
})();
