console.log('HI from popup');


const input = document.getElementById('text');
const output = document.getElementById('output');

function debounce<T extends Function>(func: T, delay: number): (...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function(this: any, ...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };

  }

input?.addEventListener('input', debounce((event: Event) => {
    const message = {
        action: 'enquire',
        text: (event.target as HTMLInputElement).value
    };

    chrome.runtime.sendMessage(message, (response) => {
        console.log('response received >>> ', response);
        
        output!.innerText = JSON.stringify(response, null, 2);
    });
}, 500));