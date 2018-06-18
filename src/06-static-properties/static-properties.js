// https://angular.io/api/common/http/HttpClient
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return console.log('>> GET request');
    };
    HttpClient.post = function (url, body, options) {
        return console.log('>> POST request with body', body);
    };
    return HttpClient;
}());
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.runRequests = function () {
        HttpClient.get('https://example.com/api/v1');
        HttpClient.post('https://example.com/api/v1', { param: 'Param #1' });
    };
    return App;
}());
new App().runRequests();
