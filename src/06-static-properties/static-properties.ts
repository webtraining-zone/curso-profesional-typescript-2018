// https://angular.io/api/common/http/HttpClient
class HttpClient {

    static get(url: string, options: object = {}): any {
        return console.log('>> GET request');
    }

    static post(url: string, body: any | null, options?: object): any {
        return console.log('>> POST request with body', body);
    }
}

class App {
    runRequests() {
        HttpClient.get('https://example.com/api/v1');
        HttpClient.post('https://example.com/api/v1', {param: 'Param #1'});
    }
}

new App().runRequests();