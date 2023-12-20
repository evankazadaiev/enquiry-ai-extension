console.log('HI from popup');


const input = document.getElementById('text');
const output = document.getElementById('output');
const button = document.getElementById('button');
let context = '';

(async () => {
  const [tab] = await chrome.tabs.query({  active: true, currentWindow: true });
   
  if (tab?.id) {
     const result = await chrome.scripting.executeScript({
       target: { tabId: tab.id },
       func: () => document.body.innerText,
     });

     if (result[0]) {
      context = result[0].result;
     }

     console.log("result >> ", result, context);
  }
})();


function debounce<T extends Function>(func: T, delay: number): (...args: any[]) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function(this: any, ...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };

  }




let text = '';

input?.addEventListener('input', debounce(async (event: Event) => {
  text = (event.target as HTMLInputElement).value;
}, 500));

button?.addEventListener('click', () => {
  const message = {
    action: 'enquire',
    text,
    context
 };


  chrome.runtime.sendMessage(message, (response) => {
    console.log('response received >>> ', response);
    text = '';
    if (input) {
      (input as HTMLInputElement).value = '';
    }
    output!.innerText = JSON.stringify(response, null, 2);
  });
});