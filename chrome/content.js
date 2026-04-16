(function() {
    let isTyping = false;

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter' && !isTyping) {
            const input = document.getElementById('chat_bar') || document.getElementById('chat_message') || document.querySelector('input[type="text"]');
            
            if (input && input.value && input.value.trim().length > 0) {
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
