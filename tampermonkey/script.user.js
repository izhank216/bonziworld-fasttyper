// ==UserScript==
// @name         BonziWORLD FastTyper
// @namespace    https://github.com/izhank216/bonziworld-fasttyper
// @version      1.0
// @description  Type fast in BonziWORLD
// @author       Izhan
// @match        https://bonzi.gay/*
// @match        https://bwiworld.onrender.com/*
// @match        https://bonzi.space/*
// @match        https://bonziworld.qzz.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let lastSent = 0;
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            const now = Date.now();
            if (now - lastSent < 100) return;
            const input = document.getElementById('chat_bar') || document.getElementById('chat_message') || document.querySelector('input[type="text"]');
            if (input && input.value.trim().length > 0) {
                lastSent = now;
                const event = new KeyboardEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    keyCode: 13
                });
                input.dispatchEvent(event);
            }
        }
    }, true);
})();
