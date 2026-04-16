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
    let isTyping = false;

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter' && !isTyping) {
            const input = document.getElementById('chat_bar') || document.getElementById('chat_message') || document.querySelector('input[type="text"]');
            
            if (input && input.value.trim().length > 0) {
                isTyping = true;
                const fullText = input.value;
                input.value = "";
                let i = 0;

                const typeInterval = setInterval(() => {
                    if (i < fullText.length) {
                        input.value += fullText[i];
                        i++;
                    } else {
                        clearInterval(typeInterval);
                        isTyping = false;
                        const event = new KeyboardEvent('keydown', {
                            bubbles: true,
                            cancelable: true,
                            keyCode: 13
                        });
                        input.dispatchEvent(event);
                    }
                }, 10);
            }
        }
    }, true);
})();
