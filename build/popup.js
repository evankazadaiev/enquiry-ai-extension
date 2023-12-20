/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/

console.log('HI from popup');
const input = document.getElementById('text');
const output = document.getElementById('output');
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
input === null || input === void 0 ? void 0 : input.addEventListener('input', debounce((event) => {
    const message = {
        action: 'enquire',
        text: event.target.value
    };
    chrome.runtime.sendMessage(message, (response) => {
        console.log('response received >>> ', response);
        output.innerText = JSON.stringify(response, null, 2);
    });
}, 500));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VucXVpcnktYWktZXh0Ly4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc29sZS5sb2coJ0hJIGZyb20gcG9wdXAnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKTtcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgbGV0IHRpbWVvdXRJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH07XG59XG5pbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBkZWJvdW5jZSgoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICBhY3Rpb246ICdlbnF1aXJlJyxcbiAgICAgICAgdGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIHJlY2VpdmVkID4+PiAnLCByZXNwb25zZSk7XG4gICAgICAgIG91dHB1dC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMik7XG4gICAgfSk7XG59LCA1MDApKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==