/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/

console.log('HI from content');
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
});
console.log(document.body.innerText);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUMsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5xdWlyeS1haS1leHQvLi9zcmMvY29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnNvbGUubG9nKCdISSBmcm9tIGNvbnRlbnQnKTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhzZW5kZXIudGFiID9cbiAgICAgICAgXCJmcm9tIGEgY29udGVudCBzY3JpcHQ6XCIgKyBzZW5kZXIudGFiLnVybCA6XG4gICAgICAgIFwiZnJvbSB0aGUgZXh0ZW5zaW9uXCIpO1xuICAgIGlmIChyZXF1ZXN0LmdyZWV0aW5nID09PSBcImhlbGxvXCIpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGZhcmV3ZWxsOiBcImdvb2RieWVcIiB9KTtcbn0pO1xuY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5pbm5lclRleHQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9