/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('HI from popup');
const input = document.getElementById('text');
const output = document.getElementById('output');
const button = document.getElementById('button');
let context = '';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
    if (tab === null || tab === void 0 ? void 0 : tab.id) {
        const result = yield chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => document.body.innerText,
        });
        if (result[0]) {
            context = result[0].result;
        }
        console.log("result >> ", result, context);
    }
}))();
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
let text = '';
input === null || input === void 0 ? void 0 : input.addEventListener('input', debounce((event) => __awaiter(void 0, void 0, void 0, function* () {
    text = event.target.value;
}), 500));
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const message = {
        action: 'enquire',
        text,
        context
    };
    chrome.runtime.sendMessage(message, (response) => {
        console.log('response received >>> ', response);
        text = '';
        if (input) {
            input.value = '';
        }
        output.innerText = JSON.stringify(response, null, 2);
    });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQ0FBbUM7QUFDL0U7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7VUV2REQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VucXVpcnktYWktZXh0Ly4vc3JjL3BvcHVwLnRzIiwid2VicGFjazovL2VucXVpcnktYWktZXh0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZW5xdWlyeS1haS1leHQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2VucXVpcnktYWktZXh0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc29sZS5sb2coJ0hJIGZyb20gcG9wdXAnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKTtcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24nKTtcbmxldCBjb250ZXh0ID0gJyc7XG4oKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICBpZiAodGFiID09PSBudWxsIHx8IHRhYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFiLmlkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IHRhYi5pZCB9LFxuICAgICAgICAgICAgZnVuYzogKCkgPT4gZG9jdW1lbnQuYm9keS5pbm5lclRleHQsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0WzBdKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gcmVzdWx0WzBdLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCA+PiBcIiwgcmVzdWx0LCBjb250ZXh0KTtcbiAgICB9XG59KSkoKTtcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XG4gICAgbGV0IHRpbWVvdXRJZDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH07XG59XG5sZXQgdGV4dCA9ICcnO1xuaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZGVib3VuY2UoKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xufSksIDUwMCkpO1xuYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIGFjdGlvbjogJ2VucXVpcmUnLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjb250ZXh0XG4gICAgfTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlIHJlY2VpdmVkID4+PiAnLCByZXNwb25zZSk7XG4gICAgICAgIHRleHQgPSAnJztcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMik7XG4gICAgfSk7XG59KTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvcG9wdXAudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==